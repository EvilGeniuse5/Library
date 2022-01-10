import React from "react";
import { Container } from "react-bootstrap";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function App() {
  return (
    <div className="App">
      <Container>
        <h1 className="text-xl text-primary">
          Team Evil Geniuses Library Project
        </h1>
        <Select options={options} />
      </Container>
    </div>
  );
}

export default App;
