import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";
import { Button } from "../../../components/button";

interface DestinationAndDateStepProps {
  isGuestInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
}

export function DestinationAndDateStep({
  closeGuestInput,
  isGuestInputOpen,
  openGuestInput,
}: DestinationAndDateStepProps) {
  return (
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
        <Button onClick={closeGuestInput} variant="secondary">
          Alterar local/data
          <Settings2 className="text-zinc-200 size-5" />
        </Button>
      ) : (
        <Button onClick={openGuestInput}>
          continuar
          <ArrowRight />
        </Button>
      )}
    </div>
  );
}
