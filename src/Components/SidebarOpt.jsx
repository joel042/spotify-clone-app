import React from "react";
import "../asserts/css/SidebarOpt.css";

const SidebarOpt = ({ title, Icon }) => {
  return (
    <div className="sidebarOpt">
      {Icon && <Icon className="sidebarOpt_icon" />}{" "}
      {/* Display Icon if it exists */}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
};

export default SidebarOpt;
