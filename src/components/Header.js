import React from "react";
import PropTypes from "prop-types"; //used to validate type of prop (i.e. string, object, integer, etc)

//functional component
const Header = props => {
  const { branding } = props; // deconstructing props to simplify code, otherwise will have to use props.branding
  return (
    <div>
      <h1>{branding}</h1>
    </div>
  );
};

// default props are used to set props when no props are passed in when functional component is called
Header.defaultProps = {
  branding: "My App"
};

Header.PropTypes = {
  branding: PropTypes.string.isRequired
};

export default Header;
