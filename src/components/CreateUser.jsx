import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";
import AxiosService from "../utils/AxiosServise"; // Import the AxiosService module from the utils directory
import ApiRoutes from "../utils/ApiRoutes"; // Import the AppRouter configuration
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  // Define state variables for the form fields

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [companyname, setCompanyname] = useState("");
  const [catchPhrase, setCatchPhrase] = useState("");
  const [bs, setBs] = useState("");
  let navigate = useNavigate();

  let handleSubmit = async () => {
    // event.preventDefault();
    try {
      let data = {
        name,
        username,
        email,
        address: { street, suite, city, zipcode },
        phone,
        website,
        company: { companyname, catchPhrase, bs },
      };

      let responce = await AxiosService.post(ApiRoutes.BLOG_APP.path, data); // Make a POST request to the API using AxiosService
      if (responce.status === 201) {
        toast.success("Blog posted successfully!!");
        navigate("/dashboard");
      }
    } catch (error) {
      toast.success("Faild to blog post!!");
      // navigate("/dashboard");
    }
  };

  return (
    <>
      <div className="full-form">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              onChange={(e) => {
                setName(e.target.value);
              }}
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicUserName">
            <Form.Label>UserName</Form.Label>
            <Form.Control
              type="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              placeholder="Enter UserName"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Enter email"
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Street</InputGroup.Text>
              <Form.Control
                placeholder=""
                onChange={(e) => {
                  setStreet(e.target.value);
                }}
                aria-label="address"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Suite</InputGroup.Text>
              <Form.Control
                placeholder=""
                onChange={(e) => {
                  setSuite(e.target.value);
                }}
                aria-label="address"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">City</InputGroup.Text>
              <Form.Control
                placeholder=""
                onChange={(e) => {
                  setCity(e.target.value);
                }}
                aria-label="address"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Zipcode</InputGroup.Text>
              <Form.Control
                placeholder="00000-0000"
                onChange={(e) => {
                  setZipcode(e.target.value);
                }}
                aria-label="address"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="tel"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              placeholder="00-0000-0000"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>website :</Form.Label>
            <Form.Control
              type="url"
              value={website}
              onChange={(e) => {
                setWebsite(e.target.value);
              }}
              placeholder="http://webUrl.com/"
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicAddress">
            <Form.Label>Company</Form.Label>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
              <Form.Control
                placeholder=""
                onChange={(e) => {
                  setCompanyname(e.target.value);
                }}
                aria-label="company"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">catchPhrase</InputGroup.Text>
              <Form.Control
                placeholder=""
                onChange={(e) => {
                  setCatchPhrase(e.target.value);
                }}
                aria-label="company"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
            <InputGroup className="mb-3">
              <InputGroup.Text id="basic-addon1">business</InputGroup.Text>
              <Form.Control
                placeholder=""
                onChange={(e) => {
                  setBs(e.target.value);
                }}
                aria-label="company"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Form.Group>

          <Button
            className="submit"
            variant="primary"
            type="submit"
            onClick={handleSubmit}
          >
            Submit
          </Button>
          <Button variant="danger" type="button">
            Clear
          </Button>
        </Form>
      </div>
    </>
  );
}

export default CreateUser;
