import HistoryTabs from "@/components/pages/lore/HistoryTabs";
import RaceCard from "@/components/pages/lore/RaceCards";
import { titleFont } from "@/config/fonts";
import { Card, Divider } from "@nextui-org/react";

export default function LorePage() {
  return (
    <div className="grid md:grid-cols-3 px-4 md:px-36">
      <Card className="col-span-2 p-4">
        <h1 className={`${titleFont.className} text-4xl font-bold mb-5`}>
          Acerca de Elyria
        </h1>
        <Divider className="bg-yellow-500 mb-10" />
        <div className="mb-5">
          <h2 className={`${titleFont.className} text-2xl font-bold`}>
            Historia
          </h2>
          <HistoryTabs />
        </div>
        <div>
          <h2 className={`${titleFont.className} text-2xl font-bold mb-4`}>
            Razas
          </h2>
          <p className="mb-5">
            ¿Quieres saber un poco más de las distintas razas de Elyria?
            Presiona la que sea de tu interés.
          </p>
          <RaceCard />
        </div>
        <div className="mt-10">
          <h2 className={`${titleFont.className} text-2xl font-bold mb-4`}>
            Personajes importantes
          </h2>
          <p className="mb-5">
            {`Existen NPC's que aportan cierta historia al mundo de Elyria,
            ¿Quiere saber de ellos?`}
          </p>
          <RaceCard />
        </div>
      </Card>
    </div>
  );
}
