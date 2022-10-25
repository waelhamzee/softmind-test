import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  FormGroup,
  Label,
  Input,
  Form,
  Alert,
} from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";

function FormPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [alert, setAlert] = useState({state : false, text : ""});

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !password) {
      setAlert({state : true, text : "Please fill all inputs."});
      return;
    }

    if (username !== "wael" || password !== "12345") {
      setAlert({state : true, text : "You entered the wrong credentials."});
      return;
    }

    window.location.href = "dashboard";
  };

  useEffect(() => {
    if (!alert.state) return;
    setTimeout(() => {
        setAlert((prevState) => {
            return {...prevState, state: false}
        })
    }, 3000)
  }, [alert])

  return (
    <div className="center">
      <Card style={{width:'35rem'}}>
        <CardBody>
          <CardTitle tag="h5" style={{marginBottom:'1.5rem'}}>Registration Form</CardTitle>
          <Form>
            <FormGroup>
              <Label for="exampleUsername">Username</Label>
              <Input
                id="exampleUsername"
                name="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Password</Label>
              <Input
                id="examplePassword"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormGroup>
            {alert.state && (
                <Alert color="primary">
                {alert.text}
              </Alert>
            )}
            <Button onClick={handleSubmit}>Submit</Button>
          </Form>
        </CardBody>
      </Card>
    </div>
  );
}

export default FormPage;
