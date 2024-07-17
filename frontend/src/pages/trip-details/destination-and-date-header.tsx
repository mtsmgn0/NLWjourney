import { MapPin, Calendar, Settings2 } from "lucide-react";
import { Button } from "../../components/button";

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
        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="text-zinc-200 size-5" />
        </Button>
      </div>
    </header>
  );
}
