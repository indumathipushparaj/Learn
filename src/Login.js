import { useState } from "react";

function Login(props) {
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = () => {
    props.history.push({
      pathname: "/Home",
      username: username
    });
  };
  return (
    <div className="login-wrapper">
      <header>LOGIN FORM</header>
      <div className="form-content">
        <div className="content-wrap">
          <label>Username:</label>
          <input type="text" onChange={handleChange} />
        </div>
        <div className="content-wrap">
          <label>password:</label>
          <input type="password" required />
        </div>
        <div className="button-wrapper">
          <button onClick={handleLogin}>Sign Up</button>
          <button>Sign In</button>
        </div>
      </div>
      <footer>Copyright reserved</footer>
    </div>
  );
}

export default Login;
