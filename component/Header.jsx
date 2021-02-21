import styles from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["img-container"]}>
        <img
          src="https://raw.githubusercontent.com/umeshmore45/Timer-Application/master/img/logo.png"
          alt="more"
          className={styles["img"]}
        />
      </div>
      <div className={styles["nav-container"]}>
        <ul>
          <li className={styles["li"]}>Home</li>
          <li className={styles["li"]}>Contact Me</li>
          <li className={styles["li"]}>Projects</li>
          <li className={styles["li"]}>About Me</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
