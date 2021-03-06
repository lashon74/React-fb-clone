import { Avatar } from "@material-ui/core";
import React from "react";
import "../SidebarRow.css";

// Breakingdown prompt and passing a component as a promt but it has to be uppercase
function SidebarRow({ src, Icon, title }) {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarRow;
