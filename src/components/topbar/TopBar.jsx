import "./topbar.css";

function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-solid fa-terminal"></i>
        <i className="topIcon fa-solid fa-tents"></i>
        <i className="topIcon fa-solid fa-circle-info"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://cdn.pixabay.com/photo/2016/11/06/23/51/buildings-1804479_1280.jpg"
          alt=""
        />
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}

export default TopBar;
