import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";

interface ISelectFieldProps {
  name: string;
  label?: string;
  rows?: number;
  value?: string | string[] | undefined;
  placeholder?: string;
}

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder
}: ISelectFieldProps) => {
  const { control } = useFormContext();

  return (
    <>
      {label ? label : null}
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <Input.TextArea
            {...field}
            rows={rows}
            style={{ width: "100%" }}
            placeholder={placeholder}
            defaultValue={value}
          />
        )}
      />
    </>
  );
};

export default FormTextArea;
