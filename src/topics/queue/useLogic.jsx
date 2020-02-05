import { useState, useEffect } from "react";

function useLogic() {
  const [queue, setQueue] = useState([]);

  useEffect(() => {
    getQueue().then(queue => setQueue(queue));
  }, []);

  function handleOnChange(e) {
    const { value } = e.target;
    const index = e.target.getAttribute("index");
    setQueue(prevQueue =>
      prevQueue.map((item, i) => (i == index ? { ...item, value } : item))
    );
  }

  return [queue, handleOnChange];
}

const queue = [1, 3, 5, 7, 9, 11].map(num => ({ answer: num, value: num }));
queue[3].value = "";
queue[4].value = "";
function getQueue() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(queue);
    }, 3000);
  });
}

export default useLogic;
