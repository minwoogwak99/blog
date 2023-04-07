import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";

import { BrouserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <TopBar />
      <Register />
    </>
  );
}

export default App;
