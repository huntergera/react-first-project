import s from "../Dialogs/Dialogs.module.css";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

function Dialogs() {

  let dialogs = [
    {id: 1, name: 'Petya'},
    {id: 2, name: 'Jorik'},
    {id: 3, name: 'Gritsyk'},
    {id: 4, name: 'Jujik'},
    {id: 5, name: 'Volodya'},
  ]

  let messages = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are your things?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'Yo'},
    {id: 5, message: 'Yo'},
  ]

  let dialogsElements = dialogs
      .map(dialog => <DialogItem name={dialog.name} id={dialog.id} />)

  let messagesElements = messages.map(message => <Message message={message.message}/>);

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
}

export default Dialogs;