import s from './Post.module.css'

function Post() {
  return (
    <div className={s.item}>
      <img src="https://static.1tv.ru/uploads/photo/image/2/huge/4062_huge_876c41f50e.jpg" alt=""/>
      Post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;
