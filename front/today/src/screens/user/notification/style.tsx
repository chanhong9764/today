import styled from 'styled-components/native';

type NotiContainerProps = {
  backgroundColor: string;
};

export const NotiContainer = styled.TouchableOpacity<NotiContainerProps>`
  background-color: ${props => props.backgroundColor || 'transparent'};
`;
