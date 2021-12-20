// @ts-ignore
import {Loader} from 'xsolla-uikit'
import React from 'react';
import styled from "styled-components";
import {useAppSelector} from "../store/store";
import {Title} from "./CustomUI/Title";
import {DraggableBlock} from "./CustomUI/DraggableBlock";

const VariablesSectionStyled = styled.div`
  width: 150px;
  margin-left: 60px;
`;

const VariablesStyled = styled.div`
  margin-top: 9px;
  display: flex;
  flex-direction: column;
  row-gap: 18px;
`;

// const LoaderWrapper = styled.div`
//   width: 150px;
//   margin-left: 60px;
//
// `;

export const VariablesSection = () => {
  const {isLoading} = useAppSelector(state => state.data);
  const {variables} = useAppSelector(state => state.activity);

  if (isLoading) {
    return (
      <VariablesSectionStyled>
        <Loader/>
      </VariablesSectionStyled>
    )
  } else {
    if (!variables)
      return null

    return (
      <VariablesSectionStyled>
        <Title>Variables</Title>
        <VariablesStyled>
          {variables.map(el => <DraggableBlock value={el}/>)}
        </VariablesStyled>
      </VariablesSectionStyled>
    );
  }
};
