import style from "./NotificationContainer.module.css";

function NotificationContainer({children}) {
  return (
    <>
      <div className={style.header}>
        <div className={style.notifs}>
          Notifications <span className={style.count}>3</span>
        </div>
        <div className={style.btn}>Mark all as read</div>
      </div>
      {children}
    </>
  );
}

export default NotificationContainer;
