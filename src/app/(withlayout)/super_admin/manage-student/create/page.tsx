"use client"
import StepperForm from '@/components/SteperForm/StepperForm';
import GuardianInfo from '@/components/StudentForms/GuardianInfo';
import LocalGuardianInfo from '@/components/StudentForms/LocalGuardianInfo';
import StudentBasicInfo from '@/components/StudentForms/StudentBasicInfo';
import StudentInfo from '@/components/StudentForms/StudentInfo';
import UMBreadCrumb from '@/components/ui/UMBreadCrumb';
import React from 'react';

const CreateStudentPage = () => {
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

    const handleStudentSubmit = async (data:any) =>{
       try {
         console.log("DATA", data);
       } catch (error) {
        console.error('error', error);
       }
    }
    return (
      <div>
        <UMBreadCrumb
          items={[
            {
              label: `super_admin`,
              link: `/super_admin`
            },
            {
              label: `manage-student`,
              link: `/super_admin/manage-student`
            }
          ]}
        />
        <h1>Create Student</h1>
        <StepperForm steps={steps} submitHandler={(value)=>handleStudentSubmit(value)}/>
      </div>
    );
};

export default CreateStudentPage;