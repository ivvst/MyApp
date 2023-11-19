import { Link } from 'react-router-dom';

import Login from "../Login";
import Button from 'react-bootstrap/Button';
import './home.css'

const Home = () => {
  return (
    <section className="u-align-center u-clearfix u-expand-resize u-image u-shading u-video-cover u-section-1">
    <div className="u-clearfix u-sheet u-sheet-1">
      <h1 className="u-text u-text-body-alt-color u-title u-text-1">Travel Easy with Us.</h1>
      <p className="u-large-text u-text u-text-body-alt-color u-text-variant u-text-2">
        Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.
      </p>
      <Button as={Link} to={'/catalog'} variant="info">SeeMore</Button>
      <div className="u-expanded-width-sm u-expanded-width-xs u-video u-video-cover u-video-1">
        <div className="embed-responsive embed-responsive-1">
          <iframe
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
            className="embed-responsive-item"
            src="https://www.youtube.com/embed/Pk7dC4UmqRs?playlist=Pk7dC4UmqRs&amp;loop=1&amp;mute=1&amp;showinfo=0&amp;controls=0&amp;start=0&amp;autoplay=1"
            data-autoplay="1"
            frameBorder="0"
            allowFullScreen=""
          ></iframe>
        </div>
      </div>
    </div>
  </section>

  );


}
export default Home;