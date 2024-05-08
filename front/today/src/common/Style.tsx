import styled from 'styled-components/native';

export const StyledBtn = styled.TouchableOpacity`
  width: 80%;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.mainPink};
  box-shadow: 2px 2px 2px #acacac;
`;

export const StyledAddBtn = styled.TouchableOpacity`
  align-self: center;
  padding: 10px 16px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.mainPink};
`;

export const StyledBtnText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-family: title;
  color: white;
`;

export const TodayDate = styled.Text`
  text-align: center;
  padding: 20px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
