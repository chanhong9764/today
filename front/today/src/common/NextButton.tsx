import styled from 'styled-components/native';

export type Props = {
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

function NextButton({ onPress }: Props) {
  return (
    <StyledBtn onPress={onPress}>
      <StyledText>다음</StyledText>
    </StyledBtn>
  );
}

export default NextButton;
