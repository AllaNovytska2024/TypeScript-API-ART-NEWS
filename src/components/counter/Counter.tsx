import { useState } from 'react';
import './counter.css'
import MyButton from '../myButton/MyButton';

export default function Counter() {
  const [count, setCount] = useState<number>(0);

  console.log(count);

  const handleMinus = ():void => {
    setCount(prev => prev - 10);
  };

  const handlePlus = ():void => {
    // handlePlus1()
    setCount(prev => prev + 10);
  };
  return (
    <div className="counter">
      <MyButton onClick={handleMinus} text='-'/>
      <span>{count}</span>
      <MyButton onClick={handlePlus} text='+' isPrimary={true}/>
    </div>
  );
}