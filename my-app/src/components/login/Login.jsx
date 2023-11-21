import { useContext } from "react";
import useForm from "../../hooks/useForm";
import "./login.css"
import AuthContext from "../../contexts/authContext";

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


  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={onSubmit} >
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name={LoginFormKeys.Email}
          placeholder="Enter your email"
          onChange={onChange}
          value={values[LoginFormKeys.Email]}


          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name={LoginFormKeys.Password}
          placeholder="Enter your password"
          onChange={onChange}
          value={values[LoginFormKeys.Password]}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;