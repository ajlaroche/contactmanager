import React, { Component } from "react";

class test extends Component {
  state = {
    title: "",
    body: ""
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          title: data.title,
          body: data.body
        });
      });
  }

  // componentWillMount() {
  //   console.log("component will mount ....");
  // }

  // componentWillReceiveProps(nextProps, nextState) {
  //   console.log("compone wil receive props...");
  // }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   return null;
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>{title}</h1>
        <p>{body}</p>
      </div>
    );
  }
}
export default test;
