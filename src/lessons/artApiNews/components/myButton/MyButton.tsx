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

