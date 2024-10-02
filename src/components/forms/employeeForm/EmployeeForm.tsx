import MyInput from "../myInput/MyInput";

export function EmployeeForm() {
  return (
    <form action="">
      <MyInput label="EmployeerName" placeholder="name" type="text" name="" />
      <MyInput
        label="EmployeerSalary"
        placeholder="salary"
        type="number"
        name=""
      />
      <label htmlFor="agree"> I agree </label>
      <input type="checkbox" id="agree" />
    </form>
  );
}

export default EmployeeForm;
