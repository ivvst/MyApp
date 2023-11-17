import { Link } from 'react-router-dom';

import Login from "./Login";
import Button from 'react-bootstrap/Button';

const Home = () => {
  return (
    <div className="fh5co-hero">
      <div className="fh5co-overlay" />
      <div
        className="fh5co-cover text-center"
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: {} }}
      >
        <div className="desc animate-box">
          <h2>Travel Around The World.</h2>
          <span>
            {/* Only for not authenticated users */}
            <a className="btn btn-primary btn-lg" href="/login">
              <Login /> Login
            </a>
            {/* <Butoon className="btn btn-primary btn-lg" as={Link} to={"register"} style={{ margin: '2em' }}>
              Register</Button> */}
            <div className="btn btn-primary btn-lg" style={{ margin:'3em' }}>
              <Button as={Link} to={`/register`}>Register
              </Button>
            </div>
            <div className="btn btn-primary btn-lg" style={{ margin:'3em' }}>
              <Button as={Link} to={`/create`}>Create
              </Button>
            </div>

          </span>
        </div>
      </div>
    </div>
  );


}
export default Home;