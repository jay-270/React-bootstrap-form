import { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// import InputGroup from 'react-bootstrap/InputGroup';
import Row from "react-bootstrap/Row";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table";

function Form1() {

  const [validated, setValidated] = useState(false);
  const [user, setData] = useState([]);

  const saveDataLocalStorage = (formData) => {
    const key = `formData_${new Date().getTime()}`;
    localStorage.setItem(key, JSON.stringify(formData));
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    console.log(event);
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    const formData = {
      fname: form.fname.value,
      lname: form.lname.value,
      city: form.city.value,
      State: form.State.value,
    };

    console.log(formData);

    saveDataLocalStorage(formData);
    // setData(user.push(formData));
    // setData(formData.map(any))
    // setData((prevData) => [...prevData, formData]);
    // setData((prevData) => {
    //   const newData = [...prevData, formData];
    //   console.log(newData); // Log the updated array
    //   return newData;
    // });

    console.log(user);
  };

  return (
    <>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>First name</Form.Label>
            <Form.Control
              required
              type="text"
              name="fname"
              placeholder="First name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Last name</Form.Label>
            <Form.Control
              required
              type="text"
              name="lname"
              placeholder="Last name"
              defaultValue=""
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          {/* <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group> */}
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <Form.Label>City</Form.Label>
            <Form.Control type="text" name="city" placeholder="City" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="3" controlId="validationCustom04">
            <Form.Label>State</Form.Label>
            <Form.Control
              type="text"
              name="State"
              placeholder="State"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid state.
            </Form.Control.Feedback>
          </Form.Group>
          
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
      
    </>
  );
}

export default Form1;
