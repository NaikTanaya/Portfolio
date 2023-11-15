import React from 'react';
import img from '../assets/img/hsbc.png';

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '49vh',
  },
  rectangle: {
    width: '700px',
    height: '250px',
    backgroundColor: 'transparent',
    border: '2px solid #3498db',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px',
    borderRadius: '15px',
    position: 'relative',
    
  },
  logoImg: {
    width: '170px',
    height: '150px',
    backgroundColor: 'transparent',
    marginRight: '10px',
  },
  work: {
    flexGrow: 1,
    marginLeft: '20px',
  },
};


export default function Experience() {
  return (
    <>
      <section className="project" id="experience">
        <h2 style={{marginBottom:"5px"}}>Experience</h2>
      </section>

      <div style={styles.body}>
        <div className="rectangle" style={styles.rectangle}>
          <div className="logo">
            <img src={img} alt="Logo" style={styles.logoImg} />
          </div>
          <div className="work" style={styles.work}>
            <h4>HSBC Technology India</h4>
            <p style={{ color: '#C0C0C0' }}>Software Developer Intern</p>
            <p style={{ color: '#C0C0C0' }}>July 2023 - December 2023</p>
            <p>
              Worked on API development, applying API security policies, providing support to existing APIs.
            </p>
            <p>
              <b><i>Skills:</i></b>
              • Spring Boot
              • Java
              • Jenkins
              • Postman
            </p>
          </div>
        </div>
      </div>
      <br></br>
    </>
  );
}
