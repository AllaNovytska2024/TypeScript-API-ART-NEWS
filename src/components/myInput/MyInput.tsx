


interface IInputProps {
  label: string
  placeholder: string
  type: 'email' | 'password' | 'text'
  name: string
}
  
function MyInput({ label, placeholder, type, name }: IInputProps) {
  return (
    <>
      {/* сопроводительный текст из label */}
      <label>{label}</label>
      <input placeholder={placeholder} type={type} name={name} />
    </>
  );
}

export default MyInput;

// function MyInputProps({ label, placeholder = () => console.log('label'), type = 'type', name = 'name'}: IMyButtonProps) {
//     return <label type={type} onClick={onClick} className={`myButton ${isPrimary ? 'primary' : ''}`}>{text}</button>;
//   }



// на память jsx
// export default MyInput;
// function MyInput({ label, placeholder, type, name }) {
//   return (
//     <>
//       {/* сопроводительный текст из label */}
//       <label >{label}</label>
//       <input placeholder={placeholder} type={type} name={name} />
//     </>
//   );
// }

// export default MyInput;
