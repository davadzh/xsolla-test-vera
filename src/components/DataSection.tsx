import React from 'react';
import {ContentSection} from "./CustomUI/ContentSection";
import {DataForm} from "./forms/DataForm";
import {TitleSection} from "./CustomUI/TitleSection";

export const DataSection = () => {
  return (
    <ContentSection>
      <TitleSection>Data</TitleSection>
      <DataForm />
    </ContentSection>
  );
};
