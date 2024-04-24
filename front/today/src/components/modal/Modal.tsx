import Modal from 'react-native-modal';
import * as S from './style';

function ModalComponent({ modalVisible, setModalVisible, modalContent }) {
  return (
    <Modal
      isVisible={modalVisible}
      hideModalContentWhileAnimating={true}
      onBackdropPress={() => setModalVisible(!modalVisible)}
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <S.ModalContainer>{modalContent}</S.ModalContainer>
    </Modal>
  );
}

export default ModalComponent;
