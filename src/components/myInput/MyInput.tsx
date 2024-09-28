interface IInputProps {
  label: string;
  placeholder: string;
  type: "email" | "password" | "text";
  name: string;
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
