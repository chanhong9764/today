import styled, { css } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
`;

export const Container = styled.SafeAreaView`
  ${center}
  flex: 1;
`;

export const TitleContainer = styled.View`
  ${center}
  flex: 2;
`;

export const EmotionsContainer = styled.View`
  ${center}
  flex: 5;
`;

export const EmotionContainer = styled.TouchableOpacity`
  ${center}
  padding: 20px;
  margin: 10px;
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

export const ButtonContainer = styled.View`
  ${center}
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.big};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
