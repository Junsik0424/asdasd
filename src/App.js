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
          <Route exact path="/" element = {<DayList/>}/>
          <Route exact path="/day/:day" element = {<Day/>}/>
          <Route exact path="/*" element = {<EmptyPage/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  )
  //홈과 day를 제외한 링크 주소는 EmptyPage가 결과창으로 나오도록 설정
}
//react-router-dom에서 동적인 데이터를 처리할 때, "/day/:day"와 같이 콜론(:)으로 처리하면 됨
//이렇게 설정하면 Day 1 로 들어왔을 때, :day 라는 변수로 1을 얻게 됨

export default App;
