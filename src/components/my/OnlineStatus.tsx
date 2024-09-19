import * as React from "react"

const OnlineStatusIndicator = ({ online }) => {
  return (
    <span className="relative flex h-3 w-3">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
          online ? 'bg-green-400' : 'bg-red-400'
        } opacity-75`}
      ></span>
      <span
        className={`relative inline-flex rounded-full h-3 w-3 ${
          online ? 'bg-green-500' : 'bg-red-500'
        }`}
      ></span>
    </span>
  );
};

export default OnlineStatusIndicator;