import { Link2, Tag } from "lucide-react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal";

interface ImportantLinksModalProps {
  closeAddImportantLinkModal: () => void;
}

export function ImportantLinksModal({
  closeAddImportantLinkModal,
}: ImportantLinksModalProps) {
  return (
    <Modal
      closeModal={closeAddImportantLinkModal}
      title="Cadastrar link"
      description="Todos os convidados podem visualizar os links importantes."
    >
      <Input type="text" name="urlTitle" placeholder="Titulo do link">
        <Tag className="size-5 text-zinc-400" />
      </Input>
      <Input type="url" name="link" placeholder="URL">
        <Link2 className="size-5 text-zinc-400" />
      </Input>
      <Button size="full">Salvar link</Button>
    </Modal>
  );
}
