import { Tag, Calendar } from "lucide-react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}

export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <Modal
      closeModal={closeCreateActivityModal}
      title="Cadastrar atividade"
      description="Todos convidados podem visualizar as atividades."
    >
      <Input name="Activity" type="text" placeholder="Qual a atividade">
        <Tag className="text-zinc-400 size-5" />
      </Input>

      <Input
        type="datetime-local"
        name="DateAndHour"
        placeholder="Data e hora da atividade"
      >
        <Calendar className="text-zinc-400 size-5" />
      </Input>

      <Button type="submit" size="full">
        Salvar atividade
      </Button>
    </Modal>
  );
}
