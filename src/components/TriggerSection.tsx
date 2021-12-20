import React from 'react';
import {ContentSection} from "./CustomUI/ContentSection";
import {TriggerForm} from "./forms/TriggerForm";
import {TitleSection} from "./CustomUI/TitleSection";

export const TriggerSection = () => {
  return (
    <ContentSection>
      <TitleSection>Trigger</TitleSection>
      <TriggerForm />
    </ContentSection>
  );
};
