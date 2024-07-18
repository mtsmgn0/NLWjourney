import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps {
  openAddImportantLinkModal: () => void;
}

export function ImportantLinks({
  openAddImportantLinkModal,
}: ImportantLinksProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-zinc-50 text-xl ">Links importantes</h2>
      {/* estrutura dos links */}
      <div className="gap-12 flex items-center">
        <div className="flex flex-col gap-1.5">
          <span className="text-zinc-100">Reserva do airBnB</span>
          <a
            className="text-zinc-400 text-xs truncate hover:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            https://www.airbnb.com.br/rooms/104700011
          </a>
        </div>
        <Link2 className="ml-auto text-zinc-400 size-5 shrink-0" />
      </div>
      {/* link 2 */}
      <div className="gap-12 flex items-center">
        <div className="flex flex-col gap-1.5">
          <span className="text-zinc-100">Roll Rick</span>
          <a
            className="text-zinc-400 text-xs truncate hover:text-zinc-200"
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            https://www.youtube.com/watch?v=dQw4w9WgXcQ
          </a>
        </div>
        <Link2 className="ml-auto text-zinc-400 size-5 shrink-0" />
      </div>

      <Button
        onClick={openAddImportantLinkModal}
        variant="secondary"
        size="full"
      >
        <Plus className="text-zinc-200 size-5" />
        Cadastrar novo link
      </Button>
    </div>
  );
}
