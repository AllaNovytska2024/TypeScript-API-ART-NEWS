import React from "react";
import MyInput from "../myInput/MyInput";
import MyButton from "../myButton/MyButton";

const LoginForm: React.FC = () => {
  return (
    <form>
      <MyInput
        name="login"
        type="text"
        placeholder="Введите логин"
        label="Логин"
      />
      <MyInput
        name="email"
        type="email"
        placeholder="Введите email"
        label="Email"
      />
      <MyInput
        name="password"
        type="password"
        placeholder="Введите пароль"
        label="Пароль"
      />
      <MyButton text="Войти" type="submit" isPrimary />
    </form>
  );
};

export default LoginForm;

// import React from "react";
// import MyInput from "../myInput/MyInput";
// import MyButton from "../myButton/MyButton";

// interface LoginForm = () => {
//   return (
//     <form>
//       <MyInput
//         name="login"
//         type="text"
//         placeholder="Введите логин"
//         label="Логин"
//       />
//       <MyInput
//         name="email"
//         type="email"
//         placeholder="Введите email"
//         label="Email"
//       />
//       <MyInput
//         name="password"
//         type="password"
//         placeholder="Введите пароль"
//         label="Пароль"
//       />
//       <MyButton type="submit">Войти</MyButton>
//     </form>
//   );
// };

// export default LoginForm;
