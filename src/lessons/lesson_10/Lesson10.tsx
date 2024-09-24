import { useEffect, useState } from "react";
import FetchCat from "../../components/fetchCat/FetchCat";
import style from "./lesson10.module.css";


const Lesson10 = () => {
return (
<div >
    <header className='allContainer'>
        <h1 className="fontEffectFireAnimation">Lesson10</h1>
    </header>
    
   <FetchCat/>

</div>
)
}

export default Lesson10;
