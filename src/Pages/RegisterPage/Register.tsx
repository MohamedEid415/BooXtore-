import { useEffect, useState } from "react";
import Input from "../../Components/Input/Input";
import "./Register.css";
import { useNavigate } from "react-router-dom";

type stateSetting = {
  fullName: string;
  email: string;
  phoneNumber: number | string;
  password: string;
  passwordConform: string;
  Msg: string;
};

export default function Register() {
  const [EnterData, setEnterData] = useState<stateSetting>({
    fullName: "",
    email: "",
    phoneNumber: "",
    password: "",
    passwordConform: "",
    Msg: "",
  });
  const handleFullName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterData((prev) => ({ ...prev, fullName: e.target.value }));
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterData((prev) => ({ ...prev, email: e.target.value }));
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterData((prev) => ({ ...prev, password: e.target.value }));
  };
  const handlePasswordConfirm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterData((prev) => ({ ...prev, passwordConform: e.target.value }));
  };
  const handlePhoneNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterData((prev) => ({ ...prev, phoneNumber: e.target.value }));
  };
  useEffect(() => {
    if (EnterData.passwordConform !== EnterData.password) {
      setEnterData((prev) => ({
        ...prev,
        Msg: "Confirm password does not match password.",
      }));
    } else if (EnterData.passwordConform === EnterData.password) {
      setEnterData((prev) => ({ ...prev, Msg: "" }));
    }
  }, [EnterData.passwordConform]);
  const navigate = useNavigate();
  return (
    <div id="RegisterLayout">
      <form
        id="formLayout"
        onSubmit={(e) => {
          e.preventDefault();
          if (
            (EnterData.Msg === "" ||
              EnterData.Msg === "Please fill all fields") &&
            EnterData.fullName !== "" &&
            EnterData.password !== "" &&
            EnterData.email !== "" &&
            EnterData.phoneNumber !== ""
          ) {
            localStorage.setItem(EnterData.email, JSON.stringify(EnterData));
            localStorage.setItem("currentUser", EnterData.fullName);
            navigate("/booxtore");
          } else {
            setEnterData((prev) => ({
              ...prev,
              Msg: "Please fill all fields",
            }));
          }
          // console.log(EnterData);
        }}
      >
        <span id="formHeading">
          Create <span style={{ color: "#408C7B" }}>Account Now</span>
        </span>
        <span
          style={{
            color: "gray",
            fontFamily: "cursive",
            alignSelf: "flex-start",
          }}
        >
          Enter your data correctly to get the best experience on the site
        </span>
        <div id="inputsHolder">
          <Input
            idName="fullName"
            type="text"
            inputName="Full Name"
            value={EnterData.fullName}
            handleFunction={handleFullName}
          />
          <Input
            idName="email"
            type="email"
            inputName="Email"
            value={EnterData.email}
            handleFunction={handleEmail}
          />
          <Input
            idName="phoneNumber"
            type="number"
            inputName="Phone Number"
            value={EnterData.phoneNumber}
            handleFunction={handlePhoneNumber}
          />
          <Input
            idName="passWord"
            type="password"
            inputName="Password"
            value={EnterData.password}
            handleFunction={handlePassword}
          />
          <Input
            idName="passWordConfirm"
            type="password"
            inputName="Confirm Password"
            value={EnterData.passwordConform}
            handleFunction={handlePasswordConfirm}
          />
          <p id="warningMsg">{EnterData.Msg}</p>
        </div>
        <button type="submit">Create Account!</button>
      </form>
      <div id="ImgHolder">
        <img
          src="https://booxtore.net/static/media/bookCollectionHeroImg.f659d119a8bf46d65353.png"
          alt="Image"
        />
      </div>
    </div>
  );
}
