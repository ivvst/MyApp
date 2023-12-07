import React, { useContext, useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import AuthContext from '../../contexts/authContext';
import useForm from '../../hooks/useForm';

const RegisterFormKeys = {
  Username: 'username',
  Email: 'email',
  Password: 'password',
  ConfirmPassword: 'confirm-password',
}


export default function Register() {
  const { registerSubmitHandler } = useContext(AuthContext);
  const { values, onChange, onSubmit } = useForm(registerSubmitHandler, {
    [RegisterFormKeys.Username]: '',
    [RegisterFormKeys.Email]: '',
    [RegisterFormKeys.Password]: '',
    [RegisterFormKeys.ConfirmPassword]: '',

  })
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
    padding: '10px',
    backgroundColor: '#b38bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '18px',
    transition: 'background-color 0.2s ease-in-out',
  };

  const input =
  {
    width:"100%",
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
        <h1>Register</h1>
        <form onSubmit={onSubmit}>
          <div>

            <label htmlFor="username">Username</label>
            <input
              style={input}
              type="username"
              id="username"
              name="username"
              placeholder="YourUsername"
              onChange={onChange}
              value={values[RegisterFormKeys.Username]}
              required
            />
          </div>
          <div>

            <label htmlFor="email">Email</label>
            <input style={input}
              type="email"
              id="email"
              name="email"
              placeholder="example@email.com"
              onChange={onChange}
              values={values[RegisterFormKeys.Email]}
              required />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <input style={input}
              type="password"
              id="password"
              name="password"
              onChange={onChange}
              values={values[RegisterFormKeys.Password]}
              required />
          </div>

          <div>

            <label htmlFor="confirm-password">Confirm Password</label>
            <input style={input}
              type="password"
              name="confirm-password"
              id="confirm-password"
              onChange={onChange}
              values={values[RegisterFormKeys.ConfirmPassword]}
              required />
          </div>
          <button type="submit" style={buttonStyle} >
            Register
          </button>
        </form>
      </div>
    </div>
  );


  //   return (
  // //     <section id="register-page" className="content auth">
  // //     <form id="register" onSubmit={onSubmit}>
  // //         <div className="container">
  // //             <div className="brand-logo"></div>
  // //             <h1>Register</h1>

  // //            {/*  */}

  // //             <label htmlFor="email">Email:</label>
  // //             <input
  // //                 type="email"
  // //                 id="email"
  // //                 name="email"
  // //                 placeholder="maria@email.com"
  // //                 onChange={onChange}
  // //                 values={values[RegisterFormKeys.Email]}
  // //             />

  // //             <label htmlFor="pass">Password:</label>
  // //             <input
  // //                 type="password"
  // //                 name="password"
  // //                 id="register-password"
  // //                 onChange={onChange}
  // //                 values={values[RegisterFormKeys.Password]}
  // //             />

  // //             <label htmlFor="con-pass">Confirm Password:</label>
  // //             <input
  // //                 type="password"
  // //                 name="confirm-password"
  // //                 id="confirm-password"
  // //                 onChange={onChange}
  // //                 values={values[RegisterFormKeys.ConfirmPassword]}
  // //             />

  // //             <input className="btn submit" type="submit" value="Register" />
  // //         </div>
  // //     </form>
  // // </section>
  //   );
}

