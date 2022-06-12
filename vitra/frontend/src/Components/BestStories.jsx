import Navbar from "./Navbar";
import axios from "axios";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import localizedFormat from "dayjs/plugin/localizedFormat";
import { MdDateRange } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";
import "../Styles/Home.css";

dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export const BestStories = () => {
  const [data, setData] = useState([]);
  const navigate = (url) => {
    window.open(url);
  };

  useEffect(() => {
    showData();
  }, []);

  const showData = () => {
    axios.get("https://vitradotai.herokuapp.com/beststories").then((res) => {
      setData(res.data);
    });
  };
  return (
    <div className="home-container">
      <Navbar />
      <h1>Best Stories</h1>
      <div className="stories-main">
        {data.map((e) => (
          <div
            key={e.id}
            onClick={() => {
              navigate(e.url);
            }}
          >
            <div className="image">
              <img
                src={`https://picsum.photos/500/300?random=${e.id}`}
                alt="Story Images"
              />
            </div>
            <div className="title-main">
              <div>{e.title}</div>
              <div className="time-by-main">
                <div className="time">
                  <span>
                    <MdDateRange />{" "}
                  </span>
                  {new Date(e.time).toLocaleDateString(undefined, {
                    day: "numeric",
                    month: "long",
                  })}
                  &nbsp; ({dayjs(e.time).format("LT")})
                </div>
                <div className="by">
                  <span>
                    <FaUserCircle style={{ fontSize: "12px" }} />
                  </span>{" "}
                  <span>By: {e.by}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
