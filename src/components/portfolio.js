import React from 'react';

function Portfolio() {
    return (
        <section id="portfolio">
          <h2>Portfolio</h2>
          <div className="project-container">
            <Project title= 'Password Generator' image= './passwordGen.png' deployed= 'https://agnellod.github.io/challenge-3/'/>
            <Project title= 'Dew Drop Adventure Interative Game' image= './dewDrop.jpg' deployed= 'https://github.com/Kshakely5280/MVC_project'/>
          </div>
        </section>
      );
    }
    function Project(props) {
       return (
    <div className="project">
      <div className="project-overlay">
        <h3>{props.title}</h3>
      </div>
      <img src={props.image} alt={props.title} />
      <div className="project-links">
        <a href={props.deployed} className="deployed">Deployed App</a>
      </div>
    </div>
  );
}
export default Portfolio;