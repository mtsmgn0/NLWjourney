import {
  Calendar,
  CircleCheck,
  Link2,
  MapPin,
  Plus,
  Settings2,
} from "lucide-react";

export function TripDetailsPage() {
  return (
    <div className="max-w-6xl py-10 px-6 mx-auto space-y-8">
      <header className=" bg-zinc-900 h-16 rounded-xl px-6 flex items-center justify-between shadow-shape">
        <div className="flex items-center gap-2">
          <MapPin className="text-zinc-400 size-5" />
          <span className="text-zinc-100 text-lg">Florianopolis, Brasil</span>
        </div>

        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <Calendar className="text-zinc-400 size-5" />
            <span className="text-zinc-100 text-lg">17 a 23 de Agosto</span>
          </div>
          <div className="w-px h-6 bg-zinc-800" />
          <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 space-x-2 flex items-center gap-2 hover:bg-zinc-700">
            Alterar local/data
            <Settings2 className="text-zinc-200 size-5" />
          </button>
        </div>
      </header>

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-zinc-50 text-4xl font-semibold">Atividades</h2>

            <button
              type="submit"
              className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 space-x-2 flex items-center text-base hover:bg-lime-400 gap-2"
            >
              <Plus className="size-5" />
              Cadastrar atividade
            </button>
          </div>

          <div className="space-y-8">
            {/* Programação do dia */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-300 text-xl font-semibold">
                  Dia 17
                </span>
                <span className="text-zinc-500 text-xs">Sábado</span>
              </div>
              <p className="text-zinc-500 text-sm">
                Nenhuma atividade cadastrada nessa data.
              </p>
            </div>
            {/* fim da programação do dia */}
            <div className="space-y-3">
              <div className="flex items-baseline gap-2">
                <span className="text-zinc-300 text-xl font-semibold">
                  Dia 18
                </span>
                <span className="text-zinc-500 text-xs">Domingo</span>
              </div>
              <div className="flex items-center h-10 bg-zinc-900 px-4 py-2.5 shadow-shape rounded-xl">
                <div className="flex items-center gap-3">
                  <CircleCheck className="text-lime-300 size-5" />
                  <span className="text-zinc-100 text-sm">Corrida de Kart</span>
                </div>
                <span className="text-zinc-100 text-sm ml-auto">14:00h</span>
              </div>

              <div className="flex items-center h-10 bg-zinc-900 px-4 py-2.5 shadow-shape rounded-xl">
                <div className="flex items-center gap-3">
                  <CircleCheck className="text-lime-300 size-5" />
                  <span className="text-zinc-100 text-sm">Corrida de Kart</span>
                </div>
                <span className="text-zinc-100 text-sm ml-auto">14:00h</span>
              </div>
            </div>
            {/* Programação do dia com card ^^^^^^ */}
          </div>
        </div>

        <div className="w-80 space-y-6">
          <div className="space-y-6">
            <h2 className="text-zinc-50 text-xl ">Links importantes</h2>
            {/* estrutura dos links */}
            <div className="gap-5 flex items-center">
              <div className="flex flex-col ">
                <span className="text-zinc-100">Reserva do airBnB</span>
                <a
                  className="text-zinc-400 text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                >
                  https://www.airbnb.com.br/rooms/104700011
                </a>
              </div>
              <Link2 className="ml-auto text-zinc-400 size-5" />
            </div>
            {/* link 2 */}
            <div className="gap-5 flex items-center">
              <div className="flex flex-col ">
                <span className="text-zinc-100">Roll Rick</span>
                <a
                  className="text-zinc-400 text-xs"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                >
                  https://www.youtube.com/watch?v=dQw4w9WgXcQ
                </a>
              </div>
              <Link2 className="ml-auto text-zinc-400 size-5" />
            </div>

            <button className="bg-zinc-800 w-full justify-center text-zinc-200 rounded-lg px-5 h-11 flex items-center gap-2 hover:bg-zinc-700 ">
              <Plus className="text-zinc-200 size-5" />
              Cadastrar novo link
            </button>
          </div>

          <div className="max-w-xl h-px w-full bg-zinc-800" />
        </div>
      </main>
    </div>
  );
}
