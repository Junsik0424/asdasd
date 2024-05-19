import dummy from "../db/data.json"
import { useParams } from "react-router-dom" 

export default function Day() {
  const { day } = useParams() //URL을 포함한 값을 얻기 위해 useParams 이용 
  //useParam을 이용해 해당 day에 맞게 페이지가 설정됨
  
  const wordList = dummy.words.filter(word => word.day === Number(day))//useParam에 들어오는 값은 문자여서 Number를 통해 숫자로 바꾸기
  
  return (
    <div>
      <h2>Day{day}</h2>
      <table>
        <tbody>
          {wordList.map (word => (
            <tr key={word.id}>
              <td>{word.eng}</td>
              <td>{word.kor}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
