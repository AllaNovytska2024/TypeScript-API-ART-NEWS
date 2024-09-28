import { useFormik } from 'formik';
import { useState } from 'react';
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
    setGenderData(data)
  };

  const formik = useFormik({
    initialValues: {
      client: ''
    } as IFormGender,
    onSubmit: (values: IFormGender, {resetForm}) => {
      // делаем запрос к API через созданную выше асинхронную функцию
      fetchGender(values.client);
      resetForm()
    }
  });


  return (
    <div className='lesson-container'>
      <form onSubmit={formik.handleSubmit} className={styles.genderForm}>
        <label htmlFor="">✨ Know your gender 🔮</label>
        <input value={formik.values.client} onChange={formik.handleChange} name='client' placeholder='type your name to analyze' type="text" />
        <button type="submit">send request</button>
      </form>
      {genderData.name && (
          <p className={styles.genderOutput}>{genderData.name} is {genderData.gender === 'male' ? '💁‍♂️' : '💁‍♀️'} {genderData.probability * 100}%</p>
      )}
    </div>
  );
};

export default GenderForm;