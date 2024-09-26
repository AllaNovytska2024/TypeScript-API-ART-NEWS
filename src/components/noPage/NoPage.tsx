// import styles from './noPage.module.css'
import gif from "../myGifts/composing-2925179_1920.jpg"
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