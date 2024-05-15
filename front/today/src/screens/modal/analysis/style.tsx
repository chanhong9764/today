import styled from 'styled-components/native';

export const AnalysisTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.medium};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-bottom: 10px;
`;

export const AnalysisSubTitle = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  margin: 20px 0px;
  textalign: center;
`;

export const Line = styled.View`
  height: 1px;
  background-color: lightgray;
  margin: 15px 0px;
`;
