import styled from 'styled-components/native';

export const SelectImageContainer = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const SelecImageTitle = styled.Text`
  flex: 1;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const TodayDate = styled.Text`
  flex: 1;
  text-align: center;
  padding-top: 20px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const ImagesContainer = styled.View`
  flex: 12;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
