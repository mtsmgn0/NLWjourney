import { X, Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className=" fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[540px] bg-zinc-900 rounded-xl px-6 py-5 shadow-shape space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between w-full">
            <h2 className="text-lg text-white font-semibold">
              Cadastrar atividade
            </h2>
            <button type="button" onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-zinc-400 text-sm">
            Todos convidados podem visualizar as atividades.
          </p>
        </div>

        <form className="flex flex-col gap-3">
          <div className="px-4 w-full bg-zinc-950 flex items-center rounded-lg h-14 border border-zinc-800 space-x-2.5">
            <Tag className="text-zinc-400 size-5" />
            <input
              type="text"
              name="Activity"
              placeholder="Qual a atividade"
              className="bg-transparent outline-none"
            />
          </div>

          <div className="px-4 w-full bg-zinc-950 flex items-center rounded-lg h-14 border border-zinc-800 space-x-2.5">
            <Calendar className="text-zinc-400 size-5" />
            <input
              type="datetime-local"
              name="DateAndHour"
              placeholder="Data e hora da atividade"
              className="bg-transparent outline-none flex-1"
            />
          </div>

          <Button type="submit" size="full">
            Salvar atividade
          </Button>
        </form>
      </div>
    </div>
  );
}
