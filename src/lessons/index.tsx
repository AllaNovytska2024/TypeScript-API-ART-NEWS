import ReactDOM from "react-dom/client";
import "./index.css";

// import reportWebVitals from "../reportWebVitals";

// import Lesson08 from "./lesson_08/Lesson08";
// import Lesson07 from "./lesson_07/Lesson07";
import FetchDog from "../components/fetchDog/FetchDog";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
    <FetchDog />
  </>
);

// export default reportWebVitals();
