import { useState } from "react";
import "./lesson04.css";

console.log(1000)
function Lesson04() {
  // let count1 = 0;

  // const handlePlus1 = () => {
  //   count1++;
  //   console.log(count1)
  // };

  // передаем начальное значение состояния в хук useState
  // получаем в ответе массив из двух элементов - переменной состояния и функции для е изменения

  const [count, setCount] = useState(0);

  console.log(count);

  const handleMinus = () => {
    setCount(prev => prev - 10)
  }

  const handlePlus = () => {
    // handlePlus1()
    setCount(prev => prev + 10)
  };

  return (
    <div className="lesson-container">
      <h2>React hook useState 🪝</h2>
      <div className="counter">
        <button onClick={handleMinus}>-</button>
        <span>{count}</span>
        <button onClick={handlePlus}>+</button>
      </div>
      <p>Чтобы хранить и отображать на странице изменяющиеся данные в react мы используем состояние - это особая переменная, которая приходит в результате вызова хука useState. если это переменная изменится - это будет сигнал к обновлению страницы</p>
      <p>Чтобы изменить значение состояния мы используем функцию, которая приходит вторым элементом в массиве из useState() - она перезаписывает состояние</p>
    <p>Изменение состояния вызывает ререндр компонента с новыми данными и как следствия код в теле функция компонента срабатывает заново</p>
    </div>
  );
}

export default Lesson04;