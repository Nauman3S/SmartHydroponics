import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import SideBar from "./components/Sidebar/SideBar";
import Login from "./Login";

import Dashboard from "./pages/Dashboard";
import AllPatientData from "./pages/AllUsersData";

import Users from "./pages/Users";
import Signup from "./SignUp";
////utilities////

// import { loadProfile } from "./redux/actions/auth.actions";

export default function AppRoutes() {
  const authState = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (!loading) {
  //     // if (window.location.pathname !== "/") dispatch(loadProfile());
  //   }

  //   return () => {};
  // }, [dispatch, loading]);
  return (
    <>
      <Routes>
        <Route exact path='/' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />

        {/* {authState.isSignedIn || <Route path='/*' element={<Login />} />} */}
      </Routes>
      {authState.isSignedIn && (
        <SideBar>
          <Routes hi>
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/users' element={<Users />} />

            <Route path='/all-users-data' element={<AllPatientData />} />
          </Routes>
        </SideBar>
      )}
    </>
  );
}
