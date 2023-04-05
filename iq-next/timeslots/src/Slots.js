import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import events from "./events.json";
import moment from "moment";

const Slots = () => {
  const durationOptions = [
    { value: "30", label: "30 min" },
    { value: "60", label: "1 Hour" },
    { value: "90", label: "1 Hour 30 min" },
    { value: "120", label: "2 Hours" },
  ];
  const currentDate = new Date();
  // Set the default value for the time input field
  const currentTime = new Date().toLocaleTimeString("en-US", {
    hour12: false,
    hour: "numeric",
    minute: "numeric",
  });

  const [date, setDate] = useState(currentDate); // set default date to today
  const [time, setTime] = useState(currentTime); // set default time to current time
  const [timeSlots, setTimeSlots] = useState([]);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  useEffect(() => {
    const updateTimeSlots = events.map((item) => {
      return {
        start: item.start.slice(-12).split(":").slice(0, 2).join(":"),
        end: item.end,
        busy: true,
      };
    });
    setTimeSlots(updateTimeSlots);
    events.sort((a, b) => moment(a.start).diff(moment(b.start)));
  }, []);

  const handleFind = () => {
    const newSlot = {
      start: time,
      end: `${date}`,
      busy: false,
    };
    setTimeSlots((prevState) => {
      const newArray = [...prevState, newSlot];
      const sortedTimeslots = newArray.sort((a, b) => {
        const startTimeA = new Date(`2000-01-01T${a.start}:00`);
        const startTimeB = new Date(`2000-01-01T${b.start}:00`);
        return startTimeA - startTimeB;
      });
      return sortedTimeslots;
    });
    console.log(timeSlots);
    console.log(date, time);
  };
  return (
    <div className="container mx-auto mt-8 max-w-2xl">
      <div className="mb-4 text-lg font-bold">FIND A FREE TIME</div>
      <div className="grid grid-cols-3 gap-4">
        {/* Date Input */}
        <div className="col-span-1">
          <label
            htmlFor="date"
            className="block text-gray-700 font-semibold mb-2"
          >
            Date <span className="text-red-500">*</span>
          </label>
          <DatePicker
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="MMM dd, yyyy"
          />
        </div>

        {/* Start Time Input */}
        <div className="col-span-1">
          <label
            htmlFor="start-time"
            className="block text-gray-700 font-semibold mb-2"
          >
            Start Time <span className="text-red-500">*</span>
          </label>
          <input
            type="time"
            id="start-time"
            defaultValue={time}
            onChange={handleTimeChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Duration Input */}
        <div className="col-span-1">
          <label
            htmlFor="duration"
            className="block text-gray-700 font-semibold mb-2"
          >
            Duration <span className="text-red-500">*</span>
          </label>
          <select
            id="duration"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            {durationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Find Button */}
      <div className="text-left mt-4">
        <button
          onClick={handleFind}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
        >
          Find
        </button>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex flex-col justify-between ">
          {/* Time Slots */}
          <div className="bg-[#98F9FF]">
            <div className="w-1/5 flex ">
              {timeSlots.map((slot, index) => (
                <div
                  key={index}
                  className={`flex-grow px-4 py-2 text-center ${
                    slot.busy ? "bg-[#C4C4C4] text-white" : "bg-[#17F455]"
                  } ${index !== 0 && "ml-2"}`}
                >
                  {slot.start}
                </div>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="flex gap-2 mt-5">
            <div className="text-center">
              <div className="flex gap-2">
                <div className="bg-[#C4C4C4] rounded w-4 h-4 mt-1"></div>
                <div>Busy</div>
              </div>
            </div>
            <div className="text-center">
              <div className="flex gap-2">
                <div className="bg-[#17F455] rounded w-4 h-4 mt-1"></div>
                <div>Free</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slots;
