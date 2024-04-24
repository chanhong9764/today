import LottieView from 'lottie-react-native';
import ModalComponent from '../../components/modal/Modal';
import * as S from './style';

function MakingDiaryContent() {
  return (
    <>
      <LottieView source={require('../../../assets/lotties/making.json')} autoPlay loop />
      <S.MakingDiaryText>만들고 있어용</S.MakingDiaryText>
    </>
  );
}

function MakingDiary({ modalVisible, setModalVisible }) {
  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} modalContent={MakingDiaryContent} />
  );
}

export default MakingDiary;
