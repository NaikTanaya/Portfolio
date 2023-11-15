
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";

import { db } from "./Fire";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";


const Contact = () => {

  const [firstName, setname] = useState("");
  const [lastName, setlname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [message, setmessage] = useState("");
  const usersCollectionRef = collection(db, "create");

  const createUser = async () => {
    await addDoc(usersCollectionRef, { firstName: firstName, lastName: lastName, email: email, phone: phone, message: message });
  }

  return (
    <section className="contact" id="connect">

      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>

            <img src={contactImg} alt="Contact Us" />

          </Col>

          <Col size={12} md={6}>

            <div>
              <h2 style={{ marginTop: "50px" }}>Get In Touch</h2>
              <form>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={firstName} placeholder="First Name" onChange={(e) => { setname(e.target.value) }} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="text" value={lastName} placeholder="Last Name" onChange={(e) => { setlname(e.target.value) }} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="email" value={email} placeholder="Email Address" onChange={(e) => { setemail(e.target.value) }} />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input type="tel" value={phone} placeholder="Phone No." onChange={(e) => { setphone(e.target.value) }} />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea rows="6" value={message} placeholder="Message" onChange={(e) => { setmessage(e.target.value) }}></textarea>
      
                    <button onClick ={createUser}><span>SEND</span> </button>
                  </Col>
                </Row>
              </form>
            </div>

          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;
