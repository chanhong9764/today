import styled, { css } from 'styled-components/native';

type EmotionContainerProps = {
  backgroundColor: string;
  borderColor: string;
};

export const full = css`
  height: 100%;
  width: 100%;
`;

export const DiaryContainer = styled.View`
  flex: 4;
  ${full}
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.lightPink};
  box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.middlePink};
  align-items: flex-end;
  padding: 18px 22px;
`;

export const DiaryContent = styled.TextInput`
  flex: 9;
  ${full}
  font-size: ${({ theme }) => theme.fontSize.regular};
`;

export const CountText = styled.Text`
  flex: 1;
  color: gray;
`;

export const EmotionContainer = styled.TouchableOpacity<EmotionContainerProps>`
  justify-content: center;
  align-items: center;
  padding: 20px 30px;
  margin: 3px;
  border-radius: 8px;
  box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.middlePink};
  background-color: ${props => props.backgroundColor || 'transparent'};
  /* border: 1px solid ${props => props.borderColor || 'transparent'}; */
`;

export const EmotionsTitle = styled.Text`
  justify-content: center;
  align-items: center;
  color: #555555;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
