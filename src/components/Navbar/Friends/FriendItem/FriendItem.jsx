import s from './FriendItem.module.css'

function FriendItem(props) {
  return (
    <div className={s.friend}>
      <img className={s.avatar} src={props.avatar} alt=""/>
      <div>{props.name}</div>
    </div>
  );
}

export default FriendItem;
