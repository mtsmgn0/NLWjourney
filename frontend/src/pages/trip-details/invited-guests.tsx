import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

interface InvitedGuestsProps {
  openManageGuestsModal: () => void;
}

export function InvitedGuests({ openManageGuestsModal }: InvitedGuestsProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-zinc-50 text-xl ">Convidados</h2>
      {/* estrutura dos convidados */}
      <div className="gap-12 flex items-center">
        <div className="flex flex-col gap-1.5">
          <span className="text-zinc-100">Mateus Magno</span>
          <span className="text-zinc-400 text-sm truncate">
            exemploamerico@gmail.com
          </span>
        </div>
        <CircleDashed className="ml-auto text-zinc-400 size-5 shrink-0" />
      </div>

      <Button onClick={openManageGuestsModal} variant="secondary" size="full">
        <UserCog className="text-zinc-200 size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
