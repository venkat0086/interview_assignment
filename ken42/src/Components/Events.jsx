import { NavBar } from "./NavBar";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import {
  eventFailure,
  eventLoading,
  eventSuccess,
} from "../Redux/Events/action";
import "../Styles/Events.css";
import "../Styles/Home.css";
import React from "react";

export const Events = () => {
  const [name, setName] = useState("");
  const [info, setInfo] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [regUrl, setRegUrl] = useState("");
  const [data, setData] = useState([]);
  const [eventCount, setEventCount] = useState(0);
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    let eventDetails = {
      name,
      info,
      startDate,
      endDate,
      regUrl,
    };

    dispatch(eventLoading());
    fetch(`https://ken42app.herokuapp.com/events`, {
      method: "POST",
      body: JSON.stringify(eventDetails),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.message) {
          alert(res.message);
        } else {
          dispatch(eventSuccess(res));
          alert("Registration Success");
        }
      })
      .catch((err) => {
        dispatch(eventFailure());
        alert("Registrattion Failed");
      });
    setValue(value + 1);
  };

  useEffect(() => {
    axios.get("https://ken42app.herokuapp.com/events").then((res) => {
      setData([...res.data]);
      setEventCount(res.data.length);
    });
  }, []);

  return (
    <div className="event-main">
      <NavBar />
      <div className="event-post">
        <label>Event Name: </label>
        <input
          type="text"
          placeholder="Enter Event Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <label>Information: </label>{" "}
        <input
          type="text"
          placeholder="Enter Event Information"
          value={info}
          onChange={(e) => setInfo(e.target.value)}
        />
        <br />
        <br />
        <label>Start Date: </label>{" "}
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <br />
        <br />
        <label>End Date: </label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <br />
        <br />
        <label>Register URL: </label>
        <input
          type="text"
          placeholder="Enter Register URL"
          value={regUrl}
          onChange={(e) => setRegUrl(e.target.value)}
        />
        <br />
        <br />
        <button onClick={handleSubmit}>Register</button>
      </div>
      <div className="term-head">
        <div>Events</div>
        <div>
          <button className="event-btn">Total Events: {eventCount}</button>
        </div>
      </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Information</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Register URL</th>
            </tr>
          </thead>
          <tbody>
            {data.map((e) => (
              <tr key={e._id}>
                <td>{e.name}</td>
                <td>{e.info}</td>
                <td>{e.startDate}</td>
                <td>{e.endDate}</td>
                <td>
                  <Link target="_blank" to={`//${e.regUrl}`}>
                    {e.regUrl}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
