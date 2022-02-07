import React from "react";
import { createUseStyles } from "react-jss";
import logo from "../assets/logo.png";

const useStyle = createUseStyles({
  logo: {
    top: "15px",
    marginLeft: "15px",
    width: "250px",
    height: "130px",
  },
});

function MainLogo() {
  const style = useStyle();
  return (
    <img
      sizes="40 40"
      className={style.logo}
      src={logo}
      alt={"tmate logo"}
    ></img>
  );
}

export default MainLogo;
