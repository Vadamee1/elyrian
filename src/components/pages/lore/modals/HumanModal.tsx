import RaceModal from "@/components/ui/RaceModal";
import { titleFont } from "@/config/fonts";
import { humansData } from "@/constants/races/humans";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function HumanModal({ isOpen, onOpenChange }: Props) {
  const {
    physicalDescription,
    history,
    magicDescription,
    buildings,
    elyrian,
    moralValues,
    socialStructure,
    interracialTensions,
    challenges,
  } = humansData;

  return (
    <RaceModal isOpen={isOpen} onOpenChange={onOpenChange} header="Humanos">
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Orígenes e historia
        </h2>
        <p>{history}</p>
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
          <div>
            <h3 className={`${titleFont.className} text-base`}>
              Tensiones interraciales:
            </h3>
            <p>{interracialTensions}</p>
          </div>
        </div>
      </div>
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Magia
        </h2>
        <div className="flex flex-col gap-2">
          {magicDescription.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Arquitectura
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {buildings.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Armamento y metalurgia
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {elyrian.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Desafíos y potencial
        </h2>
        <p>{challenges}</p>
      </div>
    </RaceModal>
  );
}
