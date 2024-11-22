"use client";

import { Tab, Tabs } from "@nextui-org/react";

export default function HistoryTabs() {
  return (
    <Tabs aria-label="history" variant="underlined" color="warning">
      <Tab key="yesterday" title="Orígenes">
        <h1 className="font-bold">Origen de Elyria</h1>
      </Tab>
      <Tab key="today" title="Actualidad">
        <h1 className="font-bold">Historia actual de Elyria</h1>
      </Tab>
      <Tab key="tomorrow" title="Futuro">
        <h1 className="font-bold">Futuro de Elyria</h1>
      </Tab>
    </Tabs>
  );
}
