import styles from "./NotificationTab.module.css";

export default function NotificationTab({
  displayPicture,
  time,
  name,
  action,
}) {
  return (
    <>
      <div className={styles["tabContainer"]}>
        <img className={styles.img} src={displayPicture}></img>
        <div>
          <span className={styles["name"]}>{name}</span> {action}
          <div>{time}</div>
        </div>
      </div>
    </>
  );
}
