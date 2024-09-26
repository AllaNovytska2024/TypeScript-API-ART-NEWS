// import styles from './noPage.module.css'
import gif from "../myGifts/character-13952_128.gif"
const NoPage = () => {
    return (
      <div className='lesson-container'>
        <h2>404: no such page 😥</h2>
        <img src={gif} alt="" />
        <div className="noPageImg"></div>
      </div>
    );
  };
  
  export default NoPage;