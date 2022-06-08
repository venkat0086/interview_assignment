import { Link } from "react-router-dom";
import "../Styles/NavBar.css";
import { GoSearch } from "react-icons/go";
export const NavBar = (props) => {
  return (
    <div className="nav-bar-main">
      <div>
        <Link to="/">
          <img
            alt="blinkit"
            width="45"
            height="35"
            src="https://cdn-icons-png.flaticon.com/512/167/167707.png"
          />
        </Link>
      </div>
      <div className="search-main">
        <button className="search-btn">
          <GoSearch />
        </button>
        <input
          className="search-input"
          type="text"
          placeholder="search for students"
        />
      </div>
      <div>
        <Link className="login" to="/login">
          Student Login
        </Link>
      </div>
      <div>
        <Link className="login" to="/login">
          Admin Login
        </Link>
      </div>
    </div>
  );
};
