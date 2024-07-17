import { Mail, User, X } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className=" fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[540px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg text-white font-semibold">
              Confirmar criação da viagem
            </h2>
            <button type="button" onClick={closeConfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>
        <div className="max-w-xl h-px w-full bg-zinc-800" />

        <form onSubmit={createTrip} className="flex flex-col gap-3">
          <div className="px-4 w-full bg-zinc-950 flex items-center rounded-lg h-14 border border-zinc-800 space-x-2.5">
            <User className="text-zinc-400 size-5" />
            <input
              type="text"
              name="userName"
              placeholder="Seu nome completo"
              className="bg-transparent outline-none"
            />
          </div>

          <div className="px-4 w-full bg-zinc-950 flex items-center rounded-lg h-14 border border-zinc-800 space-x-2.5">
            <Mail className="text-zinc-400 size-5" />
            <input
              type="email"
              name="email"
              placeholder="Seu e-mail pessoal"
              className="bg-transparent outline-none"
            />
          </div>

          <Button type="submit" size="full">
            Confirmar criação de viagem
          </Button>
        </form>
      </div>
    </div>
  );
}
