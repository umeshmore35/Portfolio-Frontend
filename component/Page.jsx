import styles from "./Page.module.css";

const Page = () => {
  return (
    <div className={styles["container"]}>
      <div>
        <h5 className={styles["h6"]}>HEY ! I AM </h5>
        <h1 className={styles["h1"]}>UMESH MORE</h1>
        <h1 className={styles["h2"]}>UMESH MORE</h1>
        <h4 className={styles["h5"]}>I'm a Full Stack Developer</h4>
      </div>

      <div className={styles["img-container"]}>
        <img
          className={styles["img"]}
          src="https://res.cloudinary.com/djfphnek9/image/upload/v1614015644/javascript_zodreb.png"
          alt="javaScript"
        />
        <img
          className={styles["img"]}
          src="https://res.cloudinary.com/djfphnek9/image/upload/v1614015644/React_lnifaw.png"
          alt="React"
        />
        <img
          className={styles["img"]}
          src="https://res.cloudinary.com/djfphnek9/image/upload/v1614015644/nextjs_vn5o1q.png"
          alt="nextJs"
        />
        <img
          className={styles["img"]}
          src="https://res.cloudinary.com/djfphnek9/image/upload/v1614015643/nodejs_o5s1qh.png"
          alt="nodeJs"
        />

        <img
          className={styles["img"]}
          src="https://res.cloudinary.com/djfphnek9/image/upload/v1614015644/Redux_obvcfb.png"
          alt="Redux"
        />
        <img
          className={styles["img"]}
          src="https://res.cloudinary.com/djfphnek9/image/upload/v1614015644/mangodb_vn6akz.png"
          alt="mongodb"
        />
      </div>
    </div>
  );
};

export default Page;
