"use client";
import React from "react";

interface Props {
  open: any;
  setOpen: (param: any) => void;
}
const HideButton = ({ open, setOpen }: Props) => {
  return (
    <button
      className="ml-auto w-10 h-10 relative focus:outline-none md:hidden"
      onClick={() => setOpen(!open)}
    >
      <div
        className="block w-5 absolute left-1/2 top-1/2
     transform -translate-x-1/2 -translate-y-1/2"
      >
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
            open ? "rotate-45" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
            open ? "opacity-0" : ""
          }`}
        ></span>
        <span
          aria-hidden="true"
          className={`block absolute h-0.5 w-5 bg-white transform transition duration-500 ease-in-out ${
            open ? "-rotate-45" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  );
};

export default HideButton;
