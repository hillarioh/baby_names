import React, { useState } from "react";
import AddName from "./addName";
import { Button } from "react-bootstrap";

function App(props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <div className="container">
      <h2 className="text-center mt-3">Baby Names</h2>
      <div className="text-end pt-2">
        <Button variant="primary" onClick={() => setModalShow(true)}>
          Add Name
        </Button>
      </div>
      <AddName show={modalShow} onHide={() => setModalShow(false)} />

      <div className=" my-3 names-list">
        <p>Empty List</p>
      </div>
    </div>
  );
}

export default App;
