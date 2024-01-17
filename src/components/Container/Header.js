import styles from "./Header.module.css";

export default function Header({
  notificationCount,
  leftHeading = "Notifications",
  rightHeading = "Mark all as Read",
}) {
  return (
    <>
      <div className={styles["header"]}>
        <div className={styles["left_header"]}>
          {leftHeading}{" "}
          <span className={styles["notifs_count"]}>{notificationCount}</span>
        </div>
        <div className={styles["right_header"]}>
          {(rightHeading = "Mark all as Read")}
        </div>
      </div>
    </>
  );
}
