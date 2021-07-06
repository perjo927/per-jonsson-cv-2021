import React from "react";
import "./App.css";

export const App = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  return (
    <div className="app-container">
      <nav className={isNavOpen ? "open" : "closed"}>
        <div id="menu-close" onClick={() => setIsNavOpen(false)}>
          <span>&times;</span>
        </div>
        <a className="selected">About Per</a>
        <a>Contact</a>
        <a>Work Experience</a>
        <a>Education</a>
        <a>Skills</a>
        <a>Personality</a>
        <a>Social</a>
        <a>Hobbies</a>
      </nav>
      <header>
        <div id="menu-open" onClick={() => setIsNavOpen(true)}>
          <span>&#9776;</span>
        </div>
        <h1>CURRICULUM VITAE</h1>
        <div id="download">&#11015;</div>
      </header>
      <div className="app-content">
        <h2 className="headline">
          <span>PER</span>
          <span>JONSSON</span>
        </h2>
        <main>
          <div>
            <h3 className="headline">
              <span>WEB</span>
              <span>DEVELOPER</span>
            </h3>
            <h4>
              <span>+46-72-313-69-90</span>
              <span>|</span>
              <span>djpjgj@gmail.com</span>
            </h4>
          </div>
          <section className="content-wrapper">
            <h5>
              <span>SECTION TITLE</span>
            </h5>
          </section>
          <h4>
            <span>NEXT</span>
            <span>&#10142;</span>
          </h4>
        </main>
      </div>
    </div>
  );
};

export default App;
