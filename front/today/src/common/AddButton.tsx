import styled from 'styled-components/native';

export type Props = {
  onPress?: (data?: any) => void;
};

const StyledBtn = styled.TouchableOpacity`
  align-self: center;
  padding: 10px 15px;
  border-radius: 25%;
  background-color: ${({ theme }) => theme.colors.mainPink};
`;

const StyledText = styled.Text`
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.medium};
  color: white;
`;

function AddButton({ onPress }: Props) {
  return (
    <StyledBtn onPress={onPress}>
      <StyledText>+</StyledText>
    </StyledBtn>
  );
}

export default AddButton;
