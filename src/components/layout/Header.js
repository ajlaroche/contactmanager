import React from "react";
import propTypes from "prop-types"; //used to validate type of prop (i.e. string, object, integer, etc)

//functional component
const Header = props => {
  const { branding } = props; // deconstructing props to simplify code, otherwise will have to use props.branding
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <a href="/" className="navbar-brand">
          {branding}
        </a>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

// default props are used to set props when no props are passed in when functional component is called
Header.defaultProps = {
  branding: "My App"
};

Header.propTypes = {
  branding: propTypes.string.isRequired
};

export default Header;
