import { useRef, useState } from "react";
import { useHistory } from "react-router";
import useFetch from "../hooks/useFetch";

export default function CreateWord() {
  const days = useFetch("http://localhost:3003/days")
  const history = useHistory();
  //useHistory 는 react-router에서 지원하는 기능, useHistory로 생성한 history에 주소를 push 해주면, 해당 페이지로 이동함
  //<Link to>처럼 <a>태그를 사용하지 않고 페이지를 전환할 때 유용하게 사용
  const [isLoading, setIsLoading] = useState(false)

  function onSubmit(e) {
    e.preventDefault();
    //onSubmit 함수를 만들고 태그에 연결
    //e(event)를 받아서 e.preventDefault()를 하면, 버튼을 눌러도 창이 새로고침되지 않음 
    //기본 기능을 막은 것

    if (!isLoading) {
    //통신 중에는 저장 버튼을 클릭할 수 없도록 하는 역할
      setIsLoading(true);
      //기본적으로 isLoading이 false일 때, setIsLoading을 true로 설정함
      fetch(`http://localhost:3003/words/`, {
        method: "POST", //create
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          day: dayRef.current.value,
          eng: engRef.current.value,
          kor: korRef.current.value,
          isDone: false,
        }),
      }).then(res => {
        if (res.ok) {
          alert("생성이 완료 되었습니다")
          history.push(`/day/${dayRef.current.value}`)
          setIsLoading(false)
          //작업이 끝나면 setIsLoading을 false로 바꿈(통신 중에 저장 버튼을 여러 번 클릭해도 반응하지 못하게 함)
        }
      });
    }
  }

  const engRef = useRef(null)
  const korRef = useRef(null)
  const dayRef = useRef(null)
  //DOM요소에 이름표를 붙이는 방법이 Ref
  return (
    <form onSubmit={onSubmit}>
      <div className="input_area">
        <label>Eng</label>
        <input type="text" placeholder="computer" ref={engRef} />
      </div>
      <div className="input_area">
        <label>Kor</label>
        <input type="text" placeholder="컴퓨터" ref={korRef} />
      </div>
      <div className="input_area">
        <label>Day</label>
        <select ref={dayRef}>
          {days.map(day => (
            <option key={day.id} value={day.day}>
              {day.day}
            </option>
            //key는 day.id, value는 day.day
          ))}
        </select>
      </div>
      <button
        style={{
          opacity: isLoading ? 0.3 : 1, //저장할 때 버튼의 투명도
        }}
      >
        {isLoading ? "Saving..." : "저장"}
      </button>
    </form>
  );
}
