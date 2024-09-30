export default function Lesson06() {
  // * typescript!

  // * 1. string

  let username: string = "Bob";
  // не получится присвоить данные другого типа - (username = 100)
  username = "100";
  console.log(username);

  // * 2. number

  let number: number = 42;
  number = 4.33;
  number = NaN;
  number = 2 + Number("2");
  console.log(number);

  // * 3. boolean

  let isAdmin: boolean = true;
  isAdmin = 2 > 3; // перезаписали true на false
  console.log(isAdmin);

  // * 4. null / undefined

  let emptyValue: null = null;
  // emptyValue = 0
  console.log(emptyValue);

  let empty: undefined = undefined;
  console.log(empty);

  let truth: true = true;
  // truth = false
  console.log(typeof truth); //typeof покажет корректный тип js, но не в typescript

  // * arrays

  const colors: string[] = ["blue", "red", "cyan", "magenta"];
  colors.push("yellow");
  colors[1] = "green";
  console.log(colors);

  // * tupel

  const person: [string, number] = ["John", 25];
  console.log(person);

  // * functions

  // если функция не возвращает ничего - значит она возвращает void
  // тип возвращенного значения указывается после круглых скобок

  const showMessage = (message: string): void => {
    console.log(`message: ${message}`);
  };

  showMessage("hello!");

  const sum = (a: number, b: number): number => a + b;
  let result: number = sum(55, 8);
  console.log(result);

  console.log(sum(22, 11));

  // * objects interface

  interface IUser {
    name: string;
    // union type позволяет объединять несколько типов на выбор через '|'
    age: number | string;
    // isAdmin типизирован как необязательный ключ через '?'
    isAdmin?: boolean;
  }

  // в интерфейс можно дописывать новые свойства просто описав его еще раз - свойства плюсуются и объединяются

  interface IUser {
    city?: string;
  }

  // наследование в interface через ключевое слово extends

  interface IMagician extends IUser {
    magic(): void;
  }

  const harry: IMagician = {
    name: "Harry",
    age: 35,
    isAdmin: true,
    magic() {
      console.log("lumos!");
    },
  };

  const ron: IUser = {
    name: "Ron",
    age: "30",
  };

  const hermione: IUser = {
    name: "Hermione",
    age: 25,
  };

  const users: IUser[] = [harry, ron, hermione];

  console.log(users);

  console.log(harry);

  // * union type

  let button: "submit" | "button" | "reset" = "submit";
  console.log(button);

  // * type для типизации объектов

  type Animal = {
    name: string;
    sound(): void;
  };

  // пример наследования через оператор & в type

  type Dog = Animal & {
    breed: string;
  };

  const dog: Dog = {
    name: "Bars",
    sound() {
      console.log("woof!");
    },
    breed: "Labrador",
  };

  dog.sound();

  return (
    <div className="lesson-container">
      <h2>Lesson 6. TypeScript part 1</h2>
      <p>
        Все самое интересное в этом уроке происходит в теле компонента Lesson06
        и в комментариях к коду ⚡️
      </p>
    </div>
  );
}
