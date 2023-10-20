import classes from "./App.module.css";
import MainHeader from "./MainHeader";
import SearchBar from "./SearchBar";
import Result from "./Result";
import { useState, useEffect } from "react";
import UserData from "../Data/UserData";
function App() {
  const [searchUser, setSearchUser] = useState("");
  const [userData, setUserData] = useState(new UserData());
  const [error, setError] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  function handleSetSearchUser(value: string): void {
    setSearchUser(value);
  }
  useEffect(() => {
    if (searchUser === "") {
      return;
    }
    async function onSearch() {
      try {
        await fetch(`https://api.github.com/users/${searchUser}`)
          .then((successResponse) => {
            if (successResponse.status != 200) {
              throw new Error("User not found");
            }
            setError(false);
            setLoadingData(true);
            return successResponse.json();
          })
          .then((data) => {
            const userDataTemp = new UserData().fromJSON(data);
            setUserData(userDataTemp);
            setLoadingData(false);
          });
      } catch (e) {
        setError(true);
        setLoadingData(true);
      }
    }
    onSearch();
  }, [searchUser]);

  return (
    <>
      <div className={classes.holder}>
        <MainHeader></MainHeader>
        <SearchBar
          onSearchUser={handleSetSearchUser}
          hasError={error}
        ></SearchBar>
        <Result userData={userData} loadingData={loadingData}></Result>
      </div>
    </>
  );
}

export default App;
