import s from './Friends.module.css'
import FriendItem from "./FriendItem/FriendItem";

function Friends(props) {
  let friendsElements =
    props.friends.map(friend => <li key={friend.id}><FriendItem name={friend.name} id={friend.id} avatar={friend.avatar}/></li>);

  return (
    <div>
      <h2>Friends</h2>
      <ul className={s.friendsList}>
          {friendsElements}
      </ul>
    </div>
  );
}

export default Friends;
