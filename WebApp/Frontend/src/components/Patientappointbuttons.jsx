// import React from "react";
// import { Link, useLocation } from "react-router-dom";

// const Patientappointbuttons = () => {
//   const location = useLocation();

//   // const [toggleState, setToggleState] = useState(1);
//   // const toggleTab = (index) => {
//   //   setToggleState(index);
//   // };

//   const array = [
//     { url: "/edit-patient", name: " Edit patient" },
//     { url: "/make-ortho-appt", name: "Make Ortho appt" },
//     { url: "/make-mri-appt", name: " Make MRI appt" },
//     { url: "/make-neuro-appt", name: "Make Neuro appt" },
//     { url: "/pain-managment", name: "Pain Management" },
//     { url: "/makemd-appt", name: "Make MD appt" },
//     { url: "/spinal-surgeon", name: "Spinal Surgeon" },
//     { url: "/nurse-practitioner", name: "Nurse Practitioner" },
//     { url: "/physical-therapy", name: "Physical Therapy" },
//     { url: "/chiropractic", name: "Chiropractic" },
//     { url: "/OutsideReferral", name: "Outside Referral" },
//     { url: "/specialist1", name: "Specialist 1" },
//     { url: "/specialist2", name: "Specialist 2" },
//   ];
//   return (
//     <div className="w-[96%]">
//       <div className=" edit_tab mr-4 mt-5 mr-5 px-[5px] py-[12px] pr-[20px] bg-[#F2F2F2] rounded-[7px] ">
//         {array.map((item) => {
//           return (
//             <Link key={item.url} to={`${item.url}`}>
//               <button
//                 className={
//                   location.pathname === item.url
//                     ? "statebtn1 ssd mx-2 "
//                     : " text-[14px] text-[#7e7e7e] my-3 font-semibold ssd2 bg-none"
//                 }
//                 // onClick={() => toggleTab(2)}
//               >
//                 {item.name}
//               </button>
//             </Link>
//           );
//         })}
//         <br />
//       </div>
//     </div>
//   );
// };

// export default Patientappointbuttons;
