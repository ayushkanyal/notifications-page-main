import styles from "./NotificationTab.module.css";

export default function NotificationTab({
  displayPicture,
  time,
  name,
  action,
  group,
  unread,
  message,
  post,
  picturePost
}) {
  return (
    <>
      <div className={`${styles["tabContainer"]} ${unread ? styles["new"] : ""}`}>
        <img className={styles['displayPicture']} src={displayPicture}></img>
        <div>
          <span className={styles["name"]}>{name}</span> {action} <span className={styles["group"]}>{group}</span> <span className={styles["post"]}>{post}</span>
          {(unread) ? <span className={styles['dot']}></span> : ""}
          <div className={styles["time"]}>{time}</div>
          {message ? <div className={styles["message"]}>{message}</div> : ""}
          {picturePost ? <div className={styles["picturePost"]}>{picturePost}</div> : ""}
        </div>
      </div>
    </>
  );
}
