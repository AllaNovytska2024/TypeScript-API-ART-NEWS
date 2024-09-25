import { useState } from "react";
import MyButton from "../myButton/MyButton";
import "./feedback.css";

function Feedback() {
  const [like, setLike] = useState<number>(5);
  const [dislike, setDislike] = useState<number>(0);

  const handleLike = (): void => {
    setLike((prev) => prev + 1);
  };
  const handleDislike = (): void => {
    setDislike((prev) => prev + 1);
  };

  const handleReset = (): void => {
    setLike(0);
    setDislike(0);
  };

  return (
    <div>
      <div className="counter-container">
        <span>{like}</span>
        <MyButton isPrimary={true} onClick={handleLike} text={"Like👍"} />
        <MyButton onClick={handleDislike} text={"👎Dislike"} />
        <span>{dislike}</span>
      </div>
      <div className="all-container">
        <MyButton text={"Reset results ♻️"} onClick={handleReset} />
      </div>
    </div>
  );
}

export default Feedback;
