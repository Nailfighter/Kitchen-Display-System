import React, { useEffect, useContext } from "react";
import "../styles/Header.scss";

import { TabsContext } from "./Tabs";

const Header = () => {
  const [curTime, setCurTime] = React.useState(new Date().toLocaleTimeString());
  const [curDate, setCurDate] = React.useState(new Date().toLocaleDateString());
  const { activeTab, setActiveTab } = useContext(TabsContext);

  useEffect(() => {
    const interval = setInterval(() => {
      const date = new Date();
      const hours = date.getHours() % 12 || 12;
      const minutes = date.getMinutes();
      const ampm = date.getHours() >= 12 ? "PM" : "AM";
      const timeString = `${hours}:${minutes
        .toString()
        .padStart(2, "0")} ${ampm}`;
      setCurTime(timeString);
      setCurDate(date.toLocaleDateString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="header">
      <div className="header-clock">
        <h2>{curTime}</h2>
        <h6>{curDate}</h6>
      </div>
      <div className="header-center">
        <div className="header-tabs">
          <div
            className="header-tabs-rec"
            style={{ marginLeft: activeTab == "Completed" ? "245px" : "0px" }}
          ></div>
          <div className="header-tabs-buttons">
            <button onClick={() => setActiveTab("Active")}>Active</button>
            <button onClick={() => setActiveTab("Completed")}>Completed</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;