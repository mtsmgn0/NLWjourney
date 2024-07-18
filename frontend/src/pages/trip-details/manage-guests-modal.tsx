import { User, Mail } from "lucide-react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal";

interface ManageGuestsModalProps {
  closeManageGuestsModal: () => void;
}

export function ManageGuestsModal({
  closeManageGuestsModal,
}: ManageGuestsModalProps) {
  return (
    <Modal
      closeModal={closeManageGuestsModal}
      title="Confirmar participação"
      description={
        <>
          Você foi convidado(a) para participar de uma viagem para{" "}
          <span className="text-zinc-100 font-semibold">
            Florianópolis, Brasil
          </span>{" "}
          nas datas de{" "}
          <span className="text-zinc-100 font-semibold">
            16 a 27 de Agosto de 2024
          </span>{" "}
          preencha seus dados abaixo:
        </>
      }
    >
      <Input type="text" name="userName" placeholder="Seu nome completo">
        <User className="text-zinc-400 size-5" />
      </Input>

      <Input type="email" name="email" placeholder="Seu e-mail">
        <Mail className="text-zinc-400 size-5" />
      </Input>

      <Button size="full">Confirmar minha presença</Button>
    </Modal>
  );
}
