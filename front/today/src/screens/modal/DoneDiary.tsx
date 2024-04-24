import { Text } from 'react-native';
import ModalComponent from '../../components/modal/Modal';

function DoneDiaryContent() {
  return <Text>생성이 완료되었습니당</Text>;
}

function DoneDiary({ modalVisible, setModalVisible }) {
  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} modalContent={<DoneDiaryContent />} />
  );
}

export default DoneDiary;
