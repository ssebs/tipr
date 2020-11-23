import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";

const TipCalc = () => {
  const [amount, setAmount] = useState(0);
  const [tipPercent, setTipPercent] = useState(null);

  return (
    <Container>
      <Form>
        <Row>
          <Form.Group as={Col} md={2}>
            <Form.Label>Bill amount</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Tip %</Form.Label>
            <CreatableSelect
              isClearable
              onFocus={e => e.target.select()}
              options={[
                { value: 15, label: "15%" },
                { value: 18, label: "18%" },
                { value: 20, label: "20%" },
                { value: 22, label: "22%" },
              ]}
              onChange={(opt) => {
                console.log(opt.value);
                setTipPercent(parseFloat(opt.value));
              }}
            />
          </Form.Group>
        </Row>
      </Form>
      {amount !== 0 && tipPercent && (
        <div>
          Tip amount: ${amount * (tipPercent / 100)} <br />
          Total: ${parseFloat(amount) + parseFloat(amount * (tipPercent / 100))}
        </div>
      )}
    </Container>
  );
};

export default TipCalc;
