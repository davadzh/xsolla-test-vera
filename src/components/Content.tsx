import React from 'react';
import {Hr} from "./CustomUI/Hr";
import {DataSection} from "./DataSection";
import {TriggerSection} from "./TriggerSection";
import {ActivitySection} from "./ActivitySection";

export const Content = () => {
  return (
    <>
      <DataSection />
      <Hr/>
      <TriggerSection />
      <Hr />
      <ActivitySection />
    </>
  );
};
