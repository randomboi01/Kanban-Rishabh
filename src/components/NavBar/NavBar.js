import React, { useEffect, useState } from "react";
import { TiThList } from "react-icons/ti";
import {Icon} from "../Icons/IconUtils" 
import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { selectData } from "../../Actions/DataAction";

localStorage.setItem("group", "status");
localStorage.setItem("order", "priority");

const getOrder = () => {
  return localStorage.getItem("order") || "priority";
};

const getGroup = () => {
  return localStorage.getItem("group") || "status";
};

const NavBar = () => {
  const [displayOnClick, setDisplayOnClick] = useState(false);
  const dispatch = useDispatch();
  const { allTickets, allUser } = useSelector((state) => state.DataReducer);
  const [groupValue, setGroupValue] = useState(getGroup());
  const [orderValue, setOrderValue] = useState(getOrder());

  const handleGroupValue = (e, valueBool) => {
    const newValue = e.target.value;
    if (valueBool) {
      setGroupValue(newValue);
      localStorage.setItem("group", newValue);
    } else {
      setOrderValue(newValue);
      localStorage.setItem("order", newValue);
    }
    setDisplayOnClick(false);
  };

  useEffect(() => {
    const dataPayload = groupValue === "user" 
      ? { allTickets, allUser } 
      : allTickets;
      
    dispatch(selectData(groupValue, dataPayload, orderValue));
  }, [allTickets, allUser, dispatch, groupValue, orderValue]);

  return (
    <div className="top-header" style={{ paddingLeft: "13px" }}>
      <div className="displayButton">
        <button
          className="p-10 f-16 btn"
          onClick={() => setDisplayOnClick(!displayOnClick)}
        >
          <Icon name="display" className="icon-menu"/> Display
        </button>
        {displayOnClick && (
          <div className="dropOnClick flex-gap-10 p-10">
            <div className="selectGroup flex-sb">
              <span style={{ fontSize: "14px", color: "#555B5A" }}>
                Grouping
              </span>
              <select
                value={groupValue}
                onChange={(e) => handleGroupValue(e, true)}
                className="selectStyle"
                name="group"
                id="group"
              >
                <option value="status">Status</option>
                <option value="user">User</option>
                <option value="priority">Priority</option>
              </select>
            </div>
            <div className="selectGroup flex-sb">
              <span style={{ fontSize: "14px", color: "#555B5A" }}>
                Ordering
              </span>
              <select
                value={orderValue}
                onChange={(e) => handleGroupValue(e, false)}
                className="selectStyle"
                name="order"
                id="order"
              >
                <option value="priority">Priority</option>
                <option value="title">Title</option>
              </select>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NavBar;
