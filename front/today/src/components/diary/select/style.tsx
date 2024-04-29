import styled from 'styled-components/native';

type ImageContainerProps = {
  backgroundColor: string;
};

export const ImageContainer = styled.TouchableOpacity<ImageContainerProps>`
  background-color: ${props => props.backgroundColor || 'transparent'};
  box-shadow: 2px 2px 2px lightgray;
  padding: 20px;
  width: 45%;
`;
