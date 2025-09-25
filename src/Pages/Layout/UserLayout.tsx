import { Outlet } from "react-router-dom";
import Header from "../../Components/Header/HeaderUser";
import Footer from "../../Components/Footer/Footer";

export default function UserLayout() {
  return (
    <div
      style={{ width: "100%", padding: "0px", margin: "0px" }}
      className="container-fluid"
    >
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
