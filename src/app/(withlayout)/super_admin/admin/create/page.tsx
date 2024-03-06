"use client";
import Form from "@/components/Forms/Form";
import FormInput from "@/components/Forms/FormInput";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { getUserInfo } from "@/services/auth.service";
import { Col, Row } from "antd";
import React from "react";

const CreateAdminPage = () => {
  const onSubmit = async (data: any) => {
    try {
      console.log(data);
    } catch (err: any) {
      console.log("err", err);
    }
  };
  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `super_admin`,
            link: `/super_admin`
          },
          {
            label: `admin`,
            link: `/super_admin/admin`
          }
        ]}
      />
      <h1>Create Admin</h1>
      <div>
        <Form submitHandler={onSubmit}>
          <Row gutter={{ xs: 8 , sm:8}}>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="firstName"
                size="large"
                label="First Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="middleName"
                size="large"
                label="Middle Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="text"
                name="lastName"
                size="large"
                label="first Name"
              />
            </Col>
            <Col className="gutter-row" span={8}>
              <FormInput
                type="password"
                name="password"
                size="large"
                label="Password"
              />
            </Col>
          </Row>
        </Form>
      </div>
    </div>
  );
};

export default CreateAdminPage;
