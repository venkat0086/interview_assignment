const moment = require("moment");

function findAvailableTimes(start, end, slotDuration, events) {
  // Sort the events array in ascending order based on the start time of each event.
  events.sort((a, b) => moment(a.start).diff(moment(b.start)));

  const availableSlots = [];

  // Check if there is a gap between the start time of the requested range and the start time of the first event.
  const firstEvent = events[0];
  const startTime = moment(start).utc();
  const firstEventStart = moment(firstEvent.start).utc();
  if (startTime.isBefore(firstEventStart)) {
    const duration = moment.duration(firstEventStart.diff(startTime));
    if (duration.asMinutes() >= slotDuration) {
      availableSlots.push({
        start: startTime.format("ddd, DD MMM YYYY HH:mm:ss [GMT]"),
        end: firstEventStart.format("ddd, DD MMM YYYY HH:mm:ss [GMT]"),
        busy: false,
      });
    }
  }

  // Loop through the events array and check for gaps between events.
  for (let i = 0; i < events.length - 1; i++) {
    const currentEvent = events[i];
    const nextEvent = events[i + 1];
    const currentEventEnd = moment(currentEvent.end).utc();
    const nextEventStart = moment(nextEvent.start).utc();
    const duration = moment.duration(nextEventStart.diff(currentEventEnd));
    if (duration.asMinutes() >= slotDuration) {
      availableSlots.push({
        start: currentEventEnd.format("ddd, DD MMM YYYY HH:mm:ss [GMT]"),
        end: nextEventStart.format("ddd, DD MMM YYYY HH:mm:ss [GMT]"),
        busy: false,
      });
    }
  }

  // Check if there is a gap between the end time of the last event and the end time of the requested range.
  const lastEvent = events[events.length - 1];
  const endTime = moment(end).utc();
  const lastEventEnd = moment(lastEvent.end).utc();
  if (endTime.isAfter(lastEventEnd)) {
    const duration = moment.duration(endTime.diff(lastEventEnd));
    if (duration.asMinutes() >= slotDuration) {
      availableSlots.push({
        start: lastEventEnd.format("ddd, DD MMM YYYY HH:mm:ss [GMT]"),
        end: endTime.format("ddd, DD MMM YYYY HH:mm:ss [GMT]"),
      });
    }
  }

  return availableSlots;

  //   return events;
}

const events = [
  {
    start: "Wed, 03 Mar 2021 04:00:15 GMT",
    end: "Wed, 03 Mar 2021 05:00:15 GMT",
  },
  {
    start: "Wed, 03 Mar 2021 06:00:15 GMT",
    end: "Wed, 03 Mar 2021 06:30:15 GMT",
  },
];

const start = moment("Wed, 03 Mar 2021 05:00:15 GMT");
const end = moment("Wed, 03 Mar 2021 05:30:15 GMT");
const slotDuration = 30; // in minutes
const availableSlots = findAvailableTimes(start, end, slotDuration, events);

console.log(availableSlots);
