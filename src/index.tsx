import ReactDOM from "react-dom/client";
import { HashRouter, Route, Routes } from "react-router-dom";
import Counter from "./components/counter/Counter";
import Feedback from "./components/feedback/Feedback";
import FetchDog from "./components/fetchDog/FetchDog";
import FetchCat from "./components/fetchCat/FetchCat";
import HomePage from "./components/homepage/HomePage";
import MyForm from "./components/myForm/MyForm";
import "./index.css";
import Layout from "./layout/Layout";
import NoPage from "./components/noPage/NoPage";
import Lesson01 from "./lessons/lesson_01/Lesson01";
import Lesson02 from "./lessons/lesson_02/Lesson02";
import Lesson03 from "./lessons/lesson_03/Lesson03";
import Lesson04 from "./lessons/lesson_04/Lesson04";
import Lesson05 from "./lessons/lesson_05/Lesson05";
import Lesson06 from "./lessons/lesson_06/Lesson06";
import Lesson07 from "./lessons/lesson_07/Lesson07";
import Lesson08 from "./lessons/lesson_08/Lesson08";
import Lesson09 from "./lessons/lesson_09/Lesson09";
import Lesson10 from "./lessons/lesson_10/Lesson10";
import Lesson11 from "./lessons/lesson_11/Lesson11";
import Lesson12 from "./lessons/lesson_12/Lesson12";
import Lesson13 from "./lessons/lesson_13/Lesson13";
import Lesson14 from "./lessons/lesson_14/Lesson14";
import LedyArt from "./ledyArt/LadyArt";
import FetchArtNews from "./artApiNews/ArtApiNews";
import LessonCatAPI from "./lessons/lesson_catAPI/LessonCatAPI";
import LessonGenderForm from "./lessons/lesson_GenderForm/LessonGenderForm";
import GenderForm from "./components/genderForm/GenderForm";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  // оборачиваем все приложение в особый компонент HashRouter из библиотеки react-router-dom
  <HashRouter>
    {/* импортируем компонент Routes (пути) вокруг всех компонентов */}
    <Routes>
      {/* в обертке Route (один пути) передаем пропсами: element - вызов компонента-обертки (который всегда будет на странице) path - строчное значение пути до компонента */}
      <Route path="/" element={<Layout />}>
        {/* значение path - это путь до компонента, это значение мы пропишем в элементе Link, который должен привести нас к этому компоненту */}
        {/* то есть в path могут прописаны любые значения одной строкой без пропуска - важно сопоставлять их со значениями в ссылке */}
        <Route element={<HomePage />} path="/" />
        <Route element={<FetchDog />} path="fetch-dog" />
        <Route element={<FetchCat />} path="fetch-cat" />
        <Route element={<LedyArt />} path="ledy-art" />
        <Route element={<FetchArtNews />} path="art-API-News" />
        <Route element={<GenderForm />} path="gender-Form" />
        <Route element={<Counter />} path="counter" />
        <Route element={<MyForm />} path="my-form" />
        <Route element={<Feedback />} path="feedback" />
        <Route element={<Lesson01 />} path="lesson-1" />
        <Route element={<Lesson02 />} path="lesson-2" />
        <Route element={<Lesson03 />} path="lesson-3" />
        <Route element={<Lesson04 />} path="lesson-4" />
        <Route element={<Lesson05 />} path="lesson-5" />
        <Route element={<Lesson06 />} path="lesson-6" />
        <Route element={<Lesson07 />} path="lesson-7" />
        <Route element={<Lesson08 />} path="lesson-8" />
        <Route element={<Lesson09 />} path="lesson-9" />
        <Route element={<Lesson10 />} path="lesson-10" />
        <Route element={<Lesson11 />} path="lesson-11" />
        <Route element={<Lesson12 />} path="lesson-12" />
        <Route element={<Lesson13 />} path="lesson-13" />
        <Route element={<LessonCatAPI />} path="lesson-CatAPI" />
        <Route element={<LessonGenderForm />} path="lesson-GenderForm" />
        <Route element={<Lesson14 />} path="lesson-14" />

        <Route element={<NoPage />} path="*" />
      </Route>
    </Routes>
  </HashRouter>
);
