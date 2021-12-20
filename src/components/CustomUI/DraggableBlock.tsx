import React, {FC} from 'react';
import styled from "styled-components";

const DraggableBlockStyled = styled.div`
  min-height: 44px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #FFFFFF;
  border: 1px solid #C5D0DB;
  border-radius: 6px;
  cursor: pointer;
  box-shadow: 1px 4px 8px rgba(0, 36, 77, 0.25);

  font-family: Roboto, sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;

  color: #0073F7;
`;

interface IDraggableBlockProps {
  value: string;
}

export const DraggableBlock: FC<IDraggableBlockProps> = ({value}) => {
  return (
    <DraggableBlockStyled>
      {value}
    </DraggableBlockStyled>
  );
};
