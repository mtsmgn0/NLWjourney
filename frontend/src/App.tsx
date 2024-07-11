import { MapPin, Calendar, ArrowRight } from "lucide-react";

export function App() {
  return (
    <div className="h-screen flex justify-center items-center bg-boxBg bg-no-repeat bg-center">
      <div className="max-w-3xl  w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="./public/logo.svg" alt="plann.er logo" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
          <div className="space-x-2 flex items-center flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <input
              placeholder="para onde você vai?"
              type="text"
              className="text-zinc-400 text-lg bg-transparent outline-none flex-1"
            />
          </div>
          <div className="space-x-2 flex items-center">
            <Calendar className="size-5 text-zinc-400" />
            <input
              placeholder="Quando?"
              type="text"
              className="text-zinc-400 text-lg bg-transparent outline-none w-32"
            />
          </div>
          <div className="h-6 w-px bg-zinc-800" />
          <button className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 space-x-2 flex items-center hover:bg-lime-400">
            continuar
            <ArrowRight />
          </button>
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
    </div>
  );
}
