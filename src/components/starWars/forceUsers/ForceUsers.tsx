import { forceUsers } from "./data";
import styles from "./forceUsers.module.css";
// uuid -  библиотека для работы с уникальными идентификаторами
import { v4 } from "uuid";
import StarWarsHero from "../starWarsHero/StarWarsHero";

const ForceUsers = () => {
  return (
    <div className={styles.gridContainer}>
      {forceUsers.map((hero, index) => (
        // либо воспользуйтесь сторонней библиотекой uuid
        <StarWarsHero
          isDark={hero.isDark}
          key={v4()}
          age={hero.age}
          name={hero.name}
          image={hero.image}
          lightsaberColors={hero.lightsaberColors}
        />
      ))}
    </div>
  );
};

export default ForceUsers;
