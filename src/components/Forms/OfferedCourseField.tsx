import { useCoursesQuery } from "@/redux/api/courseAPi";
import FormMultiSelectField from "./FormMultiSelectField";
import { SelectOptions } from "./FormSelectField";

type MultiSelectFieldProps = {
  name: string;
  label: string;
  placeholder?: string;
};

const OfferedCoursesField = ({ name, label,placeholder }: MultiSelectFieldProps) => {
  const { data, isLoading } = useCoursesQuery({ limit: 10, page: 1 });

  const courses = data?.courses;
  const coursesOptions = courses?.map((course) => {
    return {
      label: course?.title,
      value: course?.id,
    };
  });
  return (
    <>
      <FormMultiSelectField
        placeholder={placeholder}
        name={name}
        label={label}
        options={coursesOptions as SelectOptions[]}
      />
    </>
  );
};

export default OfferedCoursesField;