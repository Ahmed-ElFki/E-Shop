import React, { useEffect, useState } from "react";

import { SidebarDataBottom, SidebarDataTop } from "./SidebarData";
import { Link } from "react-router-dom";

import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";

import axios from "axios";

import { useNavigate } from "react-router";

function Sidebar() {
  const [userData, setUserData] = useState([]);
  const loggedUserID = localStorage.getItem("userId") || null;
  const navigate = useNavigate();

  useEffect(() => {
    async function getUserData() {
      // eslint-disable-next-line
      const currentUser = await axios
        .post(`/users/${loggedUserID}`)
        .then((res) => setUserData(res.data.user));
    }
    if (!loggedUserID) navigate("/");
    else getUserData();
  }, [loggedUserID]);
  return (
    <div
      className="sidebar-container"
      style={{
        margin: "0",
        padding: "0",
        height: "100vh",
        width: "100px",
        display: loggedUserID ? "flex" : "none",
        flexDirection: "column",
        justifyContent: " space-between",
        alignItems: "center",
        backgroundColor: "#3C4048",
      }}
    >
      <div className="sidebar-top">
        <Tooltip title={`Welcome ${userData.fullName}`}>
          <Avatar
            alt={userData.fullName}
            src={userData.avatar}
            sx={{ width: 56, height: 56, mt: "15px" }}
          />
        </Tooltip>
      </div>
      <div className="sidebar-menu">
        {SidebarDataTop.map((menu, key) => {
          return (
            <Tooltip key={key} title={menu.name}>
              <Link
                to={menu.link}
                style={{
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <IconButton>{menu.icon}</IconButton>
              </Link>
            </Tooltip>
          );
        })}
      </div>
      <div className="sidebar-bottom">
        {SidebarDataBottom.map((menu, key) => {
          return (
            <Link key={key} to={menu.link} style={{ textDecoration: "none" }}>
              <Tooltip title={menu.name}>
                <IconButton
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  {menu.icon}
                </IconButton>
              </Tooltip>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Sidebar;
