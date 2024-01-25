import styles from "./NotificationTab.module.css";

export default function NotificationTab({
  displayPicture,
  time,
  name,
  action,
  unread,
  group,
  post,
  message,
  picturePost,
}) {

  return (
    <>
      <div
        className={`${styles["tabContainer"]} ${unread ? styles["new"] : ""}`}
      >
        <img
          className={styles["displayPicture"]}
          src={displayPicture}
          alt={name}
        ></img>
        <div className={styles["textContent"]}>
          <span className={styles["name"]}>{name}</span> {action}
          <span className={styles["group"]}>{group}</span>
          <span className={styles["post"]}>{post}</span>
          {unread ? <span className={styles["dot"]}></span> : null}
          <div className={styles["time"]}>{time}</div>
          {message ? <div className={styles["message"]}>{message}</div> : ""}
        </div>
        {picturePost ? (
          <img
            className={styles["picturePost"]}
            src={picturePost}
            alt="User post"
          ></img>
        ) : null}
      </div>
    </>
  );
}
