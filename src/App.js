import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Route, Routes} from "react-router-dom";


function App(props) {
  return (
      <div className='app-wrapper'>
        <Header />
        <Navbar state={props.state.sidebar}/>
        <div className="app-wrapper-content">
          <Routes>
            <Route path="/dialogs/*"
                   element= {<Dialogs state={props.state.dialogsPage}/>}/>
            <Route path="/profile"
                   element={<Profile profilePage={props.state.profilePage} addPost={props.addPost}  updateNewPostText={props.updateNewPostText}/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
