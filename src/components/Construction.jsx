import '../assets/styles/construction.css';
import shortClip from '../assets/images/construction-clip.mp4';



export default function Construction() {
  return (
    <header className="construction__container">
      <div className="construction__cover">
          <div className="construction__content">
            <h1 className="construction__title">This Page is Under Construction</h1>

            <p className="construction__description">
              We are working hard to bring you an amazing experience. Stay tuned for updates!
            </p>
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