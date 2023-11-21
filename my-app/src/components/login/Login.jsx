import useForm from "../../hooks/useForm";

const Login = () => {
  const { values, onChange, onSubmit } = useForm({
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
          name="emial"
          placeholder="Enter your email"
          onChange={onChange}
          value={values.email}


          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Enter your password"
          onChange={onChange}
          value={values.password}
          required
        />

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;