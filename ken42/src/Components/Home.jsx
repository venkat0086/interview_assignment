import "../Styles/Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { NavBar } from "./NavBar";
export const Home = () => {
  const [data, setData] = useState([]);
  const [studentCount, setStudentCount] = useState(0);
  useEffect(() => {
    axios.get("https://ken42app.herokuapp.com/studentlist").then((res) => {
      setData([...res.data]);
      setStudentCount(res.data.length);
    });
  }, []);

  const filterByTerm = (value) => {
    axios
      .get(`https://ken42app.herokuapp.com/studentlist?term=${value}`)
      .then((res) => {
        setData(res.data);
      });
  };

  const filterByCurrYear = (value) => {
    axios
      .get(`https://ken42app.herokuapp.com/studentlist?curyear=${value}`)
      .then((res) => {
        setData(res.data);
      });
  };

  const checkForYear = (num) => {
    return num === 1
      ? num + "st"
      : num === 2
      ? num + "nd"
      : num === 3
      ? num + "rd"
      : num + "th";
  };

  return (
    <div>
      <NavBar />
      <div className="main-container">
        <div className="term-head">
          <div>Filter</div>
          <div>
            Term:{" "}
            <select
              onChange={(e) => {
                filterByTerm(e.target.value);
              }}
            >
              <option value="">Select</option>
              <option value="PUC">PUC</option>
              <option value="UG">Under Graduate</option>
              <option value="PG">Post Graduate</option>
            </select>{" "}
            <span>
              Current Year:{" "}
              <select
                onChange={(e) => {
                  filterByCurrYear(e.target.value);
                }}
              >
                <option value="">Select</option>
                <option value="1">First Year</option>
                <option value="2">Second Year</option>
                <option value="3">Third Year</option>
              </select>
              <span>
                <button>Total Students: {studentCount}</button>
              </span>
            </span>
          </div>
        </div>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Roll Number</th>
                <th>Term</th>
                <th>Current Year</th>
                <th>Contact Number</th>
              </tr>
            </thead>
            <tbody>
              {data.map((e) => (
                <tr key={e._id}>
                  <td>{e.name}</td>
                  <td>{e.rollno}</td>
                  <td>{e.term}</td>
                  <td>{`${checkForYear(e.currentyear)} year`}</td>
                  <td>{e.contactno}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
