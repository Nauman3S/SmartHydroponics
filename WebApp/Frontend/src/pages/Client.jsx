import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu } from "antd";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
import DashboardData from "../components/Patient-appointment/DashboardData";
import Userdata from "../components/Userdata";
// import { loadProfile } from "../redux/actions/auth.actions";
const Client = () => {
  //   const { isSignedIn } = useSelector((state) => state.auth);
  //   const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!loading) {
  //     dispatch(loadProfile());
  //   }
  // }, [loading, dispatch]);

  // const menu = (
  //   <Menu>
  //     <Menu.Item key='0'>
  //       <a href='https://www.antgroup.com'>1st week</a>
  //     </Menu.Item>
  //     <Menu.Item key='1'>
  //       <a href='https://www.aliyun.com'>2nd week</a>
  //     </Menu.Item>
  //     <Menu.Divider />
  //     <Menu.Item key='3'>3rd week</Menu.Item>
  //   </Menu>
  // );
  return (
    <div className=''>
      {/* <DashboardHeader /> */}
      <div className='dashboard-contents'>
        <div
          className='dash_title
      pt-2'>
          Dashboard
        </div>
        <div>
          {/* <Dropdown className='pr-5' overlay={menu} trigger={["click"]}>
            <div
              className='ant-dropdown-link'
              onClick={(e) => e.preventDefault()}>
              Weekly <DownOutlined />
            </div>
          </Dropdown> */}
        </div>
      </div>

      <Userdata />
      <DashboardData />
      {/* { <Navigate to={"/"} />} */}
    </div>
  );
};

export default Client;
