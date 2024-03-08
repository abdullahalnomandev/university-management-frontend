"use client"
import { Col, Row } from 'antd';
import React from 'react';
import FormInput from '../Forms/FormInput';
import FormSelectField from '../Forms/FormSelectField';
import { bloodGroupOptions, genderOptions } from '@/constants/global';
import FormTextArea from '../Forms/FormTextArea';
import FormDatePicker from "../Forms/FormDatePicker";
const StudentBasicInfo = () => {
    return (
      <div
        style={{
          border: "1px solid #d9d9d9",
          borderRadius: "5px",
          padding: "15px",
          marginBottom: "10px",
          marginTop: "5px"
        }}
      >
        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
          Basic information
        </p>
        <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              type="email"
              name="student.email"
              label="Email address"
              size="large"
            />
          </Col>

          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="student.contactNo"
              label="Contact no."
              size="large"
            />
          </Col>

          <Col span={8} style={{ margin: "10px 0" }}>
            <FormInput
              name="student.emergencyContactNo"
              label="Emergency contact no."
              size="large"
            />
          </Col>

          <Col span={12} style={{ margin: "10px 0" }}>
            <FormDatePicker
              size="large"
              name="student.dateOfBirth"
              label="Date of birth"
            />
          </Col>

          <Col span={12} style={{ margin: "10px 0" }}>
            <FormSelectField
              name="student.bloodGroup"
              options={genderOptions}
              size="large"
              label="Blood group"
              placeholder="Select"
            />
          </Col>

          <Col span={12} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="student.presentAddress"
              label="Present address"
              rows={4}
            />
          </Col>

          <Col span={12} style={{ margin: "10px 0" }}>
            <FormTextArea
              name="student.permanentAddress"
              label="Permanent address"
              rows={4}
            />
          </Col>
        </Row>
      </div>
    );
};

export default StudentBasicInfo;