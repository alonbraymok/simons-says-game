import styled from 'styled-components/native';

export const GameBoardContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  background-color: #000;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const StartButtonWrapper = styled.View`
  position: absolute;
  margin-left: auto;
  margin-right: auto;

  z-index: 10;
`;
