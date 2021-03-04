import logo from './logo.svg';
import './App.css';
import Change from "./components/Change";
let arr = ['vue', 'react', 'angulars']

function App() {

  return (
    <div>
      前端框架列表
      <Change ></Change>
      <ul>
        {arr.map((item, index) => {
          return <li key={index}>{item}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
