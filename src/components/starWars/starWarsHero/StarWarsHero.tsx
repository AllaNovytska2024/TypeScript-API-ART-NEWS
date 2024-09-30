import cn from 'classnames';
import { v4 } from "uuid";
import styles from '../starWarsHero/starWarsHero.module.css';

// интерфейс описывающий объект props, который мы деструктуризируем в круглых скобках компонента и передаем из родителя (там где был вызван компонент)

interface IStarWarsHeroProps {
  name: string;
  age: number;
  image: string;
  isDark: boolean;
  lightsaberColors: string[];
}

const StarWarsHero = ({ name, age, image, lightsaberColors, isDark }: IStarWarsHeroProps) => {
  return (
    <div className={cn(styles.heroCard, {
      // styles.heroCard - применится в любом случае
      // styles.darkStyle - применится, если isDark - true
      [styles.darkStyle]: isDark
    })}>
      <h4>{name}</h4>
      <p>Age: {age}</p>
      <div className={styles.imageWrapper}>
        <img src={image} alt="img" />
      </div>
      <p>
        Lightsaber colors:{" "}
        {lightsaberColors.map(el => (
          <span style={{ color: `${el}` }} key={v4()}>
            {el}{" "}
          </span>
        ))}
      </p>
    </div>
  );
};

export default StarWarsHero;