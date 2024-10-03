import { NavLink } from "react-router-dom";
import styles from "./header.module.css";
import gif from "../../../assets/gift/myGifts/glitter-ball-10892_128.gif";
import { useCart } from "../../aPI/shopingAPI/context/CartContext";

const Header = () => {
  // ! данные из контекста доступны из любого компонента
  const { cart } = useCart();

  const calculateTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <header className={styles.header}>
      <img className="imgSize" src={gif} alt="" />

      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"/"}
        >
          Lessons
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"lesson-ShoopingAPI"}
        >
          Shoping API 🛒
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"fetch-dog"}
        >
          Dog API
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"fetch-cat"}
        >
          Cat API
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"fetch-fox"}
        >
          Fox API
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"ledy-art"}
        >
          Ledy Art
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"lesson-noPage"}
        >
          Lesson NoPage
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"art-API-News"}
        >
          Art API NEWS
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"gender-Form"}
        >
          Gender Form
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"counter"}
        >
          Counter
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"feedback"}
        >
          Feedback
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"my-form"}
        >
          MyForm
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"shop"}
        >
          Shop🛒
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? styles.linkActive : "")}
          to={"cart"}
        >
          Cart🛒
        </NavLink>
      </nav>
      {/* отображаем данные из корзины в header */}
      <span>🛒Cart: €{calculateTotalPrice().toFixed(2)}</span>
    </header>
  );
};

export default Header;
