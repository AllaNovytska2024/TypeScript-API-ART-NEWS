// импорт css из отдельного файла
import jsxImg from "../assets/jsx.jpg";
import MyButton from "../../components/myButton/MyButton";
import "./lesson01.css";

// функции App является react компонентом
// в return такая функция возвращает верстку с данными
// react компоненты называются с большой буквы
function Lesson01() {
  function remember() {
    console.log("и ну забудь сахар!");
  }

  return (
    // такой синтаксис: верстка в логике JS называется JSX
    <div className="App">
      <h1>Hello, react! 🙋‍♂️</h1>
      <img className="jsxImg" src={jsxImg} alt="" />
      <div>
        <MyButton text={"приходи ко мне на чай"} onClick={remember} />
      </div>
    </div>
  );
}

// чтобы использовать компонент в другом файле мы используем экспорт

export default Lesson01;