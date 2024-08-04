"use client";
import Form from "@/components/Forms/Form";
import FormDatePicker from "@/components/Forms/FormDatePicker";
import FormInput from "@/components/Forms/FormInput";
import FormSelectField from "@/components/Forms/FormSelectField";
import FormTextArea from "@/components/Forms/FormTextArea";
import UMBreadCrumb from "@/components/ui/UMBreadCrumb";
import { bloodGroupOptions, genderOptions } from "@/constants/global";
import { useAdminQuery, useUpdateAdminMutation } from "@/redux/api/adminApi";
import {
    useDepartmentsQuery,
} from "@/redux/api/departmentApi";
import { IDepartment } from "@/types";
import { Button, Col, Row, message } from "antd";
import React from "react";

const AdminEditPage = ({ params }: any) => {

    const { data: adminData, isLoading: loading } = useAdminQuery(params.id);

    const [updateAdmin] = useUpdateAdminMutation()
    const { data, isLoading } = useDepartmentsQuery({ limit: 100, page: 1 });

    // @ts-ignore
    const departments: IDepartment[] = data?.departments;
    const departmentOptions =
        departments &&
        departments?.map((department) => {
            return {
                label: department?.title,
                value: department?.id,
            };
        });

    const onSubmit = async (values: any) => {
        try {
            const res = await updateAdmin({id:params.id,body:values}).unwrap();
            console.log("Success",res)
            if(res?.data?._id){
                message.success("Admin updated successfully")
            }
            message.success("Admin created successfully")
        } catch (err: any) {
            console.log("err", err);
        }
    };

    const defaultValues = {
        name: {
            firstName: adminData?.name?.firstName || "",
            lastName: adminData?.name?.lastName || "",
            middleName: adminData?.name?.middleName || "",
        },
        dateOfBirth: adminData?.dateOfBirth || "",
        email: adminData?.email || "",
        designation: adminData?.designation || "",
        contactNo: adminData?.contactNo || "",
        emergencyContactNo: adminData?.emergencyContactNo || "",
        permanentAddress: adminData?.permanentAddress || "",
        presentAddress: adminData?.presentAddress || "",
        bloodGroup: adminData?.bloodGroup || "",
        gender: adminData?.gender || "",
        managementDepartment: adminData?.managementDepartment?.id || "",
    };
    return (
        <div>
            <UMBreadCrumb
                items={[
                    {
                        label: `super_admin`,
                        link: `/super_admin`,
                    },
                    {
                        label: `admin`,
                        link: `/super_admin/admin`,
                    },
                ]}
            />
            <h1>Update Admin {params.id}</h1>
            <div>
                <Form submitHandler={onSubmit} defaultValues={defaultValues}>
                    <div
                        style={{
                            border: "1px solid #d9d9d9",
                            borderRadius: "5px",
                            padding: "15px",
                            marginBottom: "10px",
                        }}
                    >
                        <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                            Admin information
                        </p>
                        <Row gutter={{ xs: 8, sm: 8 }}>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{ marginBottom: "10px" }}
                            >
                                <FormInput
                                    type="text"
                                    name="name.firstName"
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
                                    name="name.middleName"
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
                                    name="name.lastName"
                                    size="large"
                                    label="Last Name"
                                />
                            </Col>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{ marginBottom: "10px" }}
                            >
                                <FormSelectField
                                    name="gender"
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
                                    name="managementDepartment"
                                    options={departmentOptions}
                                    size="large"
                                    label="Department"
                                    placeholder="Select"
                                />
                            </Col>
                        </Row>
                    </div>

                    {/* BASIC INFO  */}
                    <div
                        style={{
                            border: "1px solid #d9d9d9",
                            borderRadius: "5px",
                            padding: "15px",
                            marginBottom: "10px",
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
                                    name="email"
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
                                    name="contactNo"
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
                                    name="emergencyContactNo"
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
                                    name="dateOfBirth"
                                    label="Date of birth"
                                />
                            </Col>
                            <Col
                                className="gutter-row"
                                span={8}
                                style={{ marginBottom: "10px" }}
                            >
                                <FormSelectField
                                    name="bloodGroup"
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
                                    name="designation"
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
                                    name="presentAddress"
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
                                    name="permanentAddress"
                                    label="Permanent Address"
                                />
                            </Col>
                        </Row>
                    </div>

                    <Button type="primary" htmlType="submit">
                        Update
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default AdminEditPage;
