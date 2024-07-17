import { Plus } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { ImportantLinks } from "./important-links";
import { InvitedGuests } from "./invited-guests";
import { ActivityList } from "./activity-list";
import { DestinationAndDateHeader } from "./destination-and-date-header";
import { Button } from "../../components/button";

export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setCreateActivityModalOpen(false);
  }

  return (
    <div className="max-w-6xl py-10 px-6 mx-auto space-y-8">
      <DestinationAndDateHeader />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-zinc-50 text-4xl font-semibold">Atividades</h2>

            <Button onClick={openCreateActivityModal}>
              <Plus className="size-5" />
              Cadastrar atividade
            </Button>
          </div>
          <ActivityList />
        </div>

        <div className="w-80 space-y-6">
          <ImportantLinks />

          <div className="max-w-xl h-px w-full bg-zinc-800" />

          <InvitedGuests />
        </div>

        {isCreateActivityModalOpen && (
          <CreateActivityModal
            closeCreateActivityModal={closeCreateActivityModal}
          />
        )}
      </main>
    </div>
  );
}
