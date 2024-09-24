import React from "react";
import "./ledyArt.css";
import jsxImg from "../assets/image/jsx.jpg";
import allaImg from "../assets/image/allaImg.jpg";
import LoginForm from "../components/loginForm/LoginForm";
import MyInput from "../components/myInput/MyInput";
import Counter from "../components/counter/Counter";
import MyButton from "../components/myButton/MyButton";
import Feedback from "../components/feedback/Feedback";
import cn from "classnames";
function LedyArt() {
  return (
    <>
      <header>
        <>
          <div className="App font-effect-fire-animation">
            <h1>ДОБРА ВСЕМ ДОБРЫМ ЛЮДЯМ !</h1>
            <form action="https://google.com/search">
              <label htmlFor="search-input">Можно найти все!</label>
              <input
                type="text"
                id="search-input"
                name="q"
                placeholder="Enter query..."
              />
              <input type="submit" value="Search" />
            </form>
            <button
              className="myButton btnFavorite font-effect-fire-animation"
              type="button"
            >
              Add to favorites
            </button>

            <div className="butLogin-input">
              <MyInput
                name="login"
                type="text"
                placeholder="Введите логин"
                label="Логин"
              />
            </div>
            <div className="butLogin-input">
              <MyInput
                name="email"
                type="email"
                placeholder="Введите email"
                label="Email"
              />
            </div>
            <div className="butLogin-input">
              <MyInput
                name="password"
                type="password"
                placeholder="Введите пароль"
                label="Пароль"
              />
            </div>

            <h2>Рада вас видеть на своем проекте.</h2>
          </div>
        </>
        <>
          <div className="but-greed ">
            <button className="myButton" type="button">
              фото цветов</button>
            <button className="myButton" type="button">
              дизайны сада
            </button>
            <button className="myButton" type="button">
              дизайны дома
            </button>
            <button className="myButton" type="button">
              фото ладшафт
            </button>
            <button className="myButton" type="button">
              фото животных
            </button>
            <button className="myButton" type="button">
              полезные советы
            </button>
            <button className="myButton" type="button">
              мои картины
            </button>
            <button className="myButton" type="button">
              книги
            </button>
            <button className="myButton" type="button">
              кулинария
            </button>
            <button className="myButton" type="button">
              кондитерка
            </button>
            <button className="myButton" type="button">
              дизайн ногтей
            </button>
            <button className="myButton" type="button">
              косметолог
            </button>
            <button className="myButton" type="button">
              татту
            </button>
            <button className="myButton" type="button">
              стильные стрижки
            </button>
            <button className="myButton" type="button">
              грумминг
            </button>
          </div>
        </>
      </header>

      <main>
        <p className="App font-effect-fire-animation">
          Это пробный проект практика-работа в REACT
        </p>

        <div className="App">
          <img className="jsxImg" src={jsxImg} alt=""></img>
        </div>

        <div className="allaNovytska">
          <img className="allaImg" src={allaImg} alt="Alla"></img>

          <span>
            Здесь разместится инфа. <br />Я буду добавлять контент и учиться на
            своих ошибках!
          </span>

          <div className="all-container font-effect-fire-animation">
            <h2> Like counter </h2>
            <Feedback />
          </div>

          <div></div>

          <span>
            Здесь разместятся фото. <br />Я буду добавлять контент и учиться на
            своих ошибках!
          </span>
        </div>
      </main>
      <footer>
        <div className="but-greed feedback-container">
          <button className="myButton" type="button">
            обо мне
          </button>
          <button className="myButton" type="button">
            соцсети
          </button>
          <button className="myButton" type="button">
            профессии
          </button>
          <button className="myButton" type="button">
            хобби
          </button>
          <button className="myButton" type="button">
            мои сайты
          </button>
        </div>
      </footer>
    </>
  );
}

export default LedyArt;
