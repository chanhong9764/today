import styled from 'styled-components/native';

export const CalenderContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CalenderWrapper = styled.View`
  justify-content: center;
  padding: 15px;
`;
