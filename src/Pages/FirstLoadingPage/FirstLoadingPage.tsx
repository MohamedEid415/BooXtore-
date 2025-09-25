import { useEffect } from "react";
import "./FirstLoadingPage.css";
import { useNavigate } from "react-router-dom";
export default function FirstLoadingPage() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/booxtore");
    }, 5000);
  });
  return (
    <div id="firstPageStyle">
      <span style={{ top: "1%" }}>الْحَمْدُلِلَّهِ رَبِّ الْعَالَمِينَ</span>
      <span style={{ top: "6%" }}>
        بِسْــمِ اللَّهِ الرَّحْمَـنِ الرَّحِيــمِ
      </span>
      <img
        src="https://booxtore.net/static/media/logoBooxtore.76f97d147d00a1c42dfb4f372782a937.svg"
        alt="Logo"
      />
    </div>
  );
}
