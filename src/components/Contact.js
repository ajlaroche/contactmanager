import React, { Component } from "react";
import propTypes from "prop-types";

class Contact extends Component {
  state = {
    showContactInfo: false
  };

  onShowClick = e => {
    this.setState({
      showContactInfo: !this.state.showContactInfo
      //   instead of using false, just switch to opposite or equivalent to a toggle
    });
  };

  render() {
    const { contact } = this.props; // deconstructing props to simplify code, otherwise will have to use this.props.name, this.props.email, this.props.phone
    const { showContactInfo } = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>
          {contact.name}{" "}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {contact.email}</li>
            <li className="list-group-item">Phone: {contact.phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: propTypes.object.isRequired
};

export default Contact;
