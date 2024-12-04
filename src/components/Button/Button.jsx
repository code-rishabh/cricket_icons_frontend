/* eslint-disable react/prop-types */
import React from "react";

const Button = ({ children }) => {
  return (
    <button className="flex text-center bg-beta text-2xl rounded-full text-black px-14 py-5">
      {children}
    </button>
  );
};

export default Button;
