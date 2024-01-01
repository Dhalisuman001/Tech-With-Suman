import React from "react";

const NoDataMessage = ({ message }) => {
  return (
    <div>
      <p className="text-xl text-gray-900"> {message}</p>
    </div>
  );
};

export default NoDataMessage;
