// import { useState } from "react";
// import MyButton from "../myButton/MyButton";
// import "./feedback.css";

// function Feedback() {
//   const [like, setLike] = useState(5);
//   const [dislike, setDislike] = useState(0);

//   const handleLike = () => {
//     setLike((prev) => prev + 1);
//   };
//   const handleDislike = () => {
//     setDislike((prev) => prev + 1);
//   };

//   const handleReset = () => {
//     setLike(0);
//     setDislike(0);
//   };

//   return (
//     <div>
//       <div className="feedback-container">
//         <span>{like}</span>
//         <MyButton isPrimary={true} onClick={handleLike} text={"👍Like👍"} />
//         <MyButton onClick={handleDislike} text={"👎Dislike👎"} />
//         <span>{dislike}</span>
//       </div>
//       <div className="feedback-container">
//         <MyButton text={"♻️Reset results "} onClick={handleReset} />
//       </div>
//     </div>
//   );
// }

// export default Feedback;
