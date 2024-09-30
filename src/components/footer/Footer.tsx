import styles from './footer.module.css'
import gif from "../gift/myGifts/glitter-ball-10892_128.gif"

const Footer = () => {
return (
  <footer className="footer-Art">
  <form className="myButtonFoot-Art" action="https://google.com/search">
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
  <img className="imgSize" src={gif} alt="" />
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
    </button><img className="imgSize" src={gif} alt="" />
  </div>
</footer>
)
}

export default Footer;