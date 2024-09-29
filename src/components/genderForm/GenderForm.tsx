import { useFormik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import styles from './genderForm.module.css';

// описание данных в объекте из input из формы
interface IFormGender {
  client: string;
}

// описание входящих данных из объекта, который приходит с API с сервера
interface IFormData {
  count: number;
  gender: string;
  name: string;
  probability: number;
}

const GenderForm = () => {
  const [genderData, setGenderData] = useState<IFormData>({
    gender: '',
    name: '',
    count: 0,
    probability: 0,
  });

  const fetchGender = async (client: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${client}`);
    const data = await res.json();
    setGenderData(data);
  };

  const formik = useFormik({
    initialValues: {
      client: '',
    } as IFormGender,
    validationSchema: Yup.object({
      client: Yup.string()
        .required('Name is required')
        .min(2, 'Name must be at least 2 characters')
        .max(25, "Имя не может быть длиннее 25 букв")
        .typeError("Введи Имя, Цифра есть в имени Роботов и они не имеют гендера")
        .nonNullable("Ты не ввел Имя. Введи Имя пожалуйста")
        .uppercase("Имя начинается всегда с заглавной буквы")
        


    }),
    onSubmit: (values: IFormGender, { resetForm }) => {
      fetchGender(values.client);
      resetForm();
    },
  });

  return (
    <div className='lesson-container'>
      <form onSubmit={formik.handleSubmit} className={styles.genderForm}>
        <label htmlFor="client">✨ Know your gender 🔮</label>
        <input
          value={formik.values.client}
          onChange={formik.handleChange}
          name='client'
          placeholder='type your name to analyze'
          type="text"
        />
        {formik.errors.client && formik.touched.client && (
          <div className={styles.errorMessage}>{formik.errors.client}
          <button
          value={formik.values.client}
          onClick={formik.handleReset}
          name="reset">reset</button>
          </div>
        )}
        <button type="submit">send request</button>
        <div className="feedback-container">
        {/* <button type="reset">reset</button> */}
      </div>
      </form>
      {genderData.name && (
  <p className={`${styles.genderOutput} ${genderData.gender === 'male' ? styles.male : styles.female}`}>
    {genderData.name} is {genderData.gender === 'male' ? ' 💁‍♂️ male ' : ' 💁‍♀️ female '}{genderData.probability * 100}%
  </p>
)}
    </div>
  );
};

export default GenderForm;