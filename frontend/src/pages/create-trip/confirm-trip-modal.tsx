import { Mail, User } from "lucide-react";
import { FormEvent } from "react";
import { Button } from "../../components/button";
import { Input } from "../../components/input";
import { Modal } from "../../components/modal";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeConfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <Modal
      closeModal={closeConfirmTripModal}
      title="Confirmar criação de viagem"
      description={
        <>
          Para concluir a criação da viagem para{" "}
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
      onSubmit={createTrip}
    >
      <Input type="text" name="userName" placeholder="Seu nome completo">
        <User className="text-zinc-400 size-5" />
      </Input>

      <Input type="email" name="email" placeholder="Seu e-mail pessoal">
        <Mail className="text-zinc-400 size-5" />
      </Input>

      <Button type="submit" size="full">
        Confirmar criação de viagem
      </Button>
    </Modal>
  );
}
