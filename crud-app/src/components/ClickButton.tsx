import { FC, useState, useEffect } from 'react';

export const ClickButton: FC = () => {
  const [clicks, setClicks] = useState(0);
  useEffect(() => {
    console.log('This is my first attempt at use effect hook');
  }, [clicks]);

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
