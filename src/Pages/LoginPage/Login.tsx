import { useState } from "react";
import Input from "../../Components/Input/Input";
import "./Login.css";
import { useNavigate } from "react-router-dom";

type stateSetting = {
  email: string;
  password: string;
  Msg: string;
};

export default function Register() {
  const [EnterData, setEnterData] = useState<stateSetting>({
    email: "",
    password: "",
    Msg: "",
  });
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterData((prev) => ({ ...prev, email: e.target.value }));
  };
  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnterData((prev) => ({ ...prev, password: e.target.value }));
  };
  const navigate = useNavigate();
  return (
    <div id="RegisterLayout">
      <div id="ImgHolder">
        <img
          src="https://booxtore.net/static/media/bookCollectionHeroImg.f659d119a8bf46d65353.png"
          alt="Image"
        />
      </div>
      <form
        id="formLayout"
        onSubmit={(e) => {
          e.preventDefault();
          // navigate("")
          // console.log(EnterData);
          const enteredEmail = localStorage.getItem(EnterData.email);
          if (enteredEmail) {
            const dataRelated = JSON.parse(enteredEmail);
            if (dataRelated.password !== EnterData.password) {
              setEnterData((prev) => ({
                ...prev,
                Msg: "The Email or Password is not correct",
              }));
            } else if (dataRelated.password === EnterData.password) {
              localStorage.setItem("currentUser", dataRelated.fullName);
              navigate("/booxtore");
            }
          }
        }}
      >
        <span id="formHeading">
          Lets <span style={{ color: "#408C7B" }}>Login</span>
        </span>
        <span
          style={{
            color: "gray",
            fontFamily: "cursive",
            alignSelf: "flex-start",
          }}
        >
          Log in to your account by entering the email and password you
          registered with before.
        </span>
        <div id="inputsHolder">
          <Input
            idName="email"
            type="email"
            inputName="Email"
            value={EnterData.email}
            handleFunction={handleEmail}
          />
          <Input
            idName="passWord"
            type="password"
            inputName="Password"
            value={EnterData.password}
            handleFunction={handlePassword}
          />
          <p id="warningMsg">{EnterData.Msg}</p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
