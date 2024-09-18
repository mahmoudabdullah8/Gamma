import clsx from "clsx";
import React, { ReactNode } from "react";

const Container = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`      w-full 
   sm:w-10/12 md:w-10/12 
    custom:w-9/12
     lg:w-11/12 
     m-auto   ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
