import * as S from './Style';

export type AddButtonProps = {
  onPress?: (data?: any) => void;
};

function AddButton({ onPress }: AddButtonProps) {
  return (
    <S.StyledAddBtn onPress={onPress}>
      <S.StyledBtnText>+</S.StyledBtnText>
    </S.StyledAddBtn>
  );
}

export default AddButton;
