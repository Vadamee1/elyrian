import RaceModal from "@/components/ui/RaceModal";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function ElfModal({ isOpen, onOpenChange }: Props) {
  return (
    <RaceModal header="Elfos" isOpen={isOpen} onOpenChange={onOpenChange}>
      Elfos
    </RaceModal>
  );
}
