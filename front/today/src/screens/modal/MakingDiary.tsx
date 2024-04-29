import LottieView from 'lottie-react-native';
import { View } from 'react-native';
import ModalComponent from '../../components/modal/Modal';
import { ModalProps } from '../../types/modal';
import * as S from './style';

function MakingDiaryContent() {
  return (
    <View>
      <LottieView source={require('../../../assets/lotties/making.json')} autoPlay loop />
      <S.MakingDiaryText>만들고 있어용</S.MakingDiaryText>
    </View>
  );
}

function MakingDiary({ modalVisible, setModalVisible }: ModalProps) {
  return (
    <ModalComponent
      modalVisible={modalVisible}
      setModalVisible={setModalVisible}
      modalContent={<MakingDiaryContent />}
    />
  );
}

export default MakingDiary;
