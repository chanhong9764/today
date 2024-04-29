import { Text } from 'react-native';
import ModalComponent from '../../components/modal/Modal';
import { ModalProps } from '../../types/modal';

function DoneDiaryContent() {
  return <Text>생성이 완료되었습니당</Text>;
}

function DoneDiary({ modalVisible, setModalVisible }: ModalProps) {
  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} modalContent={<DoneDiaryContent />} />
  );
}

export default DoneDiary;
