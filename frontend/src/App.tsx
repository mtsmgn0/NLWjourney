export function App() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="max-w-3xl  w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">
          Convide seus amigos e planeje sua próxima viagem!
        </p>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <input
            placeholder="para onde você vai?"
            type="text"
            className="text-zinc-400 text-lg bg-transparent"
          />
          <input
            placeholder="Quando?"
            type="text"
            className="text-zinc-400 text-lg bg-transparent"
          />

          <button>continuar</button>
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
