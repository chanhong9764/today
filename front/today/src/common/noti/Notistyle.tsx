import styled from 'styled-components/native';

export const NotiContainer = styled.View`
  width: 45px;
  height: 45px;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const NotiBadge = styled.View`
  position: absolute;
  right: -4px;
  top: 0px;
  width: 16px;
  height: 16px;
  justify-content: center;
  align-items: center;
  background-color: red;
  border-radius: 8px;
`;

export const NotiBadgeText = styled.Text`
  color: white;
  font-size: 10px;
`;
