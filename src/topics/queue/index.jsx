import React from "react";
import "./index.css";
import useLogic from "./useLogic";
import PropTypes from 'prop-types'

function Queue(props) {
  const [queue, handleOnChange] = useLogic(props.queue);
  
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

Queue.propTypes = {
  queue: PropTypes.arrayOf(PropTypes.shape({
    answer: PropTypes.number,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
  }))
}

export default Queue;
