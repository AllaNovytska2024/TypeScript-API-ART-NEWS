import { useNavigate } from 'react-router-dom';
import likeImg from '../../../../assets/image/colibry.jpg';

import styles from '../buttonLikeImg/buttonLikeImg.modules.css';


export default function ButtonLikeImg() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ledy-art');
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      <img className={styles.btn_like} src={likeImg} alt="like" />
    </button>
  );
}