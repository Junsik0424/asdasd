import { useEffect, useState } from "react"; //dummy를 json-server를 이용해 API로 변경함
//state에 빈 배열을 만들고, API에서 리스트를 가져와서 바꿔주는 방식
//이 방식은 데이터가 바뀌면 자동으로 랜더링 됨
import Word from "./Word";
import { useParams } from "react-router-dom" 

export default function Day() {
  const { day } = useParams() //URL을 포함한 값을 얻기 위해 useParams 이용 
  //useParam을 이용해 해당 day에 맞게 페이지가 설정됨
  
  const [words, setWords] = useState([]);

  useEffect(() => { //useEffect 사용하는 목적은 API 호출
    fetch(`http://localhost:3003/words?day=${day}`) //API 통신을 하기 위해 fetch() 를 이용 
    //fetch 내부에 API 경로를 적고
      .then(res => {
        return res.json();
      })
    //then을 이용해 res(response).json을 리턴해줌(여기서 response는 http의 응답을 의미함)
      .then(data => {
        setWords(data);
      });
  }, [day]);
    //json 메서드를 사용해주면 json 으로 변환됨. 그러면 then을 이용해 데이터를 받아서 setDays를 해줌



  return (
    <div>
      <h2>Day{day}</h2>
      <table>
        <tbody>
          {words.map (word => (
          <Word word={word} key={word.id} />
          ))}
        </tbody>
      </table>
    </div>
  )
}
