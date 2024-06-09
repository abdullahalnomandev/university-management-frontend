"use client"
import StepperForm from '@/components/SteperForm/StepperForm';
import GuardianInfo from '@/components/StudentForms/GuardianInfo';
import LocalGuardianInfo from '@/components/StudentForms/LocalGuardianInfo';
import StudentBasicInfo from '@/components/StudentForms/StudentBasicInfo';
import StudentInfo from '@/components/StudentForms/StudentInfo';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import { useAddStudentWithFormDataMutation } from '@/redux/api/studentApi';
import { message } from 'antd';
import React from 'react';

const CreateStudentPage = () => {

  const [addStudentWithFormData] = useAddStudentWithFormDataMutation()
  const steps = [
    {
      title: "Student Information",
      content: <StudentInfo />
    },
    {
      title: "Basic Basic Information",
      content: <StudentBasicInfo />
    },
    {
      title: "Guardian Information",
      content: <GuardianInfo />
    },
    {
      title: "Local Guardian Information",
      content: <LocalGuardianInfo />
    },
  ];

  const handleStudentSubmit = async (values: any) => {
    const obj = { ...values };
    const file = obj["file"];
    delete obj["file"];
    const data = JSON.stringify(obj);

    const formData = new FormData();
    formData.append("file", file as Blob);
    formData.append("data", data);
    message.loading("Creating...")

    console.log('obj', obj)
    try {
      const res = await addStudentWithFormData(formData);
      if (!!res) {
        message.success("Student created successfully")
      }
    } catch (err: any) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <UMBreadCrumb
        items={[
          {
            label: `admin`,
            link: `/admin`
          },
          {
            label: `manage-student`,
            link: `/admin/manage-student`
          }
        ]}
      />
      <h1>Create Student</h1>
      <StepperForm
        persistkey="student-create-form"
        steps={steps} submitHandler={(value) => handleStudentSubmit(value)} />
    </div>
  );
};

export default CreateStudentPage;