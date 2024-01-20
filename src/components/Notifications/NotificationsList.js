import NotificationTab from "./NotificationTab";

/* Image imports */
import markPFP from "../../assets/images/avatar-mark-webber.webp";
import angelaPFP from "../../assets/images/avatar-angela-gray.webp";
import jacobPFP from "../../assets/images/avatar-jacob-thompson.webp";
import rizkyPFP from "../../assets/images/avatar-rizky-hasanuddin.webp";
import kimberleyPFP from "../../assets/images/avatar-kimberly-smith.webp";
import nathanPFP from "../../assets/images/avatar-nathan-peterson.webp";
import annaPFP from "../../assets/images/avatar-anna-kim.webp";

export default function NotificationsList() {
  return (
    <>
      <NotificationTab
        unread
        displayPicture={markPFP}
        name="Mark Webber"
        action="reacted to your recent post"
        post="My first
        tournament today!"
        time="1m ago"
      />

      <NotificationTab
        unread
        displayPicture={angelaPFP}
        name="Angela Gray"
        action="followed you"
        time="5m ago"
      />

      <NotificationTab
        unread
        displayPicture={jacobPFP}
        name="Jacob Thompson"
        action="has joined your group Chess Club"
        time="1 day ago"
      />

      <NotificationTab
        displayPicture={rizkyPFP}
        name="Rizky Hasanuddin"
        action="sent you a private message"
        time="5 days ago"
        message="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                I'm already having lots of fun and improving my game"
      />

      <NotificationTab
        displayPicture={kimberleyPFP}
        name="Kimberly Smith"
        action="commented on your picture"
        time="1 week ago"
      />

      <NotificationTab
        displayPicture={nathanPFP}
        name="Nathan Peterson"
        action="reacted to your recent post 5 end-game strategies to increase your win rate"
        time="2 weeks ago"
      />

      <NotificationTab
        displayPicture={annaPFP}
        name="Anna Kim"
        action="left the group Chess Club"
        time="2 weeks ago"
      />
    </>
  );
}
