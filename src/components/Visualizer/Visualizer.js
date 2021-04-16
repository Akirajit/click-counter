import React from "react";

export default function Visualizer({ clicksCount, lastClickTime }) {
  return (
    <div>
      <p>Total de clicks registrados hasta el momento: {clicksCount} </p>
      <p>El último click se registró a las {lastClickTime} hs. </p>
    </div>
  );
}
