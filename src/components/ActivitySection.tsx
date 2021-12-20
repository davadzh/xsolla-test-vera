import React from 'react';
import {ContentSection} from "./CustomUI/ContentSection";
import {ActivityForm} from "./forms/ActivityForm";
import {useAppSelector} from "../store/store";
import {VariablesSection} from "./VariablesSection";
import {TitleSection} from "./CustomUI/TitleSection";


export const ActivitySection = () => {
  const {activityType} = useAppSelector(state => state.activity);

  return (
    <ContentSection>
      <TitleSection>Activity</TitleSection>
      <ActivityForm />
      {activityType !== undefined  && <VariablesSection /> }
    </ContentSection>
  );
};
