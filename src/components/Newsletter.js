import React, { useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import Modal from 'react-modal';
import { ArrowRightCircle } from 'react-bootstrap-icons';

// Set the root element for accessibility
Modal.setAppElement('#root');

export const Newsletter = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openResume = () => {
    setIsModalOpen(true);
  };

  const closeResume = () => {
    setIsModalOpen(false);
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp" id="newsletter"
      style={{
        background: 'linear-gradient(45deg, #3498db, #2ecc71)', // Example linear gradient background
        // color: '#fff',
        padding: '40px',
        // borderRadius: '10px',
        position: 'relative', // Add position relative for absolute positioning of hover overlay
        overflow: 'hidden', // Hide overflow for the hover overlay
      }}
      >
        <Row>
          <Col lg={12} md={6} xl={5}>
            <br/>
            {/* <h3>Click to view my Resume</h3> */}
          </Col>
          <center/>
          <Col md={9} xl={12}>
            <div className="new-email-bx d-flex justify-content-center">
              
            <h3 style={{
              // background: 'linear-gradient(90.21deg, #AA367C -5.91%, #4A2FBD 111.58%)',
              
              WebkitBackgroundClip: 'text',
            
              textFillColor: 'transparent',
              padding: '15px',
            }}>Click to view my Resume </h3>  &nbsp; &nbsp;
            <ArrowRightCircle size={35} style={{color:"black"}} />  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; 
              <Button onClick={openResume} variant="primary"style={{
                  align: 'center', 
                }}
                className="open-resume-btn">
                Open Resume
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeResume}
        contentLabel="Resume Modal"
        className="resume-modal"
        overlayClassName="resume-overlay"
        style={{
          overlay: {
            zIndex: 9999,
          },
          content: {
            width: '80%', // Adjust the width as needed
            height: '90%', // Adjust the height as needed
            margin: 'auto',
            background: '#3498db', // Adjust the modal background color
            border: '2px solid #2ecc71', // Adjust the modal border color
            borderRadius: '10px',
            padding: '20px',
          },
        }}
      >
      <button className="close-btn" onClick={closeResume} style={{backgroundColor: '#f44336', fontSize: '18px'}}>
        Close
      </button>

        <iframe
          title="Resume"
          src="/Tanaya_Naik_VIT.pdf" // Update with the correct relative path
          width="100%"
          height="100%"
          style={{
            border: 'none', // Hide iframe border
          }}
        />
      </Modal>
    </Col>
  );
};
