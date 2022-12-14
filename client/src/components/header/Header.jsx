import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { DateRange } from "react-date-range";
import { useContext, useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import { NavLink, useNavigate } from "react-router-dom";
import { SearchContext } from "../../context/SearchContext";
import { AuthContext } from "../../context/AuthContext";

const Header = ({ type }) => {
  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/hotels", { state: { destination, dates, options } });
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <NavLink
            to="/home"
            className={({ isActive }) =>
              isActive
                ? "headerListItem cursor-pointer active"
                : "headerListItem cursor-pointer"
            }
          >
            <FontAwesomeIcon icon={faBed} />
            <span>L??u tr??</span>
          </NavLink>
          <NavLink
            to="/hotels"
            className={({ isActive }) =>
              isActive
                ? "headerListItem cursor-pointer active"
                : "headerListItem cursor-pointer"
            }
          >
            <FontAwesomeIcon icon={faBed} />
            <span>?????a ??i???m tham quan</span>
          </NavLink>
          <NavLink
            to="/fly"
            className={({ isActive }) =>
              isActive
                ? "headerListItem cursor-pointer active"
                : "headerListItem cursor-pointer"
            }
          >
            <FontAwesomeIcon icon={faPlane} />
            <span>Chuy???n bay</span>
          </NavLink>
          <NavLink
            to="/restaurants"
            className={({ isActive }) =>
              isActive
                ? "headerListItem cursor-pointer active"
                : "headerListItem cursor-pointer"
            }
          >
            <FontAwesomeIcon icon={faCar} />
            <span>Qu??n ??n</span>
          </NavLink>
          <NavLink
            to="/bookingcar"
            className={({ isActive }) =>
              isActive
                ? "headerListItem cursor-pointer active"
                : "headerListItem cursor-pointer"
            }
          >
            <FontAwesomeIcon icon={faCar} />
            <span>Thu?? xe</span>
          </NavLink>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">Gi???m gi?? tr???n ?????i ?</h1>
            <p className="headerDesc">
              Nh???n ph???n th?????ng cho chuy???n du l???ch c???a b???n - ti???t ki???m ngay l???p
              t???c t??? 10% tr??? l??n v???i t??i kho???n BOOKING mi???n ph??
            </p>
            {!user && (
              <button className="headerBtn">????ng nh???p / ????ng k??</button>
            )}

            <div className="headerSearch z-20">
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faBed} className="headerIcon" />
                <input
                  type="text"
                  placeholder="B???n mu???n ?????n ????u ?"
                  className="headerSearchInput text-base text-gray-700"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                />
              </div>
              <div className="headerSearchItem">
                <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                <span
                  onClick={() => setOpenDate(!openDate)}
                  className="headerSearchText"
                >{`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(
                  dates[0].endDate,
                  "MM/dd/yyyy"
                )}`}</span>
                {openDate && (
                  <DateRange
                    editableDateInputs={true}
                    onChange={(item) => setDates([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={dates}
                    className="date"
                    minDate={new Date()}
                  />
                )}
              </div>

              <div className="headerSearchItem z-10">
                <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className="headerSearchText"
                >{`${options.adult} adult ?? ${options.children} children ?? ${options.room} room`}</span>
                {openOptions && (
                  <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Ng?????i l???n</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.adult <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.adult}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("adult", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Tr??? em</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.children <= 0}
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.children}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("children", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="optionItem">
                      <span className="optionText">Ph??ng</span>
                      <div className="optionCounter">
                        <button
                          disabled={options.room <= 1}
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "d")}
                        >
                          -
                        </button>
                        <span className="optionCounterNumber">
                          {options.room}
                        </span>
                        <button
                          className="optionCounterButton"
                          onClick={() => handleOption("room", "i")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="headerSearchItem">
                <button className="headerBtn" onClick={handleSearch}>
                  T??m ki???m
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
