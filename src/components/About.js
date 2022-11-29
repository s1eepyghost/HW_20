// Recent Photo or Avatar
// Short Biography
import React from "react";

function About() {
  return (
    <div>
      <p className="content is-medium">Future Full Stack Developer</p>
      <hr />
      <img className="my-pic" src={process.env.PUBLIC_URL + '/img/profile.jpg'} alt="Emily Necciai Mayeski"/>
      <p className="content is-italic mt-4">
        Hi, my name is Liben Warsame and I am a student with the University of Minnesota's Coding Bootcamp. I am thrilled that you took the time to check out my portfolio and see the work that I have made or contributed to. If you have any questions, please feel free to conatct me in the contact section.
      </p>
      <p className="content">
        I always act as a product manager for learning resources, which guides
        users to what they need in the moment, but also enable them to explore
        content on their terms using video, audio, documentation, and so much
        more in an advanced learning ecosystem.
      </p>
    </div>
  );
}

export default About;