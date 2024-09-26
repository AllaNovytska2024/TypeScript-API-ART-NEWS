// import { useEffect, useState } from "react";
import FetchCat from "../../components/fetchCat/FetchCat";
import style from "./lesson10.module.css";
// import cn from 'classnames';

const Lesson10 = () => {
return (
<div >
    <header className={style.header}>
        <h1 className="font-effect-fire-animation">Lesson10</h1>
    </header>
    
   <FetchCat/>

</div>
)
}

export default Lesson10;
