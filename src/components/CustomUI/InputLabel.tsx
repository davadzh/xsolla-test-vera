import React, {FC, ReactNode} from 'react';
import styled from "styled-components";

const LabelStyled = styled.label`
  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  color: #747E8A;
`;

interface ICustomInputLabelProps {
  children: ReactNode;
}

export const InputLabel: FC<ICustomInputLabelProps> = ({children}) => {
  return (
    <LabelStyled>
      {children}
    </LabelStyled>
  );
};
