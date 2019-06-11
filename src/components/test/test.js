import React, { Component } from "react";

class test extends Component {
  state = {
    test: "test"
  };

  componentDidMount() {
    console.log("component did mount ....");
  }

  componentWillMount() {
    console.log("component will mount ....");
  }

  componentWillReceiveProps(nextProps, nextState) {
    console.log("compone wil receive props...");
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return null;
  }

  render() {
    return (
      <div>
        <h1>Test Component</h1>
      </div>
    );
  }
}
export default test;
