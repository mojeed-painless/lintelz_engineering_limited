import '../assets/styles/construction.css';
import {socialLinks} from '../data.js';
import shortClip from '../assets/images/construction-clip.mp4';
import lintelzLogo2 from '../assets/images/lintelz-logo2.png';



export default function Construction() {
  return (
    <header className="construction__container">
      <div className="construction__cover">
          <div className="construction__content">
            <div className="construction__logo">
              <img src={lintelzLogo2} alt="Lintelz Engineering Limited Logo" />
            </div>

            <h1 className="construction__title">Website is Under Construction</h1>

            <p className="construction__description">
              We are working hard to bring you an amazing experience. Stay tuned for updates!
            </p>

            <div className="construction__socials">
              {socialLinks.map(({ id, href, icon: Icon }) => (
                <a key={id} href={href} target="_blank" rel="noopener noreferrer">
                  <Icon className="construction__social-icon" />
                </a>
              ))}
            </div>
          </div>
          
          <div className="construction__videos">
            <video autoPlay loop muted src={shortClip}>
              Your browser does not support the video tag.
            </video>
          </div>
      </div>
    </header>
  );
}