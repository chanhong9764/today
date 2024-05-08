import styled, { css } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

// export const WriteDiaryContainer = styled.KeyboardAwareScrollView`
//   ${center};
//   flex: 1;
//   padding: 20px 30px;
// `;

export const WriteDiaryInner = styled.View`
  ${center};
  flex: 1;
  padding: 20px;
`;

export const WriteDiaryTitle = styled.Text`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 30px;
`;

export const WriteDiaryButton = styled.View`
  ${center};
  flex: 2;
  margin: 30px 0px;
`;
