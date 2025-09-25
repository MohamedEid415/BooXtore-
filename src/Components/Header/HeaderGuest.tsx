import { NavLink } from "react-router-dom";
import "./HeaderGuest.css";
import { MdAssignmentInd } from "react-icons/md";
import { MdLogin } from "react-icons/md";

export default function Header() {
  return (
    <div id="headerLayout">
      <div id="headerItSelf" className="col-12 col-md-10">
        <NavLink to="/booxtore">
          <img
            src="https://booxtore.net/static/media/logoBooxtore.76f97d147d00a1c42dfb4f372782a937.svg"
            id="imgInHeader"
            alt="Logo"
          />
        </NavLink>
        <div id="iconHolder">
          <NavLink to={"login"} className={"navlinkStyle"}>
            <div className="nameAndIcon" style={{ backgroundColor: "#B2DDD0" }}>
              <span>Login</span>
              <MdLogin style={{ fontSize: "30px", color: "white" }} />
            </div>
          </NavLink>
          <NavLink to={""} className={"navlinkStyle"}>
            <div className="nameAndIcon" style={{ backgroundColor: "#408C7B" }}>
              <span>Register</span>
              <MdAssignmentInd style={{ fontSize: "30px", color: "white" }} />
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
