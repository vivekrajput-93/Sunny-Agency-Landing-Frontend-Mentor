import "./App.css";
import logo from "./images/logo.svg";
import arrow from "./images/icon-arrow-down.svg";
import transform from "./images/desktop/image-transform.jpg";
import stand from "./images/desktop/image-stand-out.jpg";
import emily from "./images/image-emily.jpg";
import thomas from "./images/image-thomas.jpg";
import jennie from "./images/image-jennie.jpg";
import milk from "./images/desktop/image-gallery-milkbottles.jpg";
import cone from "./images/desktop/image-gallery-cone.jpg";
import orange from "./images/desktop/image-gallery-orange.jpg";
import sugar from "./images/desktop/image-gallery-sugarcubes.jpg";
import face from "./images/icon-facebook.svg";
import insta from "./images/icon-instagram.svg";
import tweet from "./images/icon-twitter.svg";
import pin from "./images/icon-pinterest.svg";
import { useState } from "react";
import openMenu from "./images/icon-menu.svg";
import closeMenu from "./images/icon-close-menu.svg";

function App() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div>
      <div className="wrapper">
        <div className="banner">
          <div className="header">
            <img src={logo} alt="logo" className="logo" />
            <div className={click ? " active" : "nav-menu"}>
              <span>About</span>
              <span>Services</span>
              <span>Porjects</span>
              <div className="contact">Contact</div>
            </div>
            <div className="hamburger" onClick={handleClick}>
                {click ? (
                  <img src={closeMenu} size={40} className="ham"  />
                ) : (
                  <img src={openMenu} size={40} className="ham"  />
                )}
              </div>
          </div>
          <div className="main">
            <span className="text">WE ARE CREATIVES</span>
            <img src={arrow} alt="arrow" className="arrow" />
          </div>
        </div>
        <div className="section1">
          <div className="left">
            <div className="text-container">
              <h1>Transform your brand</h1>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <div className="button">
                <span>Learn More</span>
              </div>
            </div>
          </div>
          <div className="right">
            <img src={transform} />
          </div>
        </div>
        <div className="section2">
          <div className="right">
            <img src={stand} />
          </div>
          <div className="left">
            <div className="text-container">
              <h1>Stand out to the right audience</h1>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we'll build and
                extend your brand in digital places
              </p>
              <div className="but">
                <span>Learn More</span>
              </div>
            </div>
          </div>
        </div>
        <div className="section3">
          <div className="first">
            <h1 className="head">Graphic Design</h1>
            <p className="para">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential client's
              attention.
            </p>
          </div>
          <div className="second">
            <h1 className="head">Photography</h1>
            <p className="para">
              Increase your credibility by getting the most stunning,
              high-quality photos that improve your business image.
            </p>
          </div>
        </div>
        <div className="tip">
          <h1>CLIENT TESTIMONIALS</h1>
          <div className="person">
            <div className="card">
              <img src={emily} alt="emily" />
              <p>
                We put our trust in Sunnyside and they delivered, making sure
                our needs were met and deadlines were always hit.
              </p>
              <span className="credit">
                <span>Emily R.</span>
                <p>Marketing Director</p>
              </span>
            </div>
            <div className="card">
              <img src={thomas} alt="thomas" />
              <p>
                Sunnyside's enthusiasm coupled with their keen interest in our
                brand's success made it a satisfying and enjoyable experience.
              </p>
              <span className="credit">
                <span>Thomas S.</span>
                <p>Chief Operating Officer</p>
              </span>
            </div>
            <div className="card">
              <img src={jennie} alt="jennie" />
              <p>
                Incredible end result! Our sales increased over 400% when we
                worked with Sunnyside.Highly recommended!
              </p>
              <span className="credit">
                <span>Jennie F.</span>
                <p>Business Owner</p>
              </span>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={milk} alt="milk" className="milk" />
          <img src={orange} alt="orange" className="orange" />
          <img src={cone} alt="cone" className="cone" />
          <img src={sugar} alt="sugar" className="sugar" />
        </div>
        <div className="footer">
          <img src={logo} alt="logo" className="footer-img" />
          <ul>
            <li>About</li>
            <li>Services</li>
            <li>Porjects</li>
          </ul>
          <div className="social">
            <img src={face} alt="facebook" />
            <img src={insta} alt="instagram" />
            <img src={tweet} alt="tweet" />
            <img src={pin} alt="pin" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
