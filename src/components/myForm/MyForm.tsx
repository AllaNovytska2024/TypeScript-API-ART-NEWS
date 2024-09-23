import MyButton from "../myButton/MyButton";
import MyInput from "../myInput/MyInput";
import './myForm.css'

function MyForm() {



  return (
    <form className='myForm'>
      <MyInput name='login' label={'login'} placeholder={'login'} type={'text'} />
      <MyInput name='password' label={'pass'} placeholder={'password'} type={'password'} />
      <MyInput name='email' label={'email'} placeholder={'email'} type={'email'} />
      <MyButton text={'авторизация'} type='submit' onClick={() => console.log('login!!')}  />
    </form>
  );
}

// label, placeholder, type, name

export default MyForm;