import { useContext } from "react";
import useForm from "../../hooks/useForm";
//import "./login.css"
import AuthContext from "../../contexts/authContext";
import { Link } from "react-router-dom";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'

}

const Login = () => {
  const { loginSubmitHandler } = useContext(AuthContext)
  const { values, onChange, onSubmit } = useForm(loginSubmitHandler, {
    email: '',
    password: '',
  });


  const backgroundImageUrl = 'https://www.bing.com/images/blob?bcid=RO3YeoI2fFUGz5m-pRi-IZYYcsY-.....90';

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: `url(${backgroundImageUrl}) no-repeat center center fixed`,
    backgroundSize: 'cover',
  };

  const formContainerStyle = {
    width: '600px',
    margin: '0 auto',
    padding: '50px',
    backgroundColor: '#333',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    color: '#fff',
  };

  const buttonStyle = {
    margin: '15px 5px ',
    padding: '10px',
    backgroundColor: '#b38bff',
    color: 'black',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.2s ease-in-out',
  };
  const input =
  {
    padding: '12px',
    border: 'none',
    borderRadius: ' 5px',
    marginBottom: '20px',
    fontSize: '16px',
    color: ' #fff',
    backgroundColor: '#555'
  };



  return (
    <div style={containerStyle}>
      <div className="form-container" style={formContainerStyle}>
        <h1>Login</h1>
        <form onSubmit={onSubmit}>
          <label htmlFor="email">Email</label>
          <input style={input}
            type="email"
            id="email"
            name="email"
            placeholder="your@gmail.com"
            onChange={onChange}
            value={values[LoginFormKeys.Email]}
            required />
          <label htmlFor="password">Password</label>
          <input style={input}
            type="password"
            id="password"
            name="password"
            onChange={onChange}
            value={values[LoginFormKeys.Password]}
            required />
          <button type="submit" style={buttonStyle}>
            Login
          </button>
        </form>
      </div>
    </div>
  );


  // <div className="login-container">
  //   <h2>Login</h2>
  //   <form onSubmit={onSubmit} >
  //     <label htmlFor="email">Email:</label>
  //     <input
  //       type="email"
  //       id="email"
  //       name={LoginFormKeys.Email}
  //       placeholder="Enter your email"
  //       onChange={onChange}
  //       value={values[LoginFormKeys.Email]}


  //       required
  //     />

  //     <label htmlFor="password">Password:</label>
  //     <input
  //       type="password"
  //       id="password"
  //       name={LoginFormKeys.Password}
  //       placeholder="Enter your password"
  //       onChange={onChange}
  //       value={values[LoginFormKeys.Password]}
  //       required
  //     />

  //     <button type="submit">Login</button>
  //   </form>
  // </div>

}

export default Login;