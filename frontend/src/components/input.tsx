import { ReactNode } from "react";

interface InputProps {
  children: ReactNode;
  placeholder: string;
  type: string;
  name: string;
}

export function Input({ children, placeholder, type, name }: InputProps) {
  return (
    <div className="px-4 w-full bg-zinc-950 flex items-center rounded-lg h-14 border border-zinc-800 space-x-2.5">
      {children}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="bg-transparent outline-none flex-1"
      />
    </div>
  );
}
