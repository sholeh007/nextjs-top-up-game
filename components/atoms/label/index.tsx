import { ReactNode } from "react";

interface propTypes {
  children: ReactNode;
}

export default function Label({ children }: propTypes) {
  return (
    <label className="form-label text-lg fw-medium color-palette-1 mb-10">
      {children}
    </label>
  );
}
