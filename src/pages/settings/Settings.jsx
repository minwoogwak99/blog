import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Icon!</span>
          <span className="settingsDeleteTitle">Delete Your Icon</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://cdn.pixabay.com/photo/2023/03/31/12/57/ladybug-7889937_960_720.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-regular fa-user"></i>
            </label>
            <input type="file" id="fileInput" style={{ display: "none" }} />
          </div>
          <label>UserName</label>
          <input type="text" placeholder="sample" />
          <label>Email</label>
          <input type="email" placeholder="sample@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="sample" />
          <button className="settingsSubmit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}

export default Settings;
