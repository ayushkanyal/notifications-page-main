import NotificationsContainer from "./components/NotificationsContainer";
import "./App.css";

function App() {
  return (
    <div>
      <NotificationsContainer>
        <div>
          <div>
            <span>Mark Webber</span> reacted to your recent post My first
            tournament today!
            <div>1m ago</div>
          </div>
          <div>
            <span>Angela Gray </span>followed you
            <span>5m ago</span>
          </div>
          <div>
            <span>Jacob Thompson</span> has joined your group Chess Club 1 day
            ago
          </div>
          <div>
            <span>Rizky Hasanuddin</span>
            sent you a private message
            <div>5 days ago</div>
            <div>
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </div>
          </div>
          <div>
            <span>Kimberly Smith</span> commented on your picture
            <div>1 week ago</div>
          </div>
          <div>
            <span>Nathan Peterson</span>
            reacted to your recent post 5 end-game strategies to increase your
            win rate
            <div>2 weeks ago</div>
          </div>
          <div>
            <span> Anna Kim</span>
            left the group Chess Club
            <div>2 weeks ago</div>
          </div>
        </div>
      </NotificationsContainer>
    </div>
  );
}

export default App;
