import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
  let postsElements =
    props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount}/>)

  let newPostElement = React.createRef()

  let addPost = () => {
    debugger;
    let text = newPostElement.current.value;
    props.addPost(text);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement} cols="30" rows="10"></textarea>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
}

export default MyPosts;
