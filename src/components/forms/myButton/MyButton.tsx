import cn from "classnames";
import styles from "./myButton.module.css";

// типизация для объекта props
interface IMyButtonProps {
  text: string;
  isPrimary?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  // price ?:number;
}

function MyButton({
  text,
  onClick = () => console.log("click!"),
  type = "button",
  isPrimary = false,
  // price = 0,
}: IMyButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(styles.myButton, {
        // если значение верное - имя ключа добавится в качестве строчного значения для класса
        // если значение приходит из объекта styles
        // через обращение по ключу - мы используем фигурные скобки
        [styles.primary]: isPrimary,
      })}
      // className={`myButton ${isPrimary ? 'primary' : ''}`}
    >
      {text}
    </button>
  );
}

export default MyButton;
