import ForceUsers from "../../components/aPI/starWars/forceUsers/ForceUsers";

function Lesson05() {
  return (
    <div className={"lesson-container"}>
      <h2>Lesson 5. map() components</h2>
      {/* используйте необязательный параметр index для передачи при итерации с key props */}
      <ForceUsers />
    </div>
  );
}

export default Lesson05;

// import { forceUsers } from "./data";
// // uuid -  библиотека для работы с уникальными идентификаторами
// import { v4 } from "uuid";
// function Lesson05() {
//   return (
//     <div className={"all-container"}>
//       <h2>Lesson 5. map() components</h2>
//       {/* используйте необязательный параметр index для передачи при итерации с key props */}
//       {forceUsers.map((hero, index) => (
//         // либо воспользуйтесь сторонней библиотекой uuid
//         <div key={v4()}>
//           <h4>{hero.name}</h4>
//           <p>Age: {hero.age}</p>
//           <img src={hero.image} width={200} alt="img" />
//           <p>
//             Lightsaber colors:{" "}
//             {hero.lightsaberColors.map((el) => (
//               <span style={{ color: `${el}` }} key={v4()}>
//                 {el}{" "}
//               </span>
//             ))}
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Lesson05;
