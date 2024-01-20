import styles from "./NotificationTab.module.css";

export default function NotificationTab({
  displayPicture,
  time,
  name,
  action,
  unread,
  message,
  post
}) {
  return (
    <>
      <div className={`${styles["tabContainer"]} ${unread ? styles["new"] : ""}`}>
        <img className={styles['displayPicture']} src={displayPicture}></img>
        <div>
          <span className={styles["name"]}>{name}</span> {action} <span className={styles["post"]}>{post}</span>
          {(unread) ? <span className={styles['dot']}></span> : ""}
          <div className={styles["time"]}>{time}</div>
          {message ? <div className={styles["message"]}>{message}</div> : ""}
        </div>
      </div>
    </>
  );
}
