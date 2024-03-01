"use client";
import { Button, Col, Row } from "antd";
import React from "react";
import loginImage from "@/assets/login.png";
import Image from "next/image";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import { SubmitHandler } from "react-hook-form";

type FormValues = {
  id: string;
  password: string;
};
const LoginPage = () => {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    try {
      console.log("data",data);
    } catch (error) {
        console.log('error', error);
    }
  };
  return (
    <Row>
      <Col sm={12} md={16} lg={16}>
        <Image src={loginImage} width={500} alt="login-imag" />
      </Col>
      <Col sm={12} md={8} lg={8}>
        <h1>Firs login your account.</h1>
        <>
          <Form submitHandler={onSubmit}>
            <div>
              <FormInput name="id" type="text" size="large" label="User Id" />
            </div>
            <div>
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
