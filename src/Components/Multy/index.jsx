import React from "react";
import "./index.css";
import Queue from "../../topics/queue";
import getMultyQueues from "./getMultyQueues";

function Multy() {
  return (
    <div className="Multy">
      {getMultyQueues().map((queue, index) => (
        <Queue queue={queue} key={index} />
      ))}
    </div>
  );
}

export default Multy;
