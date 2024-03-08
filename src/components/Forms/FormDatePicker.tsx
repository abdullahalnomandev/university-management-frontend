import { DatePicker, DatePickerProps, Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import dayjs, { Dayjs } from "dayjs";

interface UMDatePikerProps {
  onChange?: (valOne: Dayjs | null, valTwo: string| string[]) => void;
  name: string;
  label?: string;
  value?: Dayjs | null;
  size?:"large" | "small"
}

const FormDatePicker = ({ name, label, value, size, onChange }: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    onChange ? onChange(date, dateString) : null;
     setValue(name, dateString);
  };

  return (
    <>
      {label ? label : ""}
      <br />
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <DatePicker
            style={{ width: "100%" }}
            value={dayjs(field.value) || ""}
            name={name}
            size={size}
            onChange={handleOnChange}
          />
        )}
      />
    </>
  );
};

export default FormDatePicker;
