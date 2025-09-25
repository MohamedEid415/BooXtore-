import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div id="footer">
      <img
        src="https://booxtore.net/static/media/logoBooxtore.76f97d147d00a1c42dfb4f372782a937.svg"
        alt="logo"
      />
      <span>#Your books. #Your home. #Your comfort.</span>
      <ul>
        <li>
          <a href="#">
            <FaSquareTwitter style={{ color: "#64D0EA" }} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaLinkedin style={{ color: "#0A66C2" }} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaFacebookSquare style={{ color: "#3B5999" }} />
          </a>
        </li>
        <li>
          <a href="#">
            <FaWhatsappSquare style={{ color: "#00EB78" }} />
          </a>
        </li>
      </ul>
    </div>
  );
}
