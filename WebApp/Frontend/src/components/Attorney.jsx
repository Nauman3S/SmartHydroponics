// import React, { useEffect, useState } from "react";
// import { getAllAttornies } from "../api/apiFunctions";

// const Attorney = ({ onChange, selectedPatient }) => {
//   const [attornies, setAttornies] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     (async () => {
//       const attornieData = await getAllAttornies("all-attornies");
//       setAttornies(attornieData.data.attornies);
//       setLoading(false);
//     })();
//   }, []);

//   return (
//     <div className="">
//       {loading || (
//         <div>
//           <label className="inputStatee" htmlFor="inputState">
//             Attorney
//           </label>
//           <select
//             id="inputState"
//             className="form-control"
//             name="attorney"
//             placeholder="Select Attorney"
//             onChange={onChange}
//           >
//             {attornies.map((attornie) => (
//               <option
//                 selected={attornie._id === selectedPatient}
//                 value={attornie._id}
//                 key={attornie._id}
//               >
//                 {attornie.attorney}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Attorney;
