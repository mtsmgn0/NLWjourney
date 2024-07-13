import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { GuestPopup } from "./guest-popup";
import { ConfirmTripModal } from "./confirm-trip-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { GuestsAndConfirmationStep } from "./steps/guests-and-confirmation-step";

export function CreateTripPage() {
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestPopupOpen, setIsGuestPopupOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([""]);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const navigate = useNavigate();

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function openGuestPopup() {
    setIsGuestPopupOpen(true);
  }

  function closeGuestPopup() {
    setIsGuestPopupOpen(false);
  }

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  function addEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailToInvite(emailToRemove: string) {
    const aux = emailsToInvite.filter((email) => email != emailToRemove);
    setEmailsToInvite(aux);
    return;
  }

  function createTrip(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex justify-center items-center bg-boxBg bg-no-repeat bg-center">
      <div className="max-w-3xl  w-full px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="./public/logo.svg" alt="plann.er logo" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <DestinationAndDateStep
            closeGuestInput={closeGuestInput}
            isGuestInputOpen={isGuestInputOpen}
            openGuestInput={openGuestInput}
          />

          {isGuestInputOpen && (
            <GuestsAndConfirmationStep
              emailsToInvite={emailsToInvite}
              isGuestPopupOpen={isGuestPopupOpen}
              openConfirmTripModal={openConfirmTripModal}
              openGuestPopup={openGuestPopup}
            />
          )}
        </div>

        <p className="text-zinc-500 text-sm">
          Ao planejar sua viagem pela plann.er você automaticamente concorda{" "}
          <br /> com nossos{" "}
          <a className="text-zinc-300 underline" href="#">
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="#">
            políticas de privacidade
          </a>
          .
        </p>
      </div>
      {isGuestPopupOpen && (
        <GuestPopup
          addEmailToInvite={addEmailToInvite}
          closeGuestPopup={closeGuestPopup}
          emailsToInvite={emailsToInvite}
          removeEmailToInvite={removeEmailToInvite}
        />
      )}
      {isConfirmTripModalOpen && (
        <ConfirmTripModal
          closeConfirmTripModal={closeConfirmTripModal}
          createTrip={createTrip}
        />
      )}
    </div>
  );
}
