// import React, { useEffect, useState } from "react";
// import { getAllAttornies } from "../api/apiFunctions";

// const Facility = ({ onChange, disabled, name }) => {
//   const [facilities, setFacilities] = useState([]);
//   const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     (async () => {
//       const data = await getAllAttornies("all-mrifacility");
//       setFacilities(data.data.mri_facility);
//       setLoading(false);
//     })();
//   }, []);
//   return (
//     <div className="">
//       {loading || (
//         <div>
//           <label className="inputStatee" htmlFor="inputState">
//             Facility
//           </label>
//           <select
//             id="inputState"
//             className="form-control"
//             name={name}
//             placeholder="Select Facility"
//             onChange={onChange}
//             defaultValue={facilities[0]}
//             disabled={disabled}
//           >
//             {facilities?.map((facility) => (
//               <option value={facility.mriFacility} key={facility._id}>
//                 {facility.mriFacility}
//               </option>
//             ))}
//           </select>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Facility;
