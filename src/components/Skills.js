import c from "../assets/img/c.png";
import cpp from "../assets/img/cpp.png";
import java from "../assets/img/java.png";
import python from "../assets/img/python.png";
import r from "../assets/img/r.png";
import html from "../assets/img/html.png";
import css from "../assets/img/css.png";
import php from "../assets/img/php.png";
import react from "../assets/img/react.png";
import bootstrap from "../assets/img/bootstrap.png";
import mysql from "../assets/img/mysql.svg";
import mongo from "../assets/img/mongodb.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import git from "../assets/img/git.png";
import github from "../assets/img/github.png";
import postman from "../assets/img/postman.png";
import kaggle from "../assets/img/k.png";
// import colorSharp from "../assets/img/color-sharp.png"
import Particle from "./Particle";
export const Skills = () => {


  return (
    
    <section className="skill" id="skills">
     
      <Particle></Particle>
      <div className="container-skills">
      
    
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>

              <section>
             
                <div className="wrapper">
                  {/* <!-- Box 1 --> */}
                  <div className="skills">
                    <h1 className="skills-title">Programming Languages</h1>
                    <div className="skills-list">
                      <div className="skills-item">
                        <img src={c} className="skills-image" />
                        C
                      </div>
                      <div className="skills-item">
                        <img src={cpp} className="skills-image" />
                        Cpp
                      </div>
                      <div className="skills-item">
                        <img src={java} className="skills-image" />
                        Java
                      </div>
                      <div className="skills-item">
                        <img src={python} className="skills-image" />
                        Python
                      </div>
                      <div className="skills-item">
                        <img src={r} className="skills-image" />
                        R
                      </div>
                      {/* <div className="skills-item">
            <img src="js.png" className="skills-image"/>
            Javascript
          </div> */}
                    </div>
                  </div>

                  {/* <!-- Box 2 --> */}
                  <div className="skills">
                    <h1 className="skills-title">Frontend Development</h1>
                    <div className="skills-list">
                      <div className="skills-item">
                        <img src={html} className="skills-image" />
                        HTML
                      </div>
                      <div className="skills-item">
                        <img src={css} className="skills-image" />
                        CSS
                      </div>

                      <div className="skills-item">
                        <img src={react} className="skills-image" />
                        React Js
                      </div>
                      <div className="skills-item">
                        <img src={bootstrap} className="skills-image" />
                        Bootstrap
                      </div>
                    </div>
                  </div>

                  {/* <!-- Box 3 --> */}
                  <div className="skills">
                    <h1 className="skills-title">Backend Development</h1>
                    <div className="skills-list">
                      <div className="skills-item">
                        <img src={mysql} className="skills-image" />
                        MySQL
                      </div>
                      <div className="skills-item">
                        <img src={mongo} className="skills-image" />
                        MongoDB
                      </div>
                      {/* <div className="skills-item">
                        <img src={express} className="skills-image" />
                        Express Js
                      </div> */}
                    </div>
                  </div>

                  {/* <!-- Box 4 --> */}
                  <div className="skills">
                    <h1 className="skills-title">Additional skills</h1>
                    <div className="skills-list">
                      <div className="skills-item">
                        <img src={git} className="skills-image" />
                        Git
                      </div>
                      <div className="skills-item">
                        <img src={github} className="skills-image" />
                        Github
                      </div>
                      <div className="skills-item">
                        <img src={postman} className="skills-image" />
                        Postman
                      </div>
                      <div className="skills-item">
                        <img src={kaggle} className="skills-image" />
                        Kaggle
                      </div>
                    </div>
                  </div>

                </div>
                {/* </div> */}
                
              </section>
       
            </div>
          </div>
          
        </div>
        
        
      </div>
      
     
      {/* <img className="background-image-left" src={colorSharp} alt="pic" /> */}
    </section>
  )
}
