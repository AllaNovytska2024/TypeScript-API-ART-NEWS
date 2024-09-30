// import styles from "./noPage.module.css";
// import gifMonkay from "../myGifts/composing-2925179_1920.jpg";
import gif2 from "../../components/gift/myGifts/monkeyDenken.jpg"

const NoPage = () => {
  return (
    <div className="noPageContainer">
      <h2>404: no such page 😥</h2>

      <div className="noPageImg">
        <img src={gif2} alt="" />
      </div>

      {/* <img className="imgSize" src={gif2} alt="" /> */}
    </div>
  );
};

export default NoPage;
