import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/HeaderGuest";
import Footer from "../../Components/Footer/Footer";
import { useEffect } from "react";

export default function EntryLayout() {
  useEffect(() => {
    localStorage.setItem("currentUser", "Guest");
  });
  return (
    <div style={{ width: "100%", padding: "0px" }} className="container-fluid">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
