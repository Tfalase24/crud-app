import { useState } from "react";

export const ClickButton = () => {
  const [clicks, setClicks] = useState(0);

  return (
    <div>
      <button
        onClick={() => {
          setClicks(clicks + 1);
        }}
      >
        Click here to increase the number {clicks}
      </button>
    </div>
  );
};
