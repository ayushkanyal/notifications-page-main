import styles from "./Container.module.css";
/* Component imports */
import NotificationTab from "../NotificationTab";
import Header from "./Header";
/* Image imports */
import markPFP from "../../assets/images/avatar-mark-webber.webp";
import angelaPFP from "../../assets/images/avatar-angela-gray.webp";
import jacobPFP from "../../assets/images/avatar-jacob-thompson.webp";
import rizkyPFP from "../../assets/images/avatar-rizky-hasanuddin.webp";

export default function Container({children}) {
  return <>
    <div className={styles["container"]}>

      <Header notificationCount={3} />  
      
      <NotificationTab unread displayPicture={markPFP} name="Mark Webber" action="reacted to your recent post My first
          tournament today!" time="1m ago" />

      <NotificationTab unread displayPicture={angelaPFP} name="Angela Gray" action="followed you." time="5 m ago" />
      
      <NotificationTab unread displayPicture={jacobPFP} name="Jacob Thompson" action="has joined your group Chess Club." time="1 day ago" />
      
      <NotificationTab read displayPicture={rizkyPFP} name="Rizky Hasanuddin" action="sent you a private message." time="5 days ago" attachedMessage="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game." />

        Rizky Hasanuddin sent you a private message
        5 days ago
        Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game.

        Kimberly Smith commented on your picture
        1 week ago

        Nathan Peterson reacted to your recent post 5 end-game strategies to increase your win rate
        2 weeks ago

        Anna Kim left the group Chess Club
        2 weeks ago
    </div>
  </>;
}
