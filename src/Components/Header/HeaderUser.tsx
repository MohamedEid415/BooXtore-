import { NavLink } from "react-router-dom";
import { PiHandPalm } from "react-icons/pi";
import "./HeaderUser.css";
import "./HeaderGuest.css";
import { MdAssignmentInd } from "react-icons/md";
import { MdLogin } from "react-icons/md";
import { CiLogout } from "react-icons/ci";

export default function Header() {
  const userName = localStorage.getItem("currentUser")?.split(" ")[0];

  return (
    <>
      <div id="headerLayout">
        <div id="headerItSelf" className="col-12 col-md-10">
          <NavLink to="">
            <img
              src="https://booxtore.net/static/media/logoBooxtore.76f97d147d00a1c42dfb4f372782a937.svg"
              id="imgInHeader"
              alt="Logo"
            />
          </NavLink>
          <div id="linksHolder">
            <NavLink end to="">
              <span>Home</span>
              <div className="overlay-right"></div>
              <div className="overlay-right2"></div>
              <div className="overlay-down"></div>
              <div className="overlay-up"></div>
            </NavLink>
            <NavLink to="products">
              <span>Products</span>
              <div className="overlay-right"></div>
              <div className="overlay-right2"></div>
              <div className="overlay-down"></div>
              <div className="overlay-up"></div>
            </NavLink>
            <NavLink to="about">
              <span>About</span>
              <div className="overlay-right"></div>
              <div className="overlay-right2"></div>
              <div className="overlay-down"></div>
              <div className="overlay-up"></div>
            </NavLink>
          </div>
          <div id="divControl">
            {userName === "Guest" ? (
              <div title="sp-IconHolder" id="iconHolder">
                <NavLink to={"/account/login"} className={"navlinkStyle"}>
                  <div
                    className="nameAndIcon"
                    style={{ backgroundColor: "#B2DDD0" }}
                  >
                    <span>Login</span>
                    <MdLogin style={{ fontSize: "30px", color: "white" }} />
                  </div>
                </NavLink>
                <NavLink to={"/account/"} className={"navlinkStyle"}>
                  <div
                    className="nameAndIcon"
                    style={{ backgroundColor: "#408C7B" }}
                  >
                    <span>Register</span>
                    <MdAssignmentInd
                      style={{ fontSize: "30px", color: "white" }}
                    />
                  </div>
                </NavLink>
              </div>
            ) : (
              <div id="userNameHolder">
                <NavLink
                  to={"/account/login"}
                  id="thisSpecialDevForThing"
                  className={"navlinkStyle"}
                  onClick={() => {
                    localStorage.setItem("currentUser", "Guest");
                  }}
                >
                  <div
                    className="nameAndIcon"
                    style={{ backgroundColor: "#408C7B" }}
                  >
                    <span>Log Out</span>
                    <CiLogout style={{ fontSize: "20px", color: "white" }} />
                  </div>
                </NavLink>

                <span id="specialSpan">
                  Welcome,&nbsp;&nbsp;&nbsp;
                  <span style={{ fontWeight: "bold" }}>{userName}</span>&nbsp;
                  <PiHandPalm style={{ fontSize: "22px", color: "#408C7B" }} />
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      <div id="userStateAfterHeader">
        {userName === "Guest" ? (
          <div title="sp-IconHolder" id="iconHolder">
            <NavLink to={"/account/login"} className={"navlinkStyle"}>
              <div
                className="nameAndIcon"
                style={{ backgroundColor: "#B2DDD0" }}
              >
                <span>Login</span>
                <MdLogin style={{ fontSize: "30px", color: "white" }} />
              </div>
            </NavLink>
            <NavLink to={"/account/"} className={"navlinkStyle"}>
              <div
                className="nameAndIcon"
                style={{ backgroundColor: "#408C7B" }}
              >
                <span>Register</span>
                <MdAssignmentInd style={{ fontSize: "30px", color: "white" }} />
              </div>
            </NavLink>
          </div>
        ) : (
          <div id="userNameHolder">
            <span id="specialSpan">
              Welcome,&nbsp;&nbsp;&nbsp;
              <span style={{ fontWeight: "bold" }}>{userName}</span>&nbsp;
              <PiHandPalm style={{ fontSize: "22px", color: "#408C7B" }} />
            </span>
            <NavLink id="spLoginHandling" to={"/account/login"}>
              Logout
            </NavLink>
          </div>
        )}
      </div>
    </>
  );
}
