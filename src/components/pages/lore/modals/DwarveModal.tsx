import RaceModal from "@/components/ui/RaceModal";
import { titleFont } from "@/config/fonts";
import { dwarvesData } from "@/constants/races/dwarves";

interface Props {
  isOpen: boolean;
  onOpenChange: () => void;
}

export default function DwarveModal({ isOpen, onOpenChange }: Props) {
  const {
    elyrian,
    history,
    interracialTensions,
    moralValues,
    physicalDescription,
    productionTypes,
    roles,
    skills,
    socialStructure,
  } = dwarvesData;

  return (
    <RaceModal header="Enanos" isOpen={isOpen} onOpenChange={onOpenChange}>
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
            <h3 className={`${titleFont.className} text-base`}>Roles:</h3>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {roles.map((item) => (
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
          Herreria
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {skills.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="mb-4">
        <h2 className={`${titleFont.className} font-bold text-xl mb-2`}>
          Tipos de producción:
        </h2>
        <ul className="list-disc list-inside text-gray-600 space-y-2">
          {productionTypes.map((item) => (
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
    </RaceModal>
  );
}
