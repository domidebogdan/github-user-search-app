import classes from "./MainHeader.module.css";
import { useState, useEffect } from "react";
function MainHeader() {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      currentTheme === ""
    ) {
      setCurrentTheme("DARK");
      document.querySelector(`.${classes.currentTheme}`).innerHTML = "LIGHT";
    } else {
      setCurrentTheme("LIGHT");
      document.querySelector(`.${classes.currentTheme}`).innerHTML = "DARK";
      document.body.classList.toggle(classes.light);
    }
  }, []);

  function changeTheme() {
    let currentThemeIcon = document.querySelector(`.${classes.themeIcon}`);
    if (currentTheme === "DARK") {
      document.body.classList.toggle(classes.light);
      document.querySelector(`.${classes.currentTheme}`).innerHTML = "DARK";
      currentThemeIcon?.classList.toggle(classes.themeIconLight);

      setCurrentTheme("LIGHT");
    } else {
      document.body.classList.toggle(classes.light);
      document.querySelector(`.${classes.currentTheme}`).innerHTML = "LIGHT";
      currentThemeIcon?.classList.toggle(classes.themeIconLight);

      setCurrentTheme("DARK");
    }
  }
  return (
    <>
      <div className={classes.holder}>
        <p className={classes.logo}>devfinder</p>
        <div className={classes.themeSwitcher} onClick={changeTheme}>
          <p className={classes.currentTheme}></p>
          <div className={classes.themeIcon}></div>
        </div>
      </div>
    </>
  );
}

export default MainHeader;
