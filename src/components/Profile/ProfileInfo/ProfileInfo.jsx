import s from './ProfileInfo.module.css'

function ProfileInfo() {
  return (
    <div>
      <div>
        <img src="https://html5css.ru/css/img_lights.jpg" alt=""/>
      </div>
      <div className={s.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );
}

export default ProfileInfo;
