import React from "react";
import "./TabItem.css";

function TabItem(props) {
  return (
    <div className="tab-item">
      <p>{props.text}</p>
    </div>
  );
}

export default TabItem;
