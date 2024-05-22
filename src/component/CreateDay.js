import React from "react";
import { useNavigate } from "react-router";
import useFetch from "../hooks/useFetch.ts";

export default function CreateDay() {
  const days = useFetch("http://localhost:3001/days")
  const navigate = useNavigate();

  function addDay() {
    fetch(`http://localhost:3001/days/`, {
      method: "POST",//create
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        day: days.length + 1,
      }),
    }).then(res => {
      if (res.ok) {
        alert("생성이 완료 되었습니다")
        navigate(`/`)
      }
    });
  }
  return (
    <div>
      <h3>현재 일수 : {days.length}일</h3>
      <button onClick={addDay}>Day 추가</button>
    </div>
    //누르면 Day가 늘어남, data.json에 Day4가 추가로 생김
  );
}