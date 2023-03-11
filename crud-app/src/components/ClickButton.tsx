import { useState } from "react";

export const ClickButton = () => {
  const [clicks, setClicks] = useState(0);
  return clicks % 2 === 0 ? (
    <div>
      <button
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        The number of clicks is even. Click here to increase the number {clicks}
      </button>
    </div>
  ) : (
    <div>
      <button
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        The number of clicks is odd. Click here to increase the number {clicks}
      </button>
    </div>
  );
};
