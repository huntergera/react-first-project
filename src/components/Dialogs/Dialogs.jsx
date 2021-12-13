import s from "../Dialogs/Dialogs.module.css";

function Dialogs() {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <div className={`${s.dialog} ${s.active}`}>Petya</div>
        <div className={s.dialog}>Jorik</div>
        <div className={s.dialog}>Gritsyk</div>
        <div className={s.dialog}>Jujik</div>
        <div className={s.dialog}>Volodya</div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How are your things?</div>
        <div className={s.message}>Yo</div>
      </div>
    </div>
  );
}

export default Dialogs;