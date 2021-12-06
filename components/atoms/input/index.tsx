export interface propTypes {
  name: string;
  type: string;
  placeholder?: string;
}

export default function Input({ type, name, placeholder }: propTypes) {
  return (
    <input
      name={name}
      type={type}
      className="form-control rounded-pill text-lg"
      placeholder={placeholder}
    />
  );
}
