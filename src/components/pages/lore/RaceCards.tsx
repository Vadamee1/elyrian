"use client";

import { useDisclosure } from "@nextui-org/react";
import RaceCarousel from "./RaceCarousel";
import { useEffect, useState } from "react";
import { raceData } from "@/constants/races";
import HumanModal from "./modals/HumanModal";
import ElfModal from "./modals/ElfModal";
import DwarveModal from "./modals/DwarveModal";

export default function RaceCard() {
  const [raceInfo, setRaceInfo] = useState(0);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const data = raceData;

  useEffect(() => {
    setRaceInfo(0);
  }, [onOpenChange]);

  return (
    <>
      <RaceCarousel onOpen={onOpen} data={data} setRaceInfo={setRaceInfo} />
      {raceInfo === 1 && (
        <HumanModal isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
      {raceInfo === 2 && (
        <ElfModal isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
      {raceInfo === 3 && (
        <DwarveModal isOpen={isOpen} onOpenChange={onOpenChange} />
      )}
    </>
  );
}
