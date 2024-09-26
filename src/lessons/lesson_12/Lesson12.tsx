import { useState } from 'react';
import styles from './lesson12.module.css';
import gif from "../../components/myGifts/cartoon-562_128.gif"
import { useFormik } from 'formik';


interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
}


const Lesson12 = () => {

  const [users, setUsers] = useState<IFormValues[]>([]);
  // мы вызываем функцию хук useFormik и передаем ей объект с настройками - результат кладем в переменную
  const formik = useFormik({
    // по ключу initialValues приходят начальные значения для input
    initialValues: {
      // начальные значения
      // ! имена ключей в этом объекте должны совпадать с аттрибутом name у соответствующих input
      firstName: 'adam',
      lastName: 'adamson',
      email: 'heaven@gmail.com'
      // firstName: '',
      // lastName: '',
      // email: ''
    } as IFormValues,
    // по ключу onSubmit мы описываем событие, которое произойдет по нажатию на кнопку
    // здесь мы  'встречаем' данные из формы и производим над ними операции
    onSubmit: (values: IFormValues, { resetForm }) => {
      // вывел данные в консоль чтобы проверить работает ли форма
      // добавляем данные из формы к элементам массива users в state
      setUsers((prev) => [...prev, values]);
      console.log(users);
      resetForm();
    }
  });

  // функция удаления из массива работает за счет метода filter который проверяет наличие объекта с таким же значением ключа firstName и если находит то удаляет его
  const deleteName = (user: string) => {
    setUsers((prev) => prev.filter(el => el.firstName !== user))
  }

  return (
    
    <div className='all-container'>
     
      <h2>Lesson 12. formik</h2>
      
      <p>Formik - это библиотека для работы с формами в react</p>
      
      <p>Что нужно не забыть заполнить в форме, чтобы она заработала: </p>
      <ol>
        <li>для form добавить onSubmit: formik.handleSubmit</li>
        <li>для input добавить в onChange: formik.handleChange</li>
        <li>для input добавить в name имя соответствующее нужному ключу в initialValue </li>
        <li>для input добавить в value значение его поля из formik.values</li>
      </ol>
      <form onSubmit={formik.handleSubmit} className={styles.loginForm}>
        <input onChange={formik.handleChange} value={formik.values.firstName} name='firstName' type="text" placeholder='first name' />
        <input onChange={formik.handleChange} value={formik.values.lastName} name='lastName' type="text" placeholder='last name' />
        <input onChange={formik.handleChange} value={formik.values.email} name='email' type="text" placeholder='email' />
        <button type="submit">отправить</button>
      </form>
      <div className={styles.usersList}>
        {users.map((user, index )=> (
          <div key={index}>
            <p>My name is <span>{user.firstName} {user.lastName}</span>. My email is: <span>{user.email}</span></p>
             <button onClick={()=> deleteName(user.firstName)}>delete all Users with this FirstName</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lesson12;