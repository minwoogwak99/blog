import "./login.css";

function Login() {
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm">
        <label>Email</label>
        <input type="text" placeholder="Your eamil address" />
        <label>Password</label>
        <input type="text" placeholder="your password" />

        <div className="loginButtons">
          <button className="loginButton">Login</button>
          <button className="loginRegisterButton">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
