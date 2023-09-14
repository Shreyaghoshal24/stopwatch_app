import React from "react";
function Watch(t) {
  return (
    <h2 className="display-1">
      <span>{("0" + Math.floor((t.time / 360000) % 6000)).slice(-2)}:</span>
      <span>{("0" + Math.floor((t.time / 6000) % 60)).slice(-2)}.</span>
      <span>{("0" + ((t.time) % 100)).slice(-2)}</span>
    </h2>
  );
}
export default Watch;