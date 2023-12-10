import { useState, useEffect } from "react";
import { sendSize } from "../../utils/API";
import {Container, Col, Form, Button} from 'react-bootstrap'
import Results  from './Results'


export default function ShoeSearch() {
  const [footData, setFootData] = useState({
    leftFoot: "",
    rightFoot: "",
    soleCM: "",
  });

  const [shoeResults, setShoeResults] = useState([]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFootData((pastFootData) => ({
      ...pastFootData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (footData.leftFoot && footData.rightFoot) {
      setFootData((pastData) => ({
        ...pastData,
        soleCM:
          (parseFloat(footData.leftFoot) + parseFloat(footData.rightFoot)) / 2,
      }));
    }
  };

  useEffect(() => {
    if (footData.leftFoot && footData.rightFoot && footData.soleCM) {
      (async () => {
        try {
          const data = { soleCM: footData.soleCM };
          const response = await sendSize(data);
          const shoeInfo = await response.json();
          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          setShoeResults(shoeInfo);
        } catch (error) {
          console.error(error);
        }
      })();
    }
  }, [footData.leftFoot, footData.rightFoot, footData.soleCM]);

  return (
    <>
      <Container className="d-flex justify-content-center">
        <Col sm={{ span: 12, offset: 0 }}>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="">
              <Form.Control
                type="number"
                name="leftFoot"
                value={footData.leftFoot}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="">
              <Form.Control
                type="number"
                name="rightFoot"
                value={footData.rightFoot}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="">
              <Button type="submit">Submit</Button>
            </Form.Group>
          </Form>
        </Col>
      </Container>
         <Results shoeResults={shoeResults} />
    </>
  );
}
