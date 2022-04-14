import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

function MyPosts(props) {
  let postsElements =
    props.posts.map(posts => <Post message={posts.message} likesCount={posts.likesCount}/>)

  let newPostElement = React.createRef()

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text)
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            cols="30" rows="10"
            value={props.newPostText}/>
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
