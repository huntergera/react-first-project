import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Technologies />

    </div>
  );
}

function Technologies() {
  return (
    <div>
      <ul>
        <li>css</li>
        <li>html</li>
        <li>js</li>
      </ul>
    </div>
  )
}

function Header() {
    return (
        <div>
            <a href="">Home</a>
            <a href="">New Feed</a>
            <a href="">Messages</a>
        </div>

    )
}

export default App;
