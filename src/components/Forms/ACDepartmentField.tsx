import React from 'react';
import FormSelectField, { SelectOptions } from './FormSelectField';
import { useAcademicDepartmentsQuery } from '@/redux/api/academic/departmentApi';

type ACDepartmentFieldProps = {
  name: string;
  label: string;
}
const ACDepartmentField = ({name,label}:ACDepartmentFieldProps) => {

    const {data , isLoading} =  useAcademicDepartmentsQuery({limit:100,page:1})

    const academicDepartments = data?.academicDepartments;
    const academicDepartmentOptions = academicDepartments?.map(({title,id}) => ( {
        label:title,
        value:id
    }))
    return (
        <FormSelectField
            name={name}
            options={academicDepartmentOptions as unknown as SelectOptions[]}
            label={label}
            placeholder="Select"
        />
    );
};

export default ACDepartmentField;