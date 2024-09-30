import { useEffect, useState } from "react";
import MyButton from "../../components/forms/myButton/MyButton";

export default function Lesson08() {
  const [count, setCount] = useState<number>(0);
  const [toggle, setToggle] = useState<boolean>(true);

  const handleIncrease = (): void => {
    setCount((prev) => prev + 1);
  };

  const handleToggle = (): void => {
    setToggle(!toggle);
  };

  // изменения состояния state вызывает rerender компонента
  // он в свою очередь заново запускает команды в теле функции компонента
  // setCount(prev => prev + 1)

  // хук принимает в себя два параметра - стрелочная функция с заданным действием, массив зависимостей - в нем можно указать при изменении каких переменных будет происходить данное действие
  useEffect(() => {
    // этот вывод в консоль будет происходить только в самом начале жизненного этапа компонента - mounting
    console.log("этот вывод в консоль сработает только раз в начале");
  }, []);

  // * здесь мы смогли сделать так чтобы действие в useEffect() происходила в начале жизнененного цикла компонента и при обновлении переменной состояния toggle
  // для этого мы положили ее в массив зависимостей
  useEffect(() => {
    console.log(
      "этот вывод в консоль сработает в начале и при изменении toggle, когда прячем параграф"
    );
  }, [toggle]);

  // ! если массив пустой - действие произойдет только один раз

  // этот вывод в консоль будет происходить каждый раз при обновлении компонента
  console.log("этот вывод в консоль будет срабатывать при каждом обновлении 🫠");

  return (
    <div className="lesson-container">
      <h2>Lesson 8. useEffect() hook</h2>

      <p>
        Обновления состояния в react компоненте включает rerender компонента
        (update). В результате действия в теле функции сработают еще раз
        (смотрите консоль):{" "}
      </p>

      <div>{count}</div>
      <MyButton text="increase" onClick={handleIncrease} />
      <p>
        Когда мы хотим задать для действий внутри react компонентов особые
        условия для выполнения мы используем хук useEffect()
      </p>
      <MyButton
        isPrimary={true}
        text="hide paragraph bellow"
        onClick={handleToggle}
      />
      {/* если toggle true то блок кода снизу будет показан */}
      {toggle && (
        <>
          <p>
            С помощью него мы можем изолировать действия от многократного
            повторения, например, вызывать их только в самом начале жизненного
            цикла компонента - mounting
          </p>
        </>
      )}
    </div>
  );
}
