import styled from 'styled-components/native';

export const CalenderContainer = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const CalenderWrapper = styled.View`
  flex: 1;
  padding: 15px;
  justify-content: center;
`;

export const CalendarBodyContainer = styled.View`
  flex: 14;
  justify-content: center;
`;

export const CalendarheaderContainer = styled.View`
  flex: 1;
  padding: 0px 12px;
  justify-content: center;
`;
