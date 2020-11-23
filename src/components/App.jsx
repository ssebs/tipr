import React from "react";
import { Container } from "react-bootstrap";
import TipCalc from "./TipCalc";

const App = () => {
  return (
    <div>
      <Container>
        <h1>Tipr</h1>
        <TipCalc />
      </Container>
    </div>
  );
};

export default App;
