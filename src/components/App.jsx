import React from "react";
import "./App.css";
import { About } from "./About.jsx";
import { Contact } from "./Contact.jsx";
import { Work } from "./Work.jsx";
import { Skills } from "./Skills.jsx";
import { Education } from "./Education.jsx";
import { Personality } from "./Personality.jsx";
import { Social } from "./Social.jsx";
import { Hobbies } from "./Hobbies.jsx";

export const App = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = React.useState(0);

  const MENU_CHOICES = {
    ABOUT: "About Per",
    CONTACT: "Contact",
    WORK: "Work Experience",
    EDUCATION: "Education",
    SKILLS: "Skills",
    PERSONALITY: "Personality",
    SOCIAL: "Social",
    HOBBIES: "Hobbies",
  };

  const menu = [
    MENU_CHOICES.ABOUT,
    MENU_CHOICES.CONTACT,
    MENU_CHOICES.WORK,
    MENU_CHOICES.EDUCATION,
    MENU_CHOICES.SKILLS,
    MENU_CHOICES.PERSONALITY,
    MENU_CHOICES.SOCIAL,
    MENU_CHOICES.HOBBIES,
  ];

  const menuLinks = {
    [MENU_CHOICES.ABOUT]: About,
    [MENU_CHOICES.CONTACT]: Contact,
    [MENU_CHOICES.WORK]: Work,
    [MENU_CHOICES.EDUCATION]: Education,
    [MENU_CHOICES.SKILLS]: Skills,
    [MENU_CHOICES.PERSONALITY]: Personality,
    [MENU_CHOICES.SOCIAL]: Social,
    [MENU_CHOICES.HOBBIES]: Hobbies,
  };

  const renderSelectedSection = () => {
    const selectedItem = menu[selectedMenuItem];
    const Component = menuLinks[selectedItem];
    return <Component />;
  };

  return (
    <div className="app-container">
      <nav className={isNavOpen ? "open" : "closed"}>
        <div id="menu-close" onClick={() => setIsNavOpen(false)}>
          <span>&times;</span>
        </div>
        {menu.map((item, i) => (
          <a
            key={item}
            className={selectedMenuItem === i ? "selected" : ""}
            onClick={() => {
              setIsNavOpen(false);
              setSelectedMenuItem(i);
            }}
          >
            {item}
          </a>
        ))}
      </nav>
      <header>
        <div id="menu-open" onClick={() => setIsNavOpen(true)}>
          <span>&#9776;</span>
        </div>
        <h1>CURRICULUM VITAE</h1>
        <div
          id="download"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1FZ3rXd89acqjRn8HfiI2iapIihCwGN1j/view?usp=sharing",
              "_blank"
            );
          }}
        >
          &#11015;
        </div>
      </header>
      <div className="content-container" onClick={() => setIsNavOpen(false)}>
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
              <span>+46-72-313-69-9X</span>
              <span>|</span>
              <span>djpjgj(at)gmail.com</span>
            </h4>
          </div>
          <section className="content-section">
            <h5>
              <span>{menu[selectedMenuItem]}</span>
            </h5>
            <div className="back-and-forth">
              <div
                className="contrast-title"
                onClick={() => {
                  if (selectedMenuItem - 1 < 0) {
                    setSelectedMenuItem(menu.length - 1);
                    return;
                  }
                  setSelectedMenuItem(selectedMenuItem - 1);
                }}
              >
                <span>&#8592;</span>
                <span>PREVIOUS</span>
              </div>
              <div
                className="contrast-title"
                onClick={() => {
                  if (selectedMenuItem + 1 === menu.length) {
                    setSelectedMenuItem(0);
                    return;
                  }
                  setSelectedMenuItem(selectedMenuItem + 1);
                }}
              >
                <span>NEXT</span>
                <span>&#8594;</span>
              </div>
            </div>
            <div className="content">{renderSelectedSection()}</div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;
