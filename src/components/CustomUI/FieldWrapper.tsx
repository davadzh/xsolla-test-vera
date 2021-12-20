import React, {FC, ReactComponentElement} from 'react';
import styled from "styled-components";
import {InputLabel} from "./InputLabel";

const FieldWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  flex-grow: 1;
  
  
  input {
    box-sizing: border-box;
    height: 44px;
    max-height: 68px;
  }
  
  textarea {
    box-sizing: border-box;
    min-height: 240px;
  }
  
  span {
    color: red;
  }
`;

interface IFieldWrapperProps {
  label: string;
  input: ReactComponentElement<any>;
}

export const FieldWrapper: FC<IFieldWrapperProps> = ({label, input}) => {
  return (
    <FieldWrapperStyled>
      <InputLabel>{label}</InputLabel>
      {input}
    </FieldWrapperStyled>
  );
};
