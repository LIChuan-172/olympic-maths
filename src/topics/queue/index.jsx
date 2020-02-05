import React from "react";
import "./index.css";
import useLogic from "./useLogic";

function Queue() {
  const [queue, handleOnChange] = useLogic();
  
  const inputs = queue.map(({answer, value}, index) => {
    const isSolved = answer == value
    
    return (
      <input
        className={isSolved ? "solved" : "unsolved"}
        key={index}
        index={index}
        value={value}
        disabled={isSolved}
        onChange={handleOnChange}
      />
    );
  })
  
  return (
    <div className="Queue">
      {inputs}
    </div>
  );
}

export default Queue;
