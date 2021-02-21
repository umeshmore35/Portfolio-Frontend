import styles from "./Footer.module.css";
import {
  Facebook,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@material-ui/icons";

const Footer = (props) => {
  return (
    <div className={styles["container"]}>
      <div className={styles["logo"]}>
        <a href="https://www.facebook.com/umesh.moreum">
          {" "}
          <Facebook className={styles["lo"]} />
        </a>
        <a href="https://www.linkedin.com/in/umesh-more-905957188/">
          <LinkedIn className={styles["lo"]} />
        </a>
        <a href="https://github.com/umeshmore45">
          <GitHub className={styles["lo"]} />
        </a>
        <a href="https://twitter.com/Iamdvirus45">
          <Twitter className={styles["lo"]} />
        </a>
      </div>
      <p className={styles["copy"]}>
        Copyright © 2021 Umesh More. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
