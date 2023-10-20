import classes from "./MainHeader.module.css";
import { useState, useEffect } from "react";
function MainHeader() {
  const [currentTheme, setCurrentTheme] = useState("");

  function changeTheme() {
    let currentThemeIcon = document.querySelector(`.${classes.themeIcon}`);
    if (currentTheme === "DARK") {
      document.body.classList.toggle(classes.light);
      let currentThemeText = document.querySelector(`.${classes.currentTheme}`);
      if (currentThemeText) {
        currentThemeText.innerHTML = "DARK";
      }
      if (currentThemeIcon) {
        currentThemeIcon.classList.toggle(classes.themeIconLight);
      }
      setCurrentTheme("LIGHT");
    } else {
      document.body.classList.toggle(classes.light);
      let currentThemeText = document.querySelector(`.${classes.currentTheme}`);
      if (currentThemeText) {
        currentThemeText.innerHTML = "LIGHT";
      }
      if (currentThemeIcon) {
        currentThemeIcon.classList.toggle(classes.themeIconLight);
      }
      setCurrentTheme("DARK");
    }
  }

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches &&
      currentTheme === ""
    ) {
      setCurrentTheme("DARK");
      let currentThemeText = document.querySelector(`.${classes.currentTheme}`);
      if (currentThemeText) {
        currentThemeText.innerHTML = "LIGHT";
      }
    } else {
      setCurrentTheme("LIGHT");
      let currentThemeText = document.querySelector(`.${classes.currentTheme}`);
      if (currentThemeText) {
        currentThemeText.innerHTML = "DARK";
      }
      document.body.classList.toggle(classes.light);
    }
  }, []);

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
