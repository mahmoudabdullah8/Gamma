import React from "react";
import { SvgIcon } from "../../services/types";

const Twitter = ({ className, width, height }: SvgIcon) => {
  return (
    <svg
      width={"22" || width}
      height={"21" || height}
      className={className}
      viewBox="0 0 22 21"
      fill="red"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.325 0.10498H20.7002L13.3283 8.91111L22 20.896H15.2121L9.89175 13.629L3.81058 20.896H0.429917L8.31325 11.4746L0 0.10498H6.96025L11.7645 6.74719L17.325 0.10498ZM16.1398 18.7867H18.0088L5.94183 2.10406H3.93433L16.1398 18.7867Z"
        fill="white"
      />
    </svg>
  );
};

export default Twitter;
