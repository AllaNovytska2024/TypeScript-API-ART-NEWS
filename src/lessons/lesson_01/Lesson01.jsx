// импорт css из отдельного файла
import jsxImg from "../../assets/image/jsx.jpg";
import MyButton from "../../components/forms/myButton/MyButton";
import "./lesson01.css";
import gif3 from "../../assets/gift/myGifts/cartoon-762_128.gif";

// функции App является react компонентом
// в return такая функция возвращает верстку с данными
// react компоненты называются с большой буквы
function Lesson01() {
  function remember() {
    console.log("и ну не забудь сахар!");
  }

  return (
    // такой синтаксис: верстка в логике JS называется JSX
    <div className="App">
      <h1>Hello, react! 🙋‍♂️</h1>
      <img className="imgSize" src={gif3} alt="" />
      <div className="all-container">
        <MyButton text={"приходи ко мне на чай"} onClick={remember} />
      </div>
    </div>
  );
}

// чтобы использовать компонент в другом файле мы используем экспорт

export default Lesson01;
