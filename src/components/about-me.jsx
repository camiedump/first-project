import "./about.css";
import profilePic from "../assets/minji.png";
import fblogo from "../assets/facebook.svg"; 
import gmaillogo from "../assets/gmail.svg";
import linkedinlogo from "../assets/linkedin.svg";

export default function About() {
  return ( <>
    <div className="about-container">
      {}
      <div className="about-image">
        <img src={profilePic} alt="minji" />
      </div>

      {}
      <div className="about-text">
        <h1>About</h1>
        <p>
          Hello! I'm <strong>Camille</strong>, a passionate web designer dedicated to crafting 
          visually stunning and user-friendly websites. My love for technology and creativity 
          drives me to design seamless digital experiences.
        </p>
        <p>
          I specialize in modern UI/UX, front-end development, and creating brands 
          that leave a lasting impression.
        </p>

        {}
        <div className='logo-container'>
        <a className='logo' href="" target="_blank">
          <img src={fblogo} className="logo-react" alt="facebook" />
        </a>
        <a className='logo' href="" target="_blank">
          <img src={gmaillogo} className="logo-react" alt="gmail" />
        </a>
        <a className='logo'href="" target="_blank">
          <img src={linkedinlogo} className="logo-react" alt="linkedin" />
        </a>
    </div>

      </div>
    </div>
    </>
  );
}
