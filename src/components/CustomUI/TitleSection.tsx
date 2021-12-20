import React, {FC, ReactNode} from 'react';
import styled from "styled-components";
import {Title} from "./Title";

const TitleSectionStyled = styled.div`
  display: flex;
  min-width: 120px;
  justify-content: left;
  align-items: flex-start;
`;

interface ITitleSectionProps {
 children: ReactNode
}

export const TitleSection: FC<ITitleSectionProps> = ({children}) => {
  return (
    <TitleSectionStyled>
      <Title>
        {children}
      </Title>
    </TitleSectionStyled>
  );
};
