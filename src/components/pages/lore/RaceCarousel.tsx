"use client";

import { Race } from "@/types/race";
import { Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";

interface Props {
  onOpen: () => void;
  data: Race[];
  setRaceInfo: Dispatch<SetStateAction<number>>;
}

export default function RaceCarousel({ onOpen, data, setRaceInfo }: Props) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setCardsToShow(window.innerWidth < 768 ? 2 : 3);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 3 < data.length ? prevIndex + 1 : prevIndex
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const displayedRaces = data.slice(currentIndex, currentIndex + cardsToShow);

  const handleClickCard = (id: number) => {
    setRaceInfo(id);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      <button
        onClick={handlePrev}
        disabled={currentIndex === 0}
        className="disabled:opacity-50"
      >
        <IoArrowBackOutline size={32} />
      </button>
      <div className="flex space-x-4">
        {displayedRaces.map((race) => (
          <div key={race.id} className="flex">
            <Card
              isFooterBlurred
              radius="lg"
              className="border-none"
              onPress={onOpen}
              onClick={() => handleClickCard(race.id)}
              isPressable
            >
              <Image
                alt="Race image"
                className="object-cover"
                src="/images/Image-not-found.png"
                height={200}
                width={200}
              />
              <CardFooter className="bg-gray-800 opacity-70 border-white border-1 py-1 absolute rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1">
                <p className="w-full text-xl text-center">{race.name}</p>
              </CardFooter>
            </Card>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={currentIndex + 3 >= data.length}
        className="disabled:opacity-50"
      >
        <IoArrowForwardOutline size={32} />
      </button>
    </div>
  );
}