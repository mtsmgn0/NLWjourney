import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface GuestPopupProps {
  closeGuestPopup: () => void;
  emailsToInvite: string[];
  removeEmailToInvite: (email: string) => void;
  addEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
}

export function GuestPopup({
  addEmailToInvite,
  closeGuestPopup,
  emailsToInvite,
  removeEmailToInvite,
}: GuestPopupProps) {
  return (
    <div className=" fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg text-white font-semibold">
              Selecionar Convidados
            </h2>
            <button type="button" onClick={closeGuestPopup}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>
        {/* bloco que sera preenchido pelos emails */}
        <div className="gap-2 flex flex-wrap">
          {/* email ilustrativo falso */}
          {emailsToInvite.map((email) => {
            if (email != "") {
              return (
                <div
                  key={email}
                  className="bg-zinc-800 py-1.5 px-2.5 rounded-md flex items-center space-x-2.5"
                >
                  <span>{email}</span>
                  <button onClick={() => removeEmailToInvite(email)}>
                    <X className="text-zinc-400 size-4" />
                  </button>
                </div>
              );
            }
          })}
        </div>{" "}
        <div className="max-w-xl h-px w-full bg-zinc-800" />
        <form
          onSubmit={addEmailToInvite}
          className="max-w-xl w-full bg-zinc-950 flex items-center rounded-lg px-4 py-2.5 border border-zinc-800 space-x-2.5"
        >
          <AtSign className="text-zinc-400 size-5" />
          <input
            type="email"
            name="email"
            placeholder="Digite o e-mail do convidado"
            className="bg-transparent outline-none flex-1"
          />
          <button
            type="submit"
            className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 space-x-2 flex items-center hover:bg-lime-400"
          >
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
