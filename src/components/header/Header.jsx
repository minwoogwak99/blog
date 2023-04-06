import "./header.css";

function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2016/07/22/20/07/chicago-1535678_1280.jpg"
        alt=""
      />
    </div>
  );
}

export default Header;
