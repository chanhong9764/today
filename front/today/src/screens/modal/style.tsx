import styled, { css } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
`;

export const MakingDiaryContainer = styled.View`
  ${center};
  flex: 1;
`;

export const MakingDiaryText = styled.Text`
  text-align: center;
`;
