import React, { Component } from "react";
import propTypes from "prop-types";

class Contact extends Component {
  render() {
    const { name, email, phone } = this.props; // deconstructing props to simplify code, otherwise will have to use this.props.name, this.props.email, this.props.phone
    return (
      <div className="card card-body mb-3">
        <h4>{name}</h4>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    );
  }
}

Contact.propTypes = {
  name: propTypes.string.isRequired,
  email: propTypes.string.isRequired,
  phone: propTypes.string.isRequired
};

export default Contact;
