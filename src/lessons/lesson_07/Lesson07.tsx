import Counter from "../../components/counters/counter/Counter";
import MyButton from "../../components/forms/myButton/MyButton";

export default function Lesson07() {
  let hero: string = "spider-man";
  console.log(hero);

  // типизация объекта

  interface ISuperhero {
    id: number;
    name: string;
    nickname: string;
    age?: number;
    abilities?: string[];
  }

  // наследование интерфейса и добавление нового поля

  // interface ISpaceHero extends ISuperhero {
  //   homePlanet: 'Moon' | 'Saturn' | 'Crypton'
  // }

  let hero1: ISuperhero = {
    id: 1,
    name: "Clark Kent",
    nickname: "Superman",
    abilities: ["super fly", "super vision"],
    // homePlanet: 'Crypton'
  };

  let hero2: ISuperhero = {
    id: 2,
    name: "Bruce Wane",
    nickname: "Batman",
  };

  console.log(hero1, hero2);

  const heroes: ISuperhero[] = [hero1, hero2];

  console.log(heroes);

  // generics дженерики
  // способ ограничения данных на вход в функцию

  function makeArray<T>(first: T, second: T): T[] {
    return [first, second];
  }

  // в момент вызова функции вы передаете generic тип в угловых скобках
  // таким образом вы уточняете данные на вход
  console.log(makeArray<number>(12, 44));
  console.log(makeArray<ISuperhero>(hero1, hero2));

  return (
    <div className="lesson-container">
      <h2>Lesson 7. TypeScript part 2</h2>
      <p>
        Все самое интересное в этом уроке происходит в теле компонента Lesson07
        и в комментариях к коду ⚡️
      </p>
      <MyButton text="come tomorrow ✨" />
      <MyButton text="came yesterday 🙌" />
      <Counter />
    </div>
  );
}
