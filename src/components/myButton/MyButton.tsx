import "./myButton.css";

// типизация для объекта props
interface IMyButtonProps {
  text: string;
  isPrimary?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

function MyButton({ text, onClick = () => console.log('click!'), type = 'button', isPrimary = false }: IMyButtonProps) {
  return <button type={type} onClick={onClick} className={`myButton ${isPrimary ? 'primary' : ''}`}>{text}</button>;
}

export default MyButton;

// import "./myButton.css";
// jsx вариант нв память
// // мы забираем переданные данные в круглых скобках
// // обычно мы используем деструктуризацию для того чтобы достать значения пропсов по ключам и положить их в соответствующие переменные
// function MyButton({text, onClick, type}) {
//   return <button type={type} onClick={onClick} className="myButton">{text}</button>;
// }

// export default MyButton;