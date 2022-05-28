import { Button, Form, Input } from "antd";
// import "antd/dist/antd.css";
import "./Globle.css";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginAction } from "./redux/actions/auth.actions";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isSignedIn } = useSelector((state) => state.auth);
  console.log(isSignedIn);
  // useEffect(() => {
  //   if (isSignedIn) {
  //     window.location.pathname = "/dashboard";
  //   }
  // }, [isSignedIn]);
  const handleLogin = async (values) => {
    console.log(values);
    const res = await dispatch(loginAction(values));
    console.log(res);
    if (!res) {
      navigate("/dashboard");
    }
  };
  return (
    <>
      <div style={{ display: "flex" }} className='login_page'>
        <div className='flex1'>
          {/* <img className='login_img1' src='/images/logopen.svg' alt=''></img>
          <p style={{ marginBottom: "" }} className='login_text'>
            Welcome! Let’s get started where you left.
          </p> */}

          <img className='login_img1' src='/images/logo.jpeg' alt=''></img>
        </div>
        <div className='flex2'>
          <img className='phone_sec' src='/images/logo.jpeg' alt=''></img>
          <p className='login_title'>Smart Hydroponics</p>

          <Form
            style={{ width: "100%", marginLeft: "100px" }}
            autoComplete='off'
            labelCol={{ span: 10 }}
            wrapperCol={{ span: 14 }}
            onFinish={(values) => {
              handleLogin(values);
            }}
            onFinishFailed={(error) => {}}>
            <div className='inputs_login'>
              <div className='input_lable'>Email</div>
              <Form.Item
                className='email_input'
                name='email'
                // label="Email"
                rules={[
                  {
                    required: true,
                    message: "Please enter your email",
                  },
                  { type: "email", message: "Please enter a valid email" },
                ]}
                hasFeedback>
                <Input placeholder='Enter Email' />
              </Form.Item>
            </div>
            <div className='inputs_login'>
              <div className='input_lable'>Password</div>
              <Form.Item
                name='password'
                rules={[
                  {
                    required: true,
                  },
                  { min: 8 },
                  {
                    validator: (_, value) =>
                      value ? Promise.resolve() : Promise.reject(""),
                  },
                ]}
                hasFeedback>
                <Input.Password placeholder='Enter Password' />
              </Form.Item>
            </div>

            <Form.Item style={{ marginLeft: "100px" }}>
              <div style={{ textAlign: "center" }}>
                <Button
                  // loading={loading}
                  className='login_btn'
                  htmlType='submit'>
                  Login
                </Button>
                <p>
                  Don't Have an account?{" "}
                  <Link
                    to='/signup'
                    style={{
                      color: "blue",
                      textDecoration: "underline",
                      fontWeight: "bold",
                    }}>
                    SignUp
                  </Link>
                </p>
              </div>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
}

export default Login;
