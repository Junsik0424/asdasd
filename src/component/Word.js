import { useState } from "react"

 export default function Word({ word:w }) {//{word:w}로 설정하면 w를 새로운 변수명으로 사용
   const [isShow, setIsShow] = useState(false);
   const [isDone, setIsDone] = useState(word.isDone);
   const [word, setWord] = useState(w);
   //props로 넘어온 word를 w라는 변수명으로 사용

   function toggleShow() {
     setIsShow(!isShow);
   }
   function toggleDone() {
    fetch(`http://localhost:3003/words/${word.id}`, {
     method: "PUT",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       ...word,
       isDone: !isDone,
     }),
   }).then(res => {
     if (res.ok) {
       setIsDone(!isDone);
     }
   });
  }

  function del() {
    if (window.confirm("삭제 하시겠습니까?")) {
      fetch(`http://localhost:3003/words/${word.id}`, {
        method: "DELETE",
      }).then(res => {
        if (res.ok) {
          setWord({ id: 0 });
        }
      });
    }
  }

  if (word.id === 0) {
    return null;
    //word.id 가 0 이면, null 을 리턴
  }
   return (
     <tr className={isDone ? "off" : ""}>
       <td>
         <input type="checkbox" checked={isDone} onChange={toggleDone} />
       </td>
       <td>{word.eng}</td>
       <td>{isShow && word.kor}</td>
       <td>
         <button onClick={toggleShow}>뜻 {isShow ? "숨기기" : "보기"}</button>
         <button onClick={del} className="btn_del">삭제</button>
       </td>
     </tr>
   );
 }
// 별도의 컴포넌트를 만들어서 관리