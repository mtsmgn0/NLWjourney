import { MapPin, Calendar, Settings2 } from "lucide-react";

export function DestinationAndDateHeader() {
  return (
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
  );
}