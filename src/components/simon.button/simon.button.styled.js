import styled from 'styled-components/native';

export const ButtonContainer = styled.View`
  background-color: ${({color}) => color || '#000'};
  width: 100%;
  height: 100%;
  opacity: ${({pressed}) => (pressed ? 0.4 : 1)};
`;

export const TouchableOpacityWrapper = styled.TouchableHighlight`
  width: 50%;
  height: 50%;
  padding: 10px;
`;
