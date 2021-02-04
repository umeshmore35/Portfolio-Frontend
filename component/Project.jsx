import styles from "../styles/Project.module.css";

function Project(props) {
  return (
    <div>
      <div className={styles["container"]}>
        <div className={styles["img-container"]}>
          <img
            src="https://res.cloudinary.com/djfphnek9/image/upload/c_scale,h_723/v1612424438/Screenshot_from_2021-02-04_13-08-56_hnr0lv.png"
            alt="project1"
            className={styles["img"]}
          />
        </div>
        <div className={styles["content-container"]}>
          <h1>SignUp/LogIn Page Using React</h1>
          <a href="https://github.com/umeshmore45/React-LogIn" target="_blank">
            GitHub Repository
          </a>
          <br />
          <br />
          <a href="https://react-log-in.vercel.app/" target="_blank">
            Demo Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
