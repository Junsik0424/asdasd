import { useEffect, useState } from "react";

export default function useFetch(url) { //useFetch 안에 url을 인자로 받음
  const [data, setData] = useState([])
  //useState로 data를 받음(필요한 건 data이니까, data를 리턴함)
  //data라는 상태값이 있고, API 주소를 넘겨받아서 fetch하고, 데이터를 setData해줌, 그리고 data를 리턴함
  useEffect(() => {
  //Day나 DayList가 랜더링되고, useEffect 함수 부분이 실행
    fetch(url)
     //url은 useFetch 내부에 있던 url을 넘겨받음
     //url에 대해 응답받은 값을 data에 넣어주고, 리턴해줌
      .then(res => {
        return res.json()
      })
      .then(data => {
        setData(data)
      })
  }, [url])

  return data;
}