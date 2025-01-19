import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Button, Alert } from "reactstrap";
import "../styles/Contact.css";
import Subtitle from "../shared/Subtitle";
import { BASE_URL } from "../utils/config";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [alertVisible, setAlertVisible] = useState(false);
  const [alertType, setAlertType] = useState("success");
  const [alertMessage, setAlertMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${BASE_URL}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form data.");
      }

      setAlertType("success");
      setAlertMessage("Form data submitted successfully!");
      setAlertVisible(true);

      // Clear the form fields after successful submission
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setAlertType("danger");
      setAlertMessage(error.message || "Failed to submit form data. Please try again later.");
      setAlertVisible(true);
    }
  };

  return (
    <section>
      <Container>
        <Row>
          <Col sm={12} md={{ size: 6, offset: 3 }}>
            <Subtitle subtitle={"Contact Us"} />
            <div className="contact-info">
              <p>Contact No: +1 123-456-7890</p>
              <p>Email: contact@tripverse.com</p>
            </div>
            {alertVisible && (
              <Alert color={alertType} className="mt-3">
                {alertMessage}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <FormGroup className="form__group">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <FormGroup className="form__group">
                <input
                  type="textarea"
                  id="message"
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </FormGroup>
              <Button type="submit" className="btn primary__btn">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
