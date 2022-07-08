let store = {
  _state: {
    profilePage: {
      posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'It\'s my first post', likesCount: 11},
        {id: 4, message: 'It\'s my first post', likesCount: 11},
      ],
      newPostText: 'it'
    },
    dialogsPage: {
      messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are your things?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'},
      ],
      dialogs: [
        {id: 1, name: 'Petya', avatar: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'},
        {id: 2, name: 'Jorik', avatar: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'},
        {id: 3, name: 'Gritsyk', avatar: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg'},
        {id: 4, name: 'Jujik', avatar: 'https://cdn.pixabay.com/photo/2017/11/09/21/41/cat-2934720_1280.jpg'},
        {id: 5, name: 'Volodya', avatar: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg'},
      ],
    },
    sidebar: {
      friends: [
        {id: 1, name: 'Petya', avatar: 'https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg'},
        {id: 2, name: 'Jorik', avatar: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'},
        {id: 3, name: 'Gritsyk', avatar: 'https://cdn.pixabay.com/photo/2015/11/16/14/43/cat-1045782_1280.jpg'}
      ]
    }
  },
  getState() {
    return this._state;
  },
  _callSubscriber () {
    console.log(1)
  },
  addPost () {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText (newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },
  subscribe (observer) {
    this._callSubscriber = observer;
  }
}

export default store;
window.store = store;