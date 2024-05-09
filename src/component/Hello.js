// const Hello = function (){
//     <p>Hello</p>;
// };

// export default Hello;
// import World from "./World"
// import abcde from "./Hello.module.css"

// export default function Hello (){ 
//     //jsx 안에는 한 태그만 작동할 수 있기 때문에 return 안의 
//     //<p></p>,<world/> 태그 두 개를 한 개의 태그로 묶어야 함.
//     //빈 태그로 감싸도 됨.
//     return (
//     <> 
//         <h1 style = {
//             {

//             color : "red",
//             borderRight : "12px solid #000",
//             marginBottom: "50px",
//             opacity: 1,

//             }
//         }>Hello</h1>

//         <h1>
//             <div className={abcde.box}>Hello</div>
//         </h1>
//     </>
// );
// }//App component 안에 Hello component, Welcome component이 있고 
//Hello component 안에 World component가 있는 셈.





// export default function Hello(){
//     function  showName(){
//         console.log("Mike");
//     }
//     function showAge(age){
//         console.log(age);
//     }
//     function showText(e){
//         console.log(e.target.vlaue) //target은 input 태그, vlaue는 showText의 값
//     }

//     return (
//         <div>
//             <h1>state</h1>
//             <button onClick={showName}>Show name</button>
//             <button onClick={ () =>{
//                 showAge(30);
//             }
//             } >Show age</button>
//             <input type="text" onChange={showText}/>
//         </div>
//     )
// }





// export default function Hello() {
// 	const printName = (name) => {
// 		console.log(name)
// 	}
	
//     // 함수 printName 안에 "infoteam"이라는 값을 넣어주는 것
// 	return <div>
// 		<button 
// 			onClick={()=>{printName("Infoteam")}} > 
		
// 			Print Name
// 		</button>
// 	</div>	
// }





// import {useState} from "react";
// export default function Hello(props){
//   const [name, setName] = useState('Mike') //useState('초기값')

//   let changeName = () => {
//     const newName = name === "Mike" ? "Jane" : "Mike"
//     setName(newName)
//     console.log(newName)
//   }

//   return(
//     <div>
//         <button onClick={changeName}>
//         Change
//         </button>
//     </div>
//   )
// }





// import { useState } from "react";

// export default function Hello() {
//   const [Num1, setNum1] = useState('0');
//   const [Num2, setNum2] = useState('0');

//   const changeNum1 = (e) => {
//     setNum1(e.target.value);
//   };

//   const changeNum2 = (e) => {
//     setNum2(e.target.value);
//   };

//   const sumResult = () => {
//     const sumNum = Num1 + Num2;
//     console.log(sumNum);
//   };

//   return (
//     <h1>
//       <input
//         type="number"
//         value={Num1}
//         onChange={changeNum1}
//       />
//       <input
//         type="number"
//         value={Num2}
//         onChange={changeNum2}
//       />
//       <button onClick={sumResult}>Click</button>
//     </h1>
//   );
// }




