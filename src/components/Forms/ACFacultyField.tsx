import React from 'react';
import FormSelectField, { SelectOptions } from './FormSelectField';
import { useAcademicFacultiesQuery } from '@/redux/api/academic/facultyApi';

type ACFacultyFieldProps = {
  name: string;
  label: string;
}
const ACFacultyField = ({name,label}:ACFacultyFieldProps) => {

    const {data , isLoading} = useAcademicFacultiesQuery({limit:100,page:1})

    const academicFaculties = data?.academicFaculties;
    const academicFacultyOptions = academicFaculties?.map(({title,id}) => ( {
        label:title,
        value:id
    }))
    return (
        <FormSelectField
            name={name}
            options={academicFacultyOptions as unknown as SelectOptions[]}
            label={label}
            placeholder="Select"
        />
    );
};

export default ACFacultyField;