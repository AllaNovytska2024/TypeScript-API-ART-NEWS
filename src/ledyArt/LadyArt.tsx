import React from "react";
import "./ledyArt.css";
import jsxImg from "../assets/image/jsx.jpg";
import allaImg from "../assets/image/allaImg.jpg";
// import LoginForm from "../components/loginForm/LoginForm";
import MyInput from "../components/forms/myInput/MyInput";
import Counter from "../components/counters/counter/Counter";
import MyButton from "../components/forms/myButton/MyButton";
import Feedback from "../components/forms/feedback/Feedback";
import gif from "../components/gift/myGifts/glitter-ball-10892_128.gif";
// import cn from "classnames";

function LedyArt() {
  return (
    <>
      <header className="header-Art ">
        <h1 className="h1-Art font-effect-shadow-multiple">
          ДОБРА ВСЕМ ДОБРЫМ ЛЮДЯМ !
        </h1>
        <img className="imgSize" src={gif} alt="" />
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
            <form className="myForm-Art ">
              <MyInput
                name="login"
                label={"login"}
                placeholder={"login"}
                type={"text"}
              />
              <MyInput
                name="password"
                label={"pass"}
                placeholder={"password"}
                type={"password"}
              />
              <MyInput
                name="email"
                label={"email"}
                placeholder={"email"}
                type={"email"}
              />
              <MyButton
                text={"авторизация"}
                type="submit"
                onClick={() => console.log("login!!")}
              />
            </form>
            <form className="myForm-Art  " action="https://google.com/search">
              <label htmlFor="search-input">Можно найти все!</label>
              <input
                type="text"
                id="search-input"
                name="q"
                placeholder="Enter query..."
              />
              <input
                className="myButtonFoot-Art"
                type="submit"
                value="Search"
              />
            </form>
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
    </>
  );
}

export default LedyArt;
