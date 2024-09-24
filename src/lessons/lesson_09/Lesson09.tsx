import cn from 'classnames';
import MyButton from '../../components/myButton/MyButton';
import styles from './lesson09.module.css';

export default function Lesson09() {
  return (
    <div className='lesson-container'>
      <h2>Lesson 9. useEffect() + CSS modules</h2>
      <p className={styles.desc + " " + styles.importantDesc}>CSS modules - это способ, как мы можем изолированно работать со стилями CSS в React</p>
      <p className={`${styles.underlineDesc} ${styles.desc}`}>Задачу добавления нескольких классов в CSS модулях можно решить разными способами</p>
      <ol>
        <li>конкатенацией</li>
        <li>шаблонной строкой</li>
        <li>библиотекой classnames</li>
      </ol>
      <p className={cn(styles.desc, styles.boldDesc)}>Библиотеку classNames мы устанавливаем через команду 'npm i classnames' и импортируем в нужный компонент</p>
      <p>С помощью classnames также удобно добавлять классы согласно какому-ту условию, как например в нашей кнопке-компоненте:</p>
      <MyButton isPrimary={true} text='тестим в кнопке библиотеку classnames' />
    </div>
  );
}