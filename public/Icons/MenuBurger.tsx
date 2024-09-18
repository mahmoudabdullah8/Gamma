import React from "react";
import { SvgIcon } from "../../services/types";

const MenuBurger = ({ className, width, height }: SvgIcon) => {
  return (
    <svg
      width={"20" || width}
      height={"20" || height}
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.1304 9.22266H0.869551C0.389307 9.22266 0 9.6043 0 10.0751C0 10.5459 0.389307 10.9275 0.869551 10.9275H19.1304C19.6107 10.9275 20 10.5459 20 10.0751C20 9.6043 19.6107 9.22266 19.1304 9.22266Z"
        fill="white"
      />
      <path
        d="M0.869551 4.96037H19.1304C19.6107 4.96037 20 4.57872 20 4.10793C20 3.63714 19.6107 3.25549 19.1304 3.25549H0.869551C0.389307 3.25549 0 3.63714 0 4.10793C0 4.57872 0.389307 4.96037 0.869551 4.96037Z"
        fill="white"
      />
      <path
        d="M19.1304 15.1898H0.869551C0.389307 15.1898 0 15.5715 0 16.0423C0 16.5131 0.389307 16.8947 0.869551 16.8947H19.1304C19.6107 16.8947 20 16.5131 20 16.0423C20 15.5715 19.6107 15.1898 19.1304 15.1898Z"
        fill="white"
      />
    </svg>
  );
};

export default MenuBurger;
