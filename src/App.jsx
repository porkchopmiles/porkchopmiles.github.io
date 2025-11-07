import React from "react";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Riveria Maya Vacation Homes",
      description: "A vacation rental website built with HTML, CSS, and JavaScript.",
      link: "https://rivieramayavacationhome.com/",
    },
    {
      title: "ToDO List App",
      description: "Todo app that uses MySQL for the data base flask for backend and react for front end",
      link: "https://github.com/porkchopmiles/ToDoApp",
    },
    {
      title: "Anderson Appraisials",
      description: "A real estate appraisal website built with HTML, CSS, and JavaScript.",
      link: "https://northidahoappraiser.com/",
    },
    {
      title: "Weather App",
      description: "React app that fetches weather data from an API. Ongoing project.",
      link: "N/A",
    },
    {
      title: "Task Manager",
      description: "A simple CRUD task manager built with React.",
      link: "N/A",
    },
    {
      title: "Blog Platform",
      description: "A blog platform using React and Node.js backend.",
      link: "N/A",
    },
  ];
  return (
    <div className="App">
      {/* HEADER */}
      <header className="header">
        <h1>Miles Handlen</h1>
        <p>Computer Science Student | Developer | Problem Solver</p>
      </header>

      {/* ABOUT ME */}
      <section className="about">
        <h2>About Me</h2>
        <p>
          I am a Computer science student at the University of Idaho. Its currently my senior year alot of my public projects can be found on my github page below. They are mostly small projects that I have done to learn new skills and technologies.
          My current private projects are focusing on data bases and scalable consumer products. With my school projects focusing on ML and IoT Networks 
        </p>
      </section>

      {/* CONTACT ME */}
      <section className="contact">
        <h2>Contact Me</h2>
        <p>If you want to reach out, you can contact me via:</p>
        <ul>
          <li>
            GitHub:{" "}
            <a href="https://github.com/porkchopmiles" target="_blank" rel="noreferrer">
              github.com/porkchopmiles
            </a>
          </li>
          <li>Email: <a href="mailto:mileshandlen@gmail.com">mileshandlen@gmail.com</a></li>
          <li>Phone: <a href="tel:+2089165259">(208) 916-5259</a></li>
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        © {new Date().getFullYear()} Miles Handlen. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
