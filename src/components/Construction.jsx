import '../assets/styles/construction.css';
import shortClip from '../assets/images/construction-clip.mp4';
import lintelzLogo2 from '../assets/images/lintelz-logo2.png';
import { FaWhatsappSquare, FaInstagramSquare, FaFacebookSquare, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";



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
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaWhatsappSquare className="construction__social-icon" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare className="construction__social-icon" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="construction__social-icon" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="construction__social-icon" />
              </a>
              <a href="" target="_blank" rel="noopener noreferrer">
                <FaSquareXTwitter className="construction__social-icon" />
              </a>
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