import "./sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">About Me</span>
        <img
          src="https://cdn.pixabay.com/photo/2023/03/15/04/30/joy-7853671_960_720.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos
          commodi odio asperiores. Assumenda quod autem voluptatem, cum sit
          maxime molestias, reiciendis esse ipsum eos ducimus iure corporis,
          laborum explicabo obcaecati!
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Tech</li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
