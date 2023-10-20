import classes from "./Result.module.css";
import UserData from "../Data/UserData";
import GridLoader from "react-spinners/GridLoader";
import { CSSProperties } from "react";
function Result({
  userData,
  loadingData,
}: {
  userData: UserData;
  loadingData: boolean;
}) {
  function formatDate(input: string): string {
    const date = new Date(input);
    const options = {
      day: "numeric" as const,
      month: "long" as const,
      year: "numeric" as const,
    };
    return "Joined " + date.toLocaleDateString("en-US", options);
  }
  const override: CSSProperties = {
    alignSelf: "center",
    justifySelf: "center",
    transform: "translateX(18rem)",
  };
  return (
    <div key={Math.random()} className={classes.holder}>
      {!loadingData ? (
        <>
          <div
            className={classes.avatar}
            style={{
              backgroundImage: `url(${userData.avatar})`,
              width: "7.3125rem",
              height: "7.3125rem",
            }}
          ></div>
          <div className={classes.bio}>
            <div className={classes.info}>
              <div
                className={classes.avatarMobile}
                style={{
                  backgroundImage: `url(${userData.avatar})`,
                  width: "7.3125rem",
                  height: "7.3125rem",
                }}
              ></div>
              <div className={classes.userInfoMobile}>
                <div className={classes.userInfo}>
                  <p className={classes.name}>
                    {userData.name ? userData.name : userData.username}
                  </p>
                  <a
                    href={`https://github.com/${userData.username}`}
                    className={classes.username}
                  >
                    {"@" + userData.username}
                  </a>
                </div>
                <p className={classes.joinDate}>
                  {formatDate(userData.joinDate)}
                </p>
              </div>
            </div>
            <p className={classes.bioText}>{userData.bioText}</p>
            <div className={classes.statsHolder}>
              <div className={classes.stat}>
                <p className={classes.statText}>Repos</p>
                <p className={classes.statNumber}>{userData.repos}</p>
              </div>
              <div className={classes.stat}>
                <p className={classes.statText}>Followers</p>
                <p className={classes.statNumber}>{userData.followers}</p>
              </div>
              <div className={classes.stat}>
                <p className={classes.statText}>Following</p>
                <p className={classes.statNumber}>{userData.following}</p>
              </div>
            </div>
            <div className={classes.extraInfo}>
              <div className={classes.extraHolder}>
                <div className={classes.locationIcon}></div>
                <p
                  className={`${classes.extraText} ${
                    userData.location == "Not Available"
                      ? classes.unavailable
                      : null
                  }`}
                >
                  {userData.location}
                </p>
              </div>
              <div className={classes.extraHolder}>
                <div className={classes.twitterIcon}></div>
                <p
                  className={`${classes.extraText} ${
                    userData.twitter == "Not Available"
                      ? classes.unavailable
                      : null
                  }`}
                >
                  {userData.twitter}
                </p>
              </div>
              <div className={classes.extraHolder}>
                <div className={classes.websiteIcon}></div>
                <a
                  className={`${classes.extraText} ${
                    userData.website == "Not Available"
                      ? classes.unavailable
                      : null
                  }`}
                  href={userData.website}
                >
                  {userData.website}
                </a>
              </div>
              <div className={classes.extraHolder}>
                <div className={classes.companyIcon}></div>
                <p
                  className={`${classes.extraText} ${
                    userData.company == "Not Available"
                      ? classes.unavailable
                      : null
                  }`}
                >
                  {userData.company}
                </p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <GridLoader
          size={50}
          color="#0079FF"
          cssOverride={override}
          className={classes.loader}
        />
      )}
    </div>
  );
}
export default Result;
