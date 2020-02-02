import React from "react";

import { getQueue } from "./getQueue";

function Queue() {
  return <div>{getQueue()}</div>;
}

export default Queue;
