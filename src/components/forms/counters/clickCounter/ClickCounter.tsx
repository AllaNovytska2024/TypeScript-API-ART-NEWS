import { useState } from "react";
import MyButton from "../../myButton/MyButton";
// import cn from "classnames";

function ClickCounter() {
  const [count, setCount] = useState<number>(0);
  const handleReset = (): void => {
    setCount(0);
  };
  const handlePlus = (): void => {
    if (count < 5) {
      setCount((prev) => prev + 1);
    }
  };

  return (
    <div>
      <MyButton type="button" text="+" onClick={handlePlus} />
      <MyButton type="button" text="сброс" onClick={handleReset} />
      <div> {count} </div>
      <div>Лимит достигнут</div>
    </div>
  );
}
export default ClickCounter;
