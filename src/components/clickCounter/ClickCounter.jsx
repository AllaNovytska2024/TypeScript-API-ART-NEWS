import MyButton from "../myButton/MyButton";

function ClickCounter() {
    return (
        <div>
         <MyButton type="button" text="+"/>
        <MyButton type="button" text="сброс"/> 
        <div> 0 </div> 
        <div>Лимит достигнут</div>  
        </div>
   
         
     )
        
}
export default ClickCounter;
