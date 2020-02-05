import { useState} from "react";

function useLogic(initQueue) {
  const [queue, setQueue] = useState(initQueue);

  function handleOnChange(e) {
    const { value } = e.target;
    const index = e.target.getAttribute("index");
    setQueue(prevQueue =>
      prevQueue.map((item, i) => (i == index ? { ...item, value } : item))
    );
  }

  return [queue, handleOnChange];
}

export default useLogic;
