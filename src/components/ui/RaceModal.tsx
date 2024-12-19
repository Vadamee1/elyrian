import { titleFont } from "@/config/fonts";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/react";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
  header: ReactNode;
  children: ReactNode;
}

export default function RaceModal({
  isOpen,
  onOpenChange,
  header,
  children,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      scrollBehavior="outside"
      size="2xl"
    >
      <ModalContent
        className="bg-[#F5E6D3] border-4 border-[#8B4513] shadow-xl 
                 rounded-xl overflow-hidden 
                 transform transition-all duration-300 
                 hover:scale-105 hover:shadow-2xl
                 font-['Crimson_Text'] p-2"
      >
        {(onClose) => (
          <>
            <ModalHeader
              className={`${titleFont.className} font-bold text-3xl bg-[#6B4423] text-[#F5E6D3] 
                    py-3 px-4 border-b-2 border-[#8B4513]`}
            >
              {header}
            </ModalHeader>
            <ModalBody
              className="p-4 text-[#3A2A1B]
                   leading-relaxed tracking-wide 
                   bg-[#EAD1A8] bg-opacity-50 text-base"
            >
              {children}
            </ModalBody>
            <ModalFooter
              className="bg-[#6B4423] text-[#F5E6D3] 
                     py-2 px-4 text-sm italic 
                     border-t-2 border-[#8B4513]"
            >
              <Button
                onPress={onClose}
                className="bg-[#EAD1A8] text-[#6B4423] text-xl border-t-2 border-[#8B4513] mb-1"
              >
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
