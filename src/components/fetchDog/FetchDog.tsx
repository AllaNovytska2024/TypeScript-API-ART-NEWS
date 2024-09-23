import { useEffect, useState } from "react";
import MyButton from "../myButton/MyButton";
import "./fetchDog.css";

export default function FetchDog() {
  // пишем интерфейс для описания объекта из api
  interface IDog {
    message: string;
    status: string;
  }

  // создаем переменную состояния и кладем в нее начальным значением объект с нужными ключами, но с пустыми строками

  const [dog, setDog] = useState<IDog>({
    message: "",
    status: "",
  });

  // объявляем функцию с fetch запросом, которая кладет данные из api в state (чтобы при новом запросе мы бы обновили результата на странице)
  const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      // полученные данные кладем в переменную состояния dog
      // через функцию setDog для ее обновления
      // обновления состояния вызывает ререндер компонента и мы видим новую 🐶
      .then((data) => setDog(data));
  };

  useEffect(() => {
    // вызываем функцию в начале жизнененного цикла компонента
    fetchDog();
  }, []);

  return (
    <div className="all-container">
      {/* кнопка будет появляться только после пришедшей картинки */}
      {dog.message && (
        <>
          <img className="dog-img" src={dog.message} alt="dog" />
          <MyButton isPrimary={true} text="update dog" onClick={fetchDog} />
        </>
      )}
    </div>
  );
}
