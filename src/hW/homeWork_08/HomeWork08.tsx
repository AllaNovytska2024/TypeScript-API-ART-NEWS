import { useEffect, useState } from 'react';
import Loader from '../../components/loaderDm/LoaderDm';
// импорт css модулей происходит в переменной
import styles from "./homeWork08.module.css";

export default function HomeWork08() {
    // 1. типизация для объекта из API
    interface IFox {
      image: string;
      link: string;
    }
  
  
    // 2. state хранилище и функция его изменения
    const [fox, setFox] = useState<IFox>({
      image: "",
      link: ""
    });
  
    // * state для хранения переменной переключателя от которой будет зависеть показ loader
    const [loading, setLoading] = useState<boolean>(true);
  
    const getFox = () => {
      fetch('https://randomfox.ca/floof/')
        .then(res => res.json())
        .then(data => {
          // этим действием мы данные из data записываем в переменную состояния fox
          setFox(data);
          // * меняем положение переключателя loader в положении false после получения данных
          setLoading(false);
        });
    };
  
    // 3. делаем fetch запрос к API и кладем данные в state
    useEffect(() => {
      // немного замедляем вызов функции получения данных, чтобы loader подольше крутился
      setTimeout(() => {
        getFox();
      }, 1000);
    }, []);
  
    return (
      <div className='lesson-container'>
        {/* тернарный оператор зависящий от значения в loading - если в нем true мы видим верстку после '?' - если false - после ':' */}
        {loading ? <Loader /> :
          // применение классов из css модулей идет по обращению к переменной через точку
          // обращение происходит в фигурных скобках
          // название классов пишут в camel case
          <div className={styles.foxWrapper}>
            <img src={fox.image} alt="fox" />
          </div>}
  
      </div>
    );
  }