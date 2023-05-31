import React from "react";

function Navigation(props) {
    const sections = ["about", "portfolio", "contact", "resume"];
  
    return (
      <nav>
        {sections.map((section) => (
          <button
            key={section}
            className={props.activePage === section ? "active" : ""}
            onClick={() => props.handleNavigation(section)}
          >
            {section}
          </button>
        ))}
      </nav>
    );
  }
  

export default Navigation;