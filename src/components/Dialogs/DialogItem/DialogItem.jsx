import s from "../../Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

function DialogItem(props) {
  let path = "/dialogs/" + props.id

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

export default DialogItem;