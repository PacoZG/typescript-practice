import React from "react";

const Header: React.FC<{ course: string }> = ({ course }) => {
  return <h1>{course}</h1>;
};

export default Header;
