
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../assets/img/home-main.svg";
import Type from "./Type";

import { ArrowRightCircle } from 'react-bootstrap-icons';
// import Particle2 from "./Particle2";


export const Banner = () => {


  return (

    <section className="banner" id="home">
    
      <Container>

        <Row className="aligh-items-center">

          <Col xs={12} md={6} xl={7}>
            
            <span className="tagline">Welcome to my Portfolio</span>
            <br></br>
            <h1>Hi {" "} 👋🏻 I'm Tanaya Naik</h1>
            <hr></hr>
            <h1><Type /></h1>
            <p>I am a highly motivated individual with a profound passion for coding and software development.
              My strengths lie not only in my technical prowess but also in my ability to work effectively within a team, take on leadership roles, and enthusiastically embrace the challenge of mastering new and cutting-edge technologies.</p>
            <button onClick={() => {
              const element = document.querySelector('#connect');
              element.scrollIntoView();
            }}>Let’s Connect <ArrowRightCircle size={25} /></button>

          </Col>
          <Col xs={12} md={6} xl={5}>
           
            <img
              src={homeLogo}
              alt="home pic"
              className="img-fluid"
              style={{ maxHeight: "450px" }}
            />

       
          </Col>

        </Row>

      </Container>
    </section>
  )
}
