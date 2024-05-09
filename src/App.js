import './App.css';
import Hello from './component/Hello'; //Hello component 안에 World component가 
//있어서 World를 따로 import 하지 않아도 됨.
// import Welcome from './component/Welcome';

// function App() {
//   return <div className="App">
//     <Hello></Hello>
//     <Hello/> 
//     <Welcome/>
//     </div>
// }
// import abcde from './App.module.css'

// import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Day from "./component/Day";
import DayList from "./component/DayList";
import Header from "./component/Header";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route exact path = "/" element = {<DayList/>}/>
          <Route exact path = "/day" element = {<Day/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App;
