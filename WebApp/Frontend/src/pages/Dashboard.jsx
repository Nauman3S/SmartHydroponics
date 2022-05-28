import React, { useCallback, useEffect } from "react";
import Client from "./Client";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfile } from "../redux/actions/auth.actions";
import { getToken } from "../redux/localstorage/index";
import SideBar from "../components/Sidebar/SideBar";

const Dashboard = () => {
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const profile = useCallback(() => {
    const token = getToken();

    if (token && !authState.isSignedIn) {
      dispatch(fetchProfile());
    }
  }, [authState.isSignedIn, dispatch]);

  useEffect(() => {
    profile();
  }, [profile]);
  console.log(authState);

  return <Client />;
};
export default Dashboard;
