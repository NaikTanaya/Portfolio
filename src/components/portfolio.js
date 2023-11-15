import React from 'react';
 import IMG1 from "../assets/img/p2-2.png";
import IMG2 from "../assets/img/p3.png";
import IMG4 from "../assets/img/p4.jpg";
import IMG5 from "../assets/img/p5.png";
import IMG6 from "../assets/img/credit.jpeg";


const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Credit Card Fraud Detection',
      img: IMG6,
      description:
        'Implemented this project using machine learning techniques, Python, scikit-learn, and TensorFlow. Cleaned and preprocessed data, applied algorithm like Random Forest, and achieved significant accuracy in fraud detection.',
      technologies: "TechStack--> Python",
    //   link: 'https://adventistlearningcenter-257375ab1970.herokuapp.com/',
    //   github: 'https://github.com/Meri-MG/school',
    },
    {
      id: 2,
      title: 'ADROIT: An Interactive Data Visualizer Website',
      img: IMG1,    
      description: "It is an interactive and responsive website to learn different algorithms and evaluate oneself by taking a quiz.This form of visual learning uses various forms of visual stimulation so that the user can interpret the information and quickly memorize and understand the subject more precisely.",
      technologies: "TechStack--> HTML, CSS, JavaScript, Php",
      // link: 'https://fakestore-metrics.netlify.app/',
      // github: 'https://github.com/Meri-MG/Fakestore---react',
    },
    {
      id: 3,
      title: 'FRIDAY: Voice Assistant Using Python',
      img: IMG2,
      description: "Friday virtual assistant is designed to work efficiently on a desktop. Virtual assistant improves the user's productivity by managing the user's daily routine tasks and providing general information from Internet\online sources to the user.",
      technologies: 'TechStack--> Python',
    //   link: 'https://meri-mg.github.io/To-Do-List/dist/',
    //   github: 'https://github.com/Meri-MG/To-Do-List',
    },
    {
      id: 4,
      title: 'Media Player using JavaFX',
      img: IMG4,
      description:
        "The JavaFX library is used to create feature-rich web applications (they offer a similar experience and features to desktop apps). The media player application is implemented using three different classes: the first is our Main class, which starts this application, then it has the Player class to run our videos and audio, and MediaBar class to control our media.",
      technologies: 'TechStack--> Java',
    //   link: 'https://meri-mg.github.io/shelter/pages/main/index.html',
    //   github: 'https://github.com/Meri-MG/shelter',
    },
    {
      id: 5,
      title: 'UDP-based Client-Server Chat Application',
      img: IMG5,
      description:
        'To implement basic UDP client-server communication, the server creates a UDP socket, binds it to the server address, waits for datagram packets from the client, processes them, sends a reply to the client, and repeats this process. On the client side, a UDP socket is created, a message is sent to the server, the client waits for a response, processes the reply, and repeats this process as necessary. Finally, the client closes the socket descriptor and exits when done communicating with the server.',
      technologies: 'TechStack--> CPP',
    //   link: 'https://meri-mg.github.io/Unilab-world-news/',
    //   github: 'https://github.com/Meri-MG/Unilab-world-news',
    },

  ];

  return (
    <section id="portfolio">
      <section className="project" id="projects"> 
      <h2>Projects</h2>
        </section>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3 style={{color: "#778ed4"}}>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            {/* <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a> */}
            {/* </div> */}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;