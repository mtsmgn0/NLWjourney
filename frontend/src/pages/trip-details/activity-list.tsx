import { CircleCheck } from "lucide-react";

export function ActivityList() {
  return (
    <div className="space-y-8">
      {/* Programação do dia */}
      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-zinc-300 text-xl font-semibold">Dia 17</span>
          <span className="text-zinc-500 text-xs">Sábado</span>
        </div>
        <p className="text-zinc-500 text-sm">
          Nenhuma atividade cadastrada nessa data.
        </p>
      </div>
      {/* fim da programação do dia */}
      <div className="space-y-3">
        <div className="flex items-baseline gap-2">
          <span className="text-zinc-300 text-xl font-semibold">Dia 18</span>
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
  );
}
