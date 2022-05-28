// import { Form, Input, Select, Space, Typography } from "antd";
// import React, { useState } from "react";
// const { Option } = Select;
// const CaseType = ({ selectedPatient, changeSelected }) => {
//   const [caseType, setCaseType] = useState(["Headache", "Normal"]);
//   const [name, setName] = useState("");
//   const onNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const addItem = (e) => {
//     e.preventDefault();
//     setCaseType([...caseType, name]);
//     setName("");
//   };
//   return (
//     <div>
//       <Form.Item label="Case Type">
//         <Select
//           style={{ width: 300 }}
//           placeholder="Select Case Type"
//           onChange={(event) =>
//             changeSelected({ ...selectedPatient, caseType: event })
//           }
//           value={selectedPatient.caseType}
//           dropdownRender={(menu) => (
//             <>
//               {menu}
//               <Space align="center" style={{ padding: "0 8px 4px" }}>
//                 <Input
//                   placeholder="Please enter item"
//                   value={name}
//                   onChange={onNameChange}
//                   name="caseType"
//                 />
//                 <Typography.Link
//                   onClick={addItem}
//                   style={{ whiteSpace: "nowrap" }}
//                 >
//                   Add item
//                 </Typography.Link>
//               </Space>
//             </>
//           )}
//         >
//           {caseType.map((item) => (
//             <Option key={item}>{item}</Option>
//           ))}
//         </Select>
//       </Form.Item>
//     </div>
//   );
// };

// export default CaseType;
