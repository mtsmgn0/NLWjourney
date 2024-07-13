import { ArrowRight, UserRoundPlus } from "lucide-react";

interface GuestsAndConfirmationStepProps {
  isGuestPopupOpen: boolean;
  openGuestPopup: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export function GuestsAndConfirmationStep({
  emailsToInvite,
  isGuestPopupOpen,
  openConfirmTripModal,
  openGuestPopup,
}: GuestsAndConfirmationStepProps) {
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
      <div className="space-x-2 flex items-center flex-1">
        <UserRoundPlus className="size-5 text-zinc-400" />

        <button
          disabled={isGuestPopupOpen}
          onClick={openGuestPopup}
          className="text-zinc-400 text-lg bg-transparent outline-none flex-1"
        >
          {emailsToInvite.length > 1 ? (
            <span className="flex flex-initial text-zinc-100">
              {emailsToInvite.length - 1} pessoa(s) convidada(s)
            </span>
          ) : (
            <span className="flex flex-initial">Quem estará na viagem?</span>
          )}
        </button>
      </div>

      <div className="h-6 w-px bg-zinc-800" />
      <button
        onClick={openConfirmTripModal}
        disabled={isGuestPopupOpen}
        className="bg-lime-300 text-lime-950 rounded-lg px-5 py-2 space-x-2 flex items-center hover:bg-lime-400"
      >
        Confirmar viagem
        <ArrowRight />
      </button>
    </div>
  );
}