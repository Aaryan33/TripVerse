import React, { useState } from 'react';
import "./Newsletter.css";
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';
import MaleTourist from "../assets/images/male-tourist.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");

  const handleSubscribe = () => {
    if (email.endsWith("@gmail.com")) {

      setPopupMessage("Thank you for subscribing! You will now receive the latest travel information and updates.");
      setShowPopup(true);

      setEmail("");

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    } else {

      setPopupMessage("Please enter a correct email address");
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    }
  };

  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg="6">
            <div className="newsletter__content">
              <h2>Subscribe to get Useful Traveling Information</h2>
              <div className="newsletter__input">
                <input 
                  type="email" 
                  placeholder='Enter Your Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  className='btn newsletter__btn' 
                  onClick={handleSubscribe}
                >
                  Subscribe
                </button>
              </div>
              <p>
                Stay updated with our blog, featuring insightful articles on travel experiences, 
                destination highlights, and travel advice. From the latest travel trends to personal 
                stories from fellow travelers, immerse yourself in the world of travel.
              </p>
            </div>
          </Col>
          <Col lg="6">
            <div className="newsletter__img">
              <img src={MaleTourist} alt="Male Tourist" />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Pop-up Modal */}
      <Modal isOpen={showPopup} centered>
        <ModalBody className="text-center">
          <p>{popupMessage}</p>
        </ModalBody>
      </Modal>
    </section>
  );
};

export default Newsletter;
