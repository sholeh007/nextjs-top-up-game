import Input from "../../atoms/input";
import Label from "../../atoms/label";

interface propsType {
  label: string;
  type: string;
  placeholder: string;
  name: string;
}

export default function FormInput({
  label,
  type,
  placeholder,
  name,
}: propsType) {
  return (
    <>
      <Label>{label}</Label>
      <Input type={type} name={name} placeholder={placeholder} />
    </>
  );
}
