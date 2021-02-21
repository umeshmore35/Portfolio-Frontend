import styles from "./Page.module.css";

const Page = () => {
  return (
    <div className={styles["container"]}>
      <div>
        <h5 className={styles["h6"]}>HEY ! I AM </h5>
        <h1 className={styles["h1"]}>UMESH MORE</h1>
        <h4 className={styles["h5"]}>I'm a Full Stack Developer</h4>
      </div>

      <div className={styles["img-container"]}>
        <img
          className={styles["img"]}
          src="https://cdn.icon-icons.com/icons2/1377/PNG/512/applicationxjavascript_92737.png"
          alt="javaScript"
        />
        <img
          className={styles["img"]}
          src="https://cdn.icon-icons.com/icons2/2248/PNG/512/react_icon_135264.png"
          alt="React"
        />
        <img
          className={styles["img"]}
          src="https://cdn.icon-icons.com/icons2/2148/PNG/512/nextjs_icon_132160.png"
          alt="nextJs"
        />
        <img
          className={styles["img"]}
          src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_node_icon_157859.png"
          alt="nodeJs"
        />

        <img
          className={styles["img"]}
          src="https://cdn.icon-icons.com/icons2/2415/PNG/512/redux_original_logo_icon_146365.png"
          alt="Redux"
        />
        <img
          className={styles["img"]}
          src="https://cdn.icon-icons.com/icons2/2667/PNG/512/folder_mongodb_icon_161288.png"
          alt="mongodb"
        />
      </div>
    </div>
  );
};

export default Page;
