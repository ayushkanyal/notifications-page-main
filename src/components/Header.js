import style from "./Header.module.css";

function Header() {
  return (
    <>
      <div className={style.header}>
        <div className={style.notifs}>
          Notifications <span className={style.count}>3</span>
        </div>
        <div className={style.btn}>Mark all as read</div>
      </div>
    </>
  );
}

export default Header;
