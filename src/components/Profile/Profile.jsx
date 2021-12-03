import s from './Profile.module.css'

function Profile() {
  return (
    <div className={s.content}>
      <div>
        <img src="https://html5css.ru/css/img_lights.jpg" alt=""/>
      </div>
      <div>
        ava + desc
      </div>
      <div>
        My posts
        <div>
          New post
        </div>
        <div className={s.posts}>
          <div className={s.item}>Post 1</div>
          <div className={s.item}>Post 2</div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
