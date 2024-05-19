import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

export default function DayList() { 

const days = useFetch("http://localhost:3003/days") //useFetch를 days라고 하면 API로 data를 받아오는 부분을 의미하게 됨

  return (
    <ul className="list_day">
      {days.map((day) => (
        <li key={day.id}>
          <Link to={`/day/${day.day}`}> Day {day.day}</Link>
        </li>
      ))}
    </ul>
  );
}