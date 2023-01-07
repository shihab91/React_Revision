import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h2>{title}</h2>
    </header>
  );
};
Header.defaultProps = {
  title: "something also goes here",
};

export default Header;
