import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.lessonContainer}>
      <div className={styles.gridContainer}>
        <Link to='lesson-1'><div>Lesson 1</div></Link>
        <Link to='lesson-2'><div>Lesson 2</div></Link>
        <Link to='lesson-3'> <div>Lesson 3</div></Link>
        <Link to='lesson-4'><div>Lesson 4</div></Link>
        <Link to='lesson-5'><div>Lesson 5</div></Link>
        <Link to='lesson-6'> <div>Lesson 6</div></Link>
        <Link to='lesson-7'><div>Lesson 7</div></Link>
        <Link to='lesson-8'><div>Lesson 8</div></Link>
        <Link to='lesson-9'> <div>Lesson 9</div></Link>
        <Link to='lesson-10'><div>Lesson 10</div></Link>
        <Link to='lesson-11'><div>Lesson 11</div></Link>

        <Link to='lesson-12'> <div>Lesson 12</div></Link>

        
        {/* <div>Lesson 4</div>
        <div>Lesson 5</div>
        <div>Lesson 6</div>
        <div>Lesson 7</div>
        <div>Lesson 8</div>
        <div>Lesson 9</div>
        <div>Lesson 10</div>
        <div>Lesson 11</div> */}
      </div>
    </div>
  );
};

export default HomePage;