import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import ModalComponent from '../../components/modal/Modal';
import Colors from '../../styles/theme';
import { ModalProps } from '../../types/modal';
import * as S from './style';

function CheckDeleteContent() {
  return (
    <S.MakingDiaryContainer>
      <Icon name="warning" size={32} color={Colors.mainPink} />
      <Text>정말 삭제하시겠습니까?</Text>
    </S.MakingDiaryContainer>
  );
}

function CheckDelete({ modalVisible, setModalVisible }: ModalProps) {
  return (
    <ModalComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modalContent={<CheckDeleteContent />}
    />
  );
}

export default CheckDelete;
