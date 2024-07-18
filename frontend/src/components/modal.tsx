import { X } from "lucide-react";
import { ComponentProps, ReactNode } from "react";

interface ModalProps extends ComponentProps<"form"> {
  closeModal: () => void;
  children: ReactNode;
  title: string;
  description: ReactNode;
}

export function Modal({
  closeModal,
  children,
  description,
  title,
  ...props
}: ModalProps) {
  return (
    <div className=" fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[540px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg text-white font-semibold">{title}</h2>
            <button type="button" onClick={closeModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">{description}</p>
        </div>

        <form {...props} className="flex flex-col gap-3">
          {children}
        </form>
      </div>
    </div>
  );
}
