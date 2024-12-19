import RaceModal from "@/components/ui/RaceModal";
import { titleFont } from "@/config/fonts";
import { elfsData } from "@/constants/races/elfs";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function ElfModal({ isOpen, onOpenChange }: Props) {
  const {
    elyrian,
    history,
    magic,
    magicSkills,
    magicTypes,
    moralValues,
    natureConnection,
    physicalDescription,
    socialStructure,
    technology,
  } = elfsData;

  return (
    <RaceModal header="Elfos" isOpen={isOpen} onOpenChange={onOpenChange}>
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Orígenes e historia
        </h2>
        <div className="flex flex-col gap-2">
          <p>{history}</p>
          <p>{natureConnection}</p>
        </div>
      </div>
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Características físicas
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {physicalDescription.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Sociedad
        </h2>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className={`${titleFont.className} text-base`}>Estructura:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {socialStructure.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`${titleFont.className} text-base`}>Valores:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {moralValues.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mb-4">
          <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
            Magia
          </h2>
          <div className="flex flex-col gap-2">
            <p className="list-disc list-inside text-gray-600 space-y-2">
              {magic}
            </p>
            <div>
              <h3 className={`${titleFont.className} text-base`}>
                Habilidades mágicas:
              </h3>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                {magicSkills.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className={`${titleFont.className} text-base`}>
                Tipos de magia:
              </h3>
              <p>{magicTypes}</p>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
            Armamento y metalurgia
          </h2>
          <div>
            <h3 className={`${titleFont.className} text-base`}>Elyrian:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {elyrian.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className={`${titleFont.className} text-base`}>Armas:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {technology.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </RaceModal>
  );
}
