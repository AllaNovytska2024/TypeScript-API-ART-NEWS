import { useFormik } from 'formik';
import * as Yup from 'yup';
import styles from './robotForm.module.css';

interface IFormValues {
  model: string;
  creator: string;
  email: string;
}


// * проверка данных в форме (валидация)
// .required('error text) - требует чтобы поле не осталось незаполненным
// .number() - проверка с приведением типов, что это число
// .string() -проверка на строку
// .min(100, 'error text') - не меньше 100 (строк)
// .max(1000, 'error text') - не больше 1000
// .positive() - только положительное число
// .integer() - только целое число

// объект schema формируется с помощью Yup
const schema = Yup.object().shape({
  model: Yup
    .number()
    .typeError('твоя модель это число 🙅‍♂️')
    .required('напиши свою модель! 🧐')
    .integer('модель - это целое число!')
    .min(100, 'твоя модель должна начинаться с 100!')
    .max(1000, 'ты не такой робот! модель до 1000...'),
  creator: Yup
    .string()
    .required('скажи кто твой создатель 👩‍🔬'),
  email: Yup
    .string()
    .email('некорректный формат email 👾')
    .required('email твоей компании обязателен 😑')
    .max(50, '50')
});

const RobotForm = () => {


  const formik = useFormik({
    initialValues: {
      model: '',
      creator: '',
      email: ''
    } as IFormValues,
    // подключение схемы из Yup
    validationSchema: schema,
    // убираем валидацию по изменениям в input
    validateOnChange: false,
    onSubmit: (values, {resetForm}) => {
      console.log(values);
      resetForm()
    }
  });


  return (
    <>
      <form onSubmit={formik.handleSubmit} className={styles.robotForm}>
        <label>Это форма для 🤖</label>
        <input value={formik.values.model} onChange={formik.handleChange} type="text" name='model' placeholder='ваша модель' />
        <input value={formik.values.creator} onChange={formik.handleChange} type="text" name='creator' placeholder='имя создателя' />
        <input value={formik.values.email} onChange={formik.handleChange} type="text" name='email' placeholder='email производителя' />
        <button type='submit'>отправить</button>
      </form>
      {/* значение об ошибках приходит из formik.errors */}
      <span className={styles.errors}>{formik.errors.model}</span>
      <span className={styles.errors}>{formik.errors.creator}</span>
      <span className={styles.errors}>{formik.errors.email}</span>
    </>
  );
};

export default RobotForm;