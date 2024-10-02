import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import gif from "../../../assets/gift/myGifts/glitter-ball-10892_128.gif";
import Footer from "../footer/Footer";
import Header from "../header/Header";

const Layout = () => {
  return (
    <div className={styles.pageWrapper}>
      <Header />
      <main className={styles.main}>
        {/* за место компонента outlet импортированного из библиотеки react-router-dom будут приходить компоненты из routing, чьи пути мы пропишем в index.tsx */}
        <Outlet />
        {/* здесь мог бы быть (и будет)  ваш компонент */}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
