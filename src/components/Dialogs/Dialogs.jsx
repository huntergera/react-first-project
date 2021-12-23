import s from "../Dialogs/Dialogs.module.css";
import {NavLink} from "react-router-dom";

function DialogItem(props) {
  let path = "/dialogs/" + props.id

  return (
    <div className={`${s.dialog} ${s.active}`}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  )
}

function Message(props) {
  return (
    <div className={s.message}>{props.message}</div>
  )
}

function Dialogs() {

  let dialogsData = [
    {id: 1, name: 'Petya'},
    {id: 2, name: 'Jorik'},
    {id: 3, name: 'Gritsyk'},
    {id: 4, name: 'Jujik'},
    {id: 5, name: 'Volodya'},
  ]

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are your things?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ]

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message="How are your things?"/>
        <Message message="Yo"/>
      </div>
    </div>
  );
}

export default Dialogs;