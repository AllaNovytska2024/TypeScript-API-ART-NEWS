import { useEffect, useState } from "react";
import MyButton from "../../forms/myButton/MyButton";
import "./counter.css";
import { useNavigate } from "react-router-dom";

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  // вызываем хук из react-router-dom и кладем в переменную
  const navigate = useNavigate();

  console.log(count);

  const handleMinus = (): void => {
    setCount((prev) => prev - 10);
  };

  const handlePlus = (): void => {
    // handlePlus1()
    setCount((prev) => prev + 10);
  };

  // эта функция перебросит нас на главную страницу через 10 секунд

  useEffect(() => {
    const backHome = () => {
      setTimeout(() => {
        navigate("/");
      }, 10000);
    };
    backHome();
  }, [navigate]);

  return (
    <div className="lesson-container">
      <h3>Counter</h3>
      <p>Через 10 секунд вас переадресует на главную страницу 🧐</p>
      <div>
        <MyButton onClick={handleMinus} text="-" />
        <span>{count}</span>
        <MyButton onClick={handlePlus} text="+" isPrimary={true} />
      </div>
    </div>
  );
}
