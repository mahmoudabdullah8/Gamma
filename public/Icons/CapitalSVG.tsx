import React from "react";
import { SvgIcon } from "../../services/types";

const CapitalSVG = ({ className, width, height }: SvgIcon) => {
  return (
    <>
      <svg
        width={"60" || width}
        height={"59" || height}
        className={className}
        viewBox="0 0 60 59"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          x="0.5"
          width="59"
          height="59"
          rx="12"
          fill="url(#paint0_linear_76_363)"
        />
        <g clip-path="url(#clip0_76_363)">
          <path
            d="M36.9667 18.868C34.3427 18.868 32.292 20.844 30.4347 23.3547C27.8827 20.1053 25.7493 18.868 23.196 18.868C17.9893 18.868 14 25.6427 14 32.8147C14 37.3027 16.1707 40.1333 19.808 40.1333C22.4253 40.1333 24.308 38.9 27.6547 33.0493C27.6547 33.0493 29.0493 30.5853 30.0093 28.8893C30.3453 29.432 30.6987 30.016 31.072 30.644L32.6413 33.284C35.6987 38.3987 37.4013 40.1333 40.488 40.1333C44.0307 40.1333 46.0027 37.264 46.0027 32.6827C46 25.1733 41.9213 18.868 36.9667 18.868ZM25.1013 31.4653C22.388 35.7187 21.4493 36.672 19.9387 36.672C18.384 36.672 17.46 35.3067 17.46 32.8733C17.46 27.6667 20.056 22.344 23.1507 22.344C24.8267 22.344 26.2267 23.312 28.372 26.3827C26.336 29.5053 25.1013 31.4653 25.1013 31.4653ZM40.5587 36.672C39.0133 36.672 38.2747 35.652 35.3413 30.9307L33.4653 27.8013C32.9573 26.976 32.4707 26.2173 32.0013 25.5213C33.692 22.912 35.0867 21.6107 36.7467 21.6107C40.1933 21.6107 42.9507 26.6853 42.9507 32.9173C42.9493 35.2933 42.172 36.672 40.5587 36.672Z"
            fill="white"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_76_363"
            x1="46.7831"
            y1="7.36051"
            x2="-11.3083"
            y2="49.7132"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#0D748D" />
            <stop offset="1" stop-color="#01A4AE" />
          </linearGradient>
          <clipPath id="clip0_76_363">
            <rect
              width="32"
              height="32"
              fill="white"
              transform="translate(14 13.5)"
            />
          </clipPath>
        </defs>
      </svg>
    </>
  );
};

export default CapitalSVG;
