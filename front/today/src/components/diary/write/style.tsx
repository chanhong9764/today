import styled from 'styled-components/native';

export const DiaryContainer = styled.TextInput`
  flex: 4;
  height: 100%;
  width: 100%;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  background-color: ${({ theme }) => theme.colors.lightPink};
  box-shadow: 2px 2px 2px ${({ theme }) => theme.colors.middlePink};
`;

export const CountText = styled.Text`
  align-items: flex-end;
`;
