import "./register.css";

function Register() {
  return (
    <div className="register">
      <span className="registerTitle">Crete your account</span>
      <form className="registerForm">
        <label>Email</label>
        <input type="text" placeholder="Your eamil address" />
        <label>Password</label>
        <input type="text" placeholder="your password" />
        <label>re-password</label>
        <input type="text" placeholder="Type your password again" />

        <div className="registerButtons">
          <button className="registerButton">Register</button>
        </div>
      </form>
    </div>
  );
}

export default Register;
