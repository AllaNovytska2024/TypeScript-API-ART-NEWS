import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.lessonContainer}>
      <div className={styles.gridContainer}>
        <Link to='lesson-1'><div>Lesson 1</div></Link>
        <Link to='lesson-2'><div>Lesson 2</div></Link>
        <Link to='lesson-3'> <div>Lesson 3</div></Link>
        <div>Lesson 4</div>
        <div>Lesson 5</div>
        <div>Lesson 6</div>
        <div>Lesson 7</div>
        <div>Lesson 8</div>
        <div>Lesson 9</div>
        <div>Lesson 10</div>
        <div>Lesson 11</div>
      </div>
    </div>
  );
};

export default HomePage;