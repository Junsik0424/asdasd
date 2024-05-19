import useFetch from "../hooks/useFetch";
import Word from "./Word";
import { useParams } from "react-router-dom" 

export default function Day() {
  const { day } = useParams()   
  const words = useFetch(`http://localhost:3003/words?day=${day}`) //useFetch를 words라고 하면 API로 data를 받아오는 부분을 의미하게 됨

  return (
    <div>
      <h2>Day{day}</h2>
      {words.length === 0 && <span>Loading...</span>}
      
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
