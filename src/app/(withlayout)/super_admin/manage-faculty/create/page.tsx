"use client"
import Form from '@/components/Forms/Form';
import FormInput from '@/components/Forms/FormInput';
import FormSelectField from '@/components/Forms/FormSelectField';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { bloodGroupOptions, departmentOptions, genderOptions } from '@/constants/global';
import { Button, Col, Row } from 'antd';
import React from 'react';
import FormDatePicker from '@/components/Forms/FormDatePicker';
import FormTextArea from '@/components/Forms/FormTextArea';
import { yupResolver } from '@hookform/resolvers/yup';
import UploadImage from '@/components/ui/UploadImage';

const CreateFacultyPage = () => {

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
              label: `super_faculty`,
              link: `/super_faculty`
            },
            {
              label: `manage-faculty`,
              link: `/super_faculty/manage-faculty`
            }
          ]}
        />
        <h1>Create Faculty</h1>
        <div>
          <Form submitHandler={onSubmit}>
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px"
              }}
            >
              <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                faculty information
              </p>
              <Row gutter={{ xs: 8, sm: 8 }}>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="faculty.name.firstName"
                    size="large"
                    label="First Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="faculty.name.middleName"
                    size="large"
                    label="Middle Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="faculty.name.lastName"
                    size="large"
                    label="Last Name"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="password"
                    name="password"
                    size="large"
                    label="Password"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormSelectField
                    name="faculty.gender"
                    options={genderOptions}
                    size="large"
                    label="Gender"
                    placeholder="Select"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormSelectField
                    name="faculty.managementDepartment"
                    options={departmentOptions}
                    size="large"
                    label="Department"
                    placeholder="Select"
                  />
                </Col>

                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <UploadImage name="file" />

                </Col>
              </Row>
            </div>

            {/* BASIC INFO  */}
            <div
              style={{
                border: "1px solid #d9d9d9",
                borderRadius: "5px",
                padding: "15px",
                marginBottom: "10px"
              }}
            >
              <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                Basic information
              </p>
              <Row gutter={{ xs: 8, sm: 8 }}>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="email"
                    name="faculty.email"
                    size="large"
                    label="E-mail"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="faculty.contactNo"
                    size="large"
                    label="Contact Number"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="faculty.emergencyContactNo"
                    size="large"
                    label="Emergency Contact Number"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormDatePicker
                    size="large"
                    name="faculty.dateOfBirth"
                    label="Date of birth"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormSelectField
                    name="faculty.bloodGroup"
                    options={bloodGroupOptions}
                    size="large"
                    label="Blood Group"
                    placeholder="Select"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={8}
                  style={{ marginBottom: "10px" }}
                >
                  <FormInput
                    type="text"
                    name="faculty.designation"
                    size="large"
                    label="Designation"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{ marginBottom: "10px" }}
                >
                  <FormTextArea
                    rows={3}
                    name="faculty.presentAddress"
                    label="Present Address"
                  />
                </Col>
                <Col
                  className="gutter-row"
                  span={12}
                  style={{ marginBottom: "10px" }}
                >
                  <FormTextArea
                    rows={3}
                    name="faculty.permanentAddress"
                    label="Permanent Address"
                  />
                </Col>
              </Row>
            </div>

            <Button type="primary" htmlType="submit">
              Create
            </Button>
          </Form>
        </div>
      </div>
    );
};

export default CreateFacultyPage;