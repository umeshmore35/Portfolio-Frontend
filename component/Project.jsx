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
      <div className={styles["container"]}>
        <div className={styles["img-container"]}>
          <img
            src="https://res.cloudinary.com/djfphnek9/image/upload/v1612428842/Screenshot_from_2021-02-04_14-23-27_fg7yjb.png"
            alt="project2"
            className={styles["img"]}
          />
        </div>
        <div className={styles["content-container"]}>
          <h1> Company Web SSR Using Next.js</h1>
          <a
            href="https://github.com/umeshmore45/React-Nextjs-Task3"
            target="_blank"
          >
            GitHub Repository
          </a>
          <br />
          <br />
          <a
            href="https://react-nextjs-task3-git-master.umeshmore45.vercel.app/"
            target="_blank"
          >
            Demo Link
          </a>
        </div>
      </div>

      <div className={styles["container"]}>
        <div className={styles["img-container"]}>
          <img
            src="https://res.cloudinary.com/djfphnek9/image/upload/v1613898328/Screenshot_from_2021-02-04_15-34-20_pt4iln.png"
            alt="project2"
            className={styles["img"]}
          />
        </div>
        <div className={styles["content-container"]}>
          <h1> Blog Rendering Using React</h1>
          <a
            href="https://github.com/umeshmore45/React-blog-task2"
            target="_blank"
          >
            GitHub Repository
          </a>
          <br />
          <br />
          <a href="https://react-blog-task2.vercel.app/" target="_blank">
            Demo Link
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
