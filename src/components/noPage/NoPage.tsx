// import styles from './noPage.module.css'
import gif from "../myGifts/composing-2925179_1920.jpg"
const NoPage = () => {
    return (
      <div className='noPageContainer'>
        <h2>404: no such page 😥</h2>
       
        <div className="noPageImg">
 <img src={gif} alt="" />




        </div>


        <div>
        <footer className="footer-Art">
        <form
          className="myButtonFoot-Art"
          action="https://google.com/search"
        >
          <label htmlFor="search-input">Можно найти все!</label>
          <input
            type="text"
            id="search-input"
            name="q"
            placeholder="Enter query..."
          />
          <input type="submit" value="Search" />
        </form>
        Alla Novytska practice Type Script API @2024
        <div className="but-greed-Art feedback-container">
          <button className="myButtonFoot-Art" type="button">
            обо мне
          </button>
          <button className="myButtonFoot-Art" type="button">
            соцсети
          </button>
          <button className="myButtonFoot-Art" type="button">
            профессии
          </button>
          <button className="myButtonFoot-Art" type="button">
            хобби
          </button>
          <button className="myButtonFoot-Art" type="button">
            мои сайты
          </button>
        </div>
      </footer>


        </div>
      </div>

      
    );
  };
  
  export default NoPage;