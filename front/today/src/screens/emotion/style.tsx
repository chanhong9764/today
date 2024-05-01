import styled, { css } from 'styled-components/native';

type EmotionContainerProps = {
  backgroundColor: string;
};

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
  flex: 3;
`;

export const EmotionsContainer = styled.View`
  ${center}
  flex: 4;
`;

export const EmotionContainer = styled.TouchableOpacity<EmotionContainerProps>`
  justify-content: center;
  align-items: center;
  padding: 30px;
  margin: 10px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.middlePink};
  background-color: ${props => props.backgroundColor || 'transparent'};
`;

export const EmotionsTitle = styled.Text`
  ${center}
  color: #555555;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const ButtonContainer = styled.View`
  ${center}
  flex: 1;
  width: 100%;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  padding: 5px;
`;

export const SubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: gray;
  padding: 5px;
`;
