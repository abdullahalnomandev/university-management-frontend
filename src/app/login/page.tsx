"use client";
import { Button, Col, Row } from "antd";
import React from "react";
import loginImage from "@/assets/login.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";
import { useUserLoginMutation } from "@/redux/api/authApi";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {

  const [userLogin] = useUserLoginMutation();
  const onSubmit: SubmitHandler<FormValues> = async (data:any) => {
    try {
      const res = await userLogin({...data}).unwrap();
      console.log(res);

    } catch (err) {
      console.log(err);
    } 
  };
  return (
    <Row
      justify="center"
      align="middle"
      style={{
        minHeight: "100vh"
      }}
    >
      <Col sm={12} md={16} lg={10}>
        <Image src={loginImage} width={500} alt="login-imag" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1
          style={{
            margin: "15px 0"
          }}
        >
          First login your account.
        </h1>
        <>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div
              style={{
                margin: "15px 0"
              }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                label="User password"
              />
            </div>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form>
        </>
      </Col>
    </Row>
  );
};

export default LoginPage;
