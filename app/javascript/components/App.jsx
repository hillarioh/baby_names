import React from "react";
// import { Form } from "react-bootstrap";

function App(props) {
  return (
    <div className="container">
      <h2>Baby Names</h2>
      <div className="mb-3">
        <label for="name" className="form-label">
          Enter Baby Name
        </label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="John doe"
        />
      </div>
      <div></div>
    </div>
  );
}

export default App;
