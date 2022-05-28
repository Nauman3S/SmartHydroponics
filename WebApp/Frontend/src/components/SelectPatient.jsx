// import React from "react";
// import { Form, Select } from "antd";
// const { Option } = Select;
// const SelectPatient = ({ setSelectedPatient, patientList }) => {
//   return (
//     <div>
//       <Form.Item label="Select Patient">
//         <Select
//           showSearch
//           placeholder="Select a Patient"
//           optionFilterProp="children"
//           size="large"
//           style={{ width: 200 }}
//           onChange={(e) =>
//             setSelectedPatient(patientList.find((patient) => patient._id === e))
//           }
//           filterOption={(input, option) =>
//             option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
//           }
//         >
//           {patientList.map((patient) => (
//             <Option
//               key={patient._id}
//               value={patient._id}
//             >{`${patient?.firstName} ${patient?.lastName}`}</Option>
//           ))}
//         </Select>
//       </Form.Item>
//     </div>
//   );
// };

// export default SelectPatient;
