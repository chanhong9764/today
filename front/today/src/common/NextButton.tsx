import styled from 'styled-components/native';

export type Props = {
  content: string;
  onPress?: (data?: any) => void;
};

const StyledBtn = styled.TouchableOpacity`
  width: 80%;
  padding: 10px 15px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.mainPink};
`;

const StyledText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: white;
`;

function NextButton({ content, onPress }: Props) {
  return (
    <StyledBtn onPress={onPress}>
      <StyledText>{content}</StyledText>
    </StyledBtn>
  );
}

export default NextButton;
