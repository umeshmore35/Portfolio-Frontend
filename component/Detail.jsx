import styles from "../styles/Details.module.css";

function Details(props) {
  console.log(props);
  let { name, email, phoneNo, imageUrl, address, aboutMe } = props;
  return (
    <div className={styles["container"]}>
      <div className={styles["img-container"]}>
        <img src={imageUrl} alt="profile" className={styles["img"]} />
      </div>
      <div className={styles["content-container"]}>
        <h1>{name}</h1>
        <p>{aboutMe}</p>
        <h3>{email}</h3>
        <h3>{phoneNo}</h3>
        <h3>{address}</h3>
      </div>
    </div>
  );
}

export default Details;
