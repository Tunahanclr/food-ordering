import React from "react";

const Title = ({ children, addClass, emin }) => {
  return <div className={`${addClass} font-dancing`}>{children}</div>;
};

export default Title;