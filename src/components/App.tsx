import { useState } from "react";
import Header from "./Header";
import Contact from "./Contact";
import Portfolio from "./Portfolio";
import About from "./About";
import "./App.css";

console.log("𝙇𝙞𝙫𝙚 𝙡𝙤𝙣𝙜 𝙖𝙣𝙙 𝙥𝙧𝙤𝙨𝙥𝙚𝙧. 🖖", "Thanks for visiting.");

const App = () => {
  const [about, showAbout] = useState(true);
  const [portfolio, showPortfolio] = useState(false);
  const [contact, showContact] = useState(false);
  const [mobile, showMobile] = useState(false);

  const handleToggle = (element: React.MouseEvent<HTMLButtonElement>) => {
    let target = element.currentTarget.id;
    showAbout(false);
    showPortfolio(false);
    showContact(false);
    if (target === "about") showAbout(true);
    if (target === "portfolio") showPortfolio(true);
    if (target === "contact") showContact(true);
    if (mobile) toggleMenu();
  };

  const toggleMenu = () => {
    showMobile(!mobile);
  };

  const CurrentRoute = () => {
    if (mobile) return
    return (about) ? <About /> : (contact) ? <Contact /> : (portfolio) ? <Portfolio /> : null
  }

  return (
    <div className="App">
      <Header
        toggleMenu={toggleMenu}
        handleToggle={handleToggle}
        mobile={mobile}
        about={about}
        portfolio={portfolio}
        contact={contact}
      />
      <div className="page">
        {CurrentRoute()}
      </div>
    </div>
  );
};

export default App;
