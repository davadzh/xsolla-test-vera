// @ts-ignore
import {Button} from 'xsolla-uikit';
import React, {FC} from 'react';
import styled from "styled-components";

const FormButtonsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

interface IFormButtonsProps {
  onSubmit: () => void;
  onCancel: () => void;
}

export const FormButtons: FC<IFormButtonsProps> = ({onSubmit, onCancel}) => {
  return (
    <FormButtonsStyled>
      <Button appearance={'secondary'} onClick={onSubmit}>Save</Button>
      <Button appearance={'outline'} onClick={onCancel}>Cancel</Button>
    </FormButtonsStyled>
  );
};
