import ReactDOM from "react-dom/client";
import "./index.css";

import FetchArtNews from "./artApiNews/ArtApiNews";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <>
   <FetchArtNews/>
  </>
);
