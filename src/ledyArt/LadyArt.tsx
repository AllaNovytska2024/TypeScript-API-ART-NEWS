import React from "react";
import "./ledyArt.css";
import jsxImg from "../assets/image/jsx.jpg";
import allaImg from "../assets/image/allaImg.jpg";
// import LoginForm from "../components/loginForm/LoginForm";
import MyInput from "../components/myInput/MyInput";
import Counter from "../components/counter/Counter";
import MyButton from "../components/myButton/MyButton";
import Feedback from "../components/feedback/Feedback";
// import cn from "classnames";

function LedyArt() {
  return (
    <>
      <header className="header-Art ">
        <h1 className="h1-Art font-effect-shadow-multiple">
          ДОБРА ВСЕМ ДОБРЫМ ЛЮДЯМ !
        </h1>
      </header>

      <main className="main-Art">
        <div>
          <h2 className="h2-Art font-effect-shadow-multiple">
            Рада вас видеть на своем проекте.
          </h2>
        </div>
        <div className=" ">
          <div className="App-Art">
            <div className="but-greed-Art ">
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                фото цветов
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                дизайны сада
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                дизайны дома
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                фото ладшафт
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                фото животных
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                полезные советы
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                мои картины
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                книги
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                кулинария
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                кондитерка
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                дизайн ногтей
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                косметолог
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                татту
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                стильные стрижки
              </button>
              <button
                className="myButton-Art btnFavorite-Art myButton-Art"
                type="button"
              >
                грумминг
              </button>
            </div>
            <div className="textRightArt">
              <div>
                <img className="jsxImg" src={jsxImg} alt=""></img>
              </div>

              <p className="p-Art App-Art font-effect-fire-animation">
                Это пробный проект практика-работа в REACT
              </p>
            </div>
            <div>
            <div className=" font-effect-fire-animation">
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
          </div>
            </div>
          </div>
        </div>

        <div className="allaNovytska">
          <div>
            <img className="allaImgArt" src={allaImg} alt="Alla"></img>
            <button className="myButton-Art primary-Art " type="button">
              Add to favorites
            </button>
          </div>

          <span className="span-Art">
            Здесь разместится инфа. <br />Я буду добавлять контент и учиться на
            своих ошибках!
          </span>

          <div className="all-container font-effect-fire-animation">
            <h2 className="h2-Art"> Like counter </h2>
            <Feedback />
          </div>

          <div></div>

          <span className="span-Art">
            Здесь разместятся фото. <br />Я буду добавлять контент и учиться на
            своих ошибках!
          </span>
        </div>
      </main>
      <footer className="footer-Art">
        <form
          className="font-effect-fire-animation"
          action="https://google.com/search"
        >
          <label htmlFor="search-input">Можно найти все!</label>
          <input
            type="text"
            id="search-input"
            name="q"
            placeholder="Enter query..."
          />
          <input type="submit" value="Search" />
        </form>
        Alla Novytska practice Type Script API @2024
        <div className="but-greed-Art feedback-container">
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
