import React from "react";
// import "/Users/carlos/Desktop/bootcamp/bootcamp/react-website-v1-master/src/components/ContactButtons.js";
import './ContactButton.css'


function ContactButtons() {
  return (
    <div
      className="btn-group m-auto contact-buttons"
      role="group"
      aria-label="Contact Buttons"
    >
      <a
        href="https://github.com/Doseofcarlos"
        className="btn btn-secondary btn-lg active mr-1"
        title="Carlos's Github "
      >
        GitHub
      </a>
      <a
        href="https://www.linkedin.com/in/carlos-ordonez-964a8a198/"
        className="btn btn-secondary btn-lg active"
        title="Carlos on Linkedin"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default ContactButtons;