import { NavLink } from 'react-router-dom';
import styles from './header.module.css'
import gif from "../../../assets/gift/myGifts/glitter-ball-10892_128.gif"
const Header = () => {
  return (
    <header className={styles.header}>
        <img className="imgSize" src={gif} alt="" />
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
          shopingAPI
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
        >Lesson NoPage</NavLink>
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
      </header>
  );
};

export default Header;