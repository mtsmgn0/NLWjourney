import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
  AtSign,
  Plus,
} from "lucide-react";
import { FormEvent, useState } from "react";

export function App() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestPopupOpen, setIsGuestPopupOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([""]);

  function openGuestPopup() {
    setIsGuestPopupOpen(true);
  }

  function closeGuestPopup() {
    setIsGuestPopupOpen(false);
  }

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  function addEmailToEnvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }
  function removeEmailToEnvite(emailToRemove: string) {
    const aux = emailsToInvite.filter((email) => email != emailToRemove);
    setEmailsToInvite(aux);
    return;
  }
  return (
    <div className="h-screen flex justify-center items-center bg-boxBg bg-no-repeat bg-center">
      <div className="max-w-3xl  w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="./public/logo.svg" alt="plann.er logo" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
            <div className="space-x-2 flex items-center flex-1">
              <MapPin className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                placeholder="para onde você vai?"
                type="text"
                className="text-zinc-400 text-lg bg-transparent outline-none flex-1"
              />
            </div>
            <div className="space-x-2 flex items-center">
              <Calendar className="size-5 text-zinc-400" />
              <input
                disabled={isGuestInputOpen}
                placeholder="Quando?"
                type="text"
                className="text-zinc-400 text-lg bg-transparent outline-none w-32"
              />
            </div>
            <div className="h-6 w-px bg-zinc-800" />
            {isGuestInputOpen ? (
              <button
                onClick={closeGuestInput}
                className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 space-x-2 flex items-center hover:bg-zinc-700"
              >
                Alterar local/data
                <Settings2 />
              </button>
            ) : (
              <button
                onClick={openGuestInput}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 space-x-2 flex items-center hover:bg-lime-400"
              >
                continuar
                <ArrowRight />
              </button>
            )}
          </div>

          {isGuestInputOpen && (
            <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <div className="space-x-2 flex items-center flex-1">
                <UserRoundPlus className="size-5 text-zinc-400" />

                <button
                  disabled={isGuestPopupOpen}
                  onClick={openGuestPopup}
                  className="text-zinc-400 text-lg bg-transparent outline-none flex-1"
                >
                  <span className="flex flex-initial">
                    Quem estará na viagem?
                  </span>
                </button>
              </div>

              <div className="h-6 w-px bg-zinc-800" />
              <button
                disabled={isGuestPopupOpen}
                className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 space-x-2 flex items-center hover:bg-lime-400"
              >
                Confirmar viagem
                <ArrowRight />
              </button>
            </div>
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestPopupOpen && (
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
                Os convidados irão receber e-mails para confirmar a participação
                na viagem.
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
                      <button onClick={() => removeEmailToEnvite(email)}>
                        <X className="text-zinc-400 size-4" />
                      </button>
                    </div>
                  );
                }
              })}
            </div>{" "}
            <div className="max-w-xl h-px w-full bg-zinc-800" />
            <form
              onSubmit={addEmailToEnvite}
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
      )}
    </div>
  );
}
