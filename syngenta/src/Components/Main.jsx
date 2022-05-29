import { useState } from "react";
import "./Main.css";
export const Main = () => {
  const [num, setNum] = useState();

  // function that hide selected circle and display that in empty div
  const circleOne = () => {
    document.getElementsByClassName("first_circle")[0].style.display = "none";
    document.getElementsByClassName("empty_div_first_circle")[0].style.display =
      "block";
  };

  const circleTwo = () => {
    document.getElementsByClassName("second_circle")[0].style.display = "none";
    document.getElementsByClassName(
      "empty_div_second_circle"
    )[0].style.display = "block";
  };
  const circleThree = () => {
    document.getElementsByClassName("third_circle")[0].style.display = "none";
    document.getElementsByClassName("empty_div_third_circle")[0].style.display =
      "block";
  };
  const circleFour = () => {
    document.getElementsByClassName("fourth_circle")[0].style.display = "none";
    document.getElementsByClassName(
      "empty_div_fourth_circle"
    )[0].style.display = "block";
  };
  const circleFive = () => {
    document.getElementsByClassName("fifth_circle")[0].style.display = "none";
    document.getElementsByClassName("empty_div_fifth_circle")[0].style.display =
      "block";
  };

  // function that remove circle from div and make div empty again

  const circleOneDelete = () => {
    document.getElementsByClassName("first_circle")[0].style.display = "block";
    document.getElementsByClassName("empty_div_first_circle")[0].style.display =
      "none";
  };
  const circleTwoDelete = () => {
    document.getElementsByClassName("second_circle")[0].style.display = "block";
    document.getElementsByClassName(
      "empty_div_second_circle"
    )[0].style.display = "none";
  };
  const circleThreeDelete = () => {
    document.getElementsByClassName("third_circle")[0].style.display = "block";
    document.getElementsByClassName("empty_div_third_circle")[0].style.display =
      "none";
  };
  const circleFourDelete = () => {
    document.getElementsByClassName("fourth_circle")[0].style.display = "block";
    document.getElementsByClassName(
      "empty_div_fourth_circle"
    )[0].style.display = "none";
  };
  const circleFiveDelete = () => {
    document.getElementsByClassName("fifth_circle")[0].style.display = "block";
    document.getElementsByClassName("empty_div_fifth_circle")[0].style.display =
      "none";
  };

  const sendItem = (num) => {
    if (num == 1) {
      circleOne();
    } else if (num == 2) {
      circleTwo();
    } else if (num == 3) {
      circleThree();
    } else if (num == 4) {
      circleFour();
    } else if (num == 5) {
      circleFive();
    } else {
      alert("Enter with 5 Number");
    }
  };
  return (
    <>
      <div className="main_div">
        <h5 className="first_text">Empty Div</h5>
        <div className="empty_div">
          <div
            onClick={() => {
              circleOneDelete();
            }}
            className="empty_div_first_circle"
          ></div>
          <div
            onClick={() => {
              circleTwoDelete();
            }}
            className="empty_div_second_circle"
          ></div>
          <div
            onClick={() => {
              circleThreeDelete();
            }}
            className="empty_div_third_circle"
          ></div>
          <div
            onClick={() => {
              circleFourDelete();
            }}
            className="empty_div_fourth_circle"
          ></div>
          <div
            onClick={() => {
              circleFiveDelete();
            }}
            className="empty_div_fifth_circle"
          ></div>
        </div>
        <h5 className="text">circle</h5>
        <div className="circle_div">
          <div className="first_circle"></div>
          <div className="second_circle"></div>
          <div className="third_circle"></div>
          <div className="fourth_circle"></div>
          <div className="fifth_circle"></div>
        </div>
        <div className="inputdiv">
          <p>Enter number with in range 1 to 5</p>
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }}
            type="text"
            placeholder="Enter Number"
          />
          <br />
          <button
            onClick={() => {
              sendItem(num);
            }}
          >
            Shoot
          </button>
        </div>
      </div>
    </>
  );
};
