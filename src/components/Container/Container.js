import styles from "./Container.module.css";
/* Component imports */
import Header from "./Header";
import NotificationsList from "../Notifications/NotificationsList";

export default function Container({children}) {
  return <>
    <div className={styles["container"]}>

      <Header notificationCount={3} />  
      <NotificationsList />
      
    </div>
  </>;
}
