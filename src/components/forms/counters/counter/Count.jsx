// import { useState } from "react";
// import MyButton from "../myButton/MyButton";

// console.log(1000);
// function Counter({ initial }) {
//   // let count1 = 0;

//   // const handlePlus1 = () => {
//   //   count1++;
//   //   console.log(count1)
//   // };

//   // передаем начальное значение состояния в хук useState
//   // получаем в ответе массив из двух элементов - переменной состояния и функции для е изменения

//   const [count, setCount] = useState(initial);

//   console.log(count);

//   const handleMinus = () => {
//     setCount((prev) => prev - 1);
//   };

//   const handlePlus = () => {
//     // handlePlus1()
//     setCount((prev) => prev + 1);
//   };

//   return (
//     <div className="all-container ">
//       <h2>Поставьте лайки</h2>
//       <div className="counter ">
//         <button onClick={handleMinus}>-</button>
//         <span>{count}</span>
//         <button onClick={handlePlus}>+</button>
//       </div>
//       {/* <p>Чтобы хранить и отображать на странице изменяющиеся данные в react мы используем состояние - это особая переменная, которая приходит в результате вызова хука useState. если это переменная изменится - это будет сигнал к обновлению страницы</p> */}
//       {/* <p>Чтобы изменить значение состояния мы используем функцию, которая приходит вторым элементом в массиве из useState() - она перезаписывает состояние</p> */}
//       {/* <p>Изменение состояния вызывает ререндр компонента с новыми данными и как следствия код в теле функция компонента срабатывает заново</p> */}
//     </div>
//   );
// }

// export default Counter;
