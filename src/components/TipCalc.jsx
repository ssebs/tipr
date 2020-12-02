import React, { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";

const TipCalc = () => {
  const [tipOptions, setTipOptions] = useState([
    { value: 15, label: "15%" },
    { value: 18, label: "18%" },
    { value: 20, label: "20%" },
    { value: 22, label: "22%" },
  ]);
  const [amount, setAmount] = useState("");
  const [tipPercent, setTipPercent] = useState({ value: 15, label: "15%" });

  return (
    <Container>
      <Form>
        <Row>
          <Form.Group as={Col} md={2}>
            <Form.Label>Bill amount</Form.Label>
            <Form.Control
              type="number"
              value={amount}
              autoFocus
              onChange={(e) => setAmount(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md={3}>
            <Form.Label>Tip %</Form.Label>
            <CreatableSelect
              options={tipOptions}
              value={tipPercent}
              onChange={(opt) => {
                if (opt === null) {
                  return;
                }

                if ("__isNew__" in opt) {
                  const val = opt.value.includes("%")
                    ? opt.value.replace("%", "")
                    : opt.value;
                  const labl = val + "%";
                  const newOpt = { value: parseInt(val), label: labl };

                  setTipOptions([...tipOptions, newOpt]);
                  setTipPercent(newOpt);
                } else {
                  setTipPercent(opt);
                }
              }}
            />
          </Form.Group>
          <Form.Group
            as={Col}
            md={1}
            className="d-flex flex-column justify-content-end"
          >
            <div></div>
            <Form.Control
              as={Button}
              variant="outline-secondary"
              onClick={() => {
                setTipPercent({ value: 15, label: "15%" });
                setAmount("");
              }}
            >
              Reset
            </Form.Control>
          </Form.Group>
        </Row>
      </Form>
      {amount !== "" && (
        <Alert variant="success" className="">
          <Alert.Heading className="mb-2">Tip amounts</Alert.Heading>
          <p>
            Tip:{" "}
            <span className="h5">
              ${(amount * (tipPercent.value / 100)).toFixed(2)}
            </span>
          </p>
          <p>
            Total:{" "}
            <span className="h5">
              {(
                parseFloat(amount) +
                parseFloat(amount * (tipPercent.value / 100))
              ).toFixed(2)}
            </span>
          </p>
        </Alert>
      )}
    </Container>
  );
};

export default TipCalc;
