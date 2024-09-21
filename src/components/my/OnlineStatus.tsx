import * as React from "react"

const OnlineStatusIndicator = ({ online }) => {
  return (
    <span className="relative flex h-3 w-3">
      <span
        className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
          online === true ? 'bg-green-400' : online === false ? 'bg-red-400' : 'bg-amber-400'
        } opacity-75`}
      ></span>
      <span
        className={`relative inline-flex rounded-full h-3 w-3 ${
          online === true ? 'bg-green-400' : online === false ? 'bg-red-400' : 'bg-amber-400'
        }`}
      ></span>
    </span>
  );
};

export default OnlineStatusIndicator;