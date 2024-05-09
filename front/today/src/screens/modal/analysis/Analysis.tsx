import { View } from 'react-native';
import ModalComponent from '../../../components/modal/Modal';
import Graph from '../../../components/user/Graph';
import Pyramid from '../../../components/user/Pyramid';
import { ModalProps } from '../../../types/modal';
import * as S from './style';

function AnalysisContent() {
  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <S.AnalysisTitle>오늘의 일기 분석 결과</S.AnalysisTitle>
      <S.AnalysisSubTitle>김유정님의 오늘의 성격유형입니다</S.AnalysisSubTitle>
      <Pyramid height={150} width={250} />
      <S.AnalysisSubTitle>김유정님의 오늘의 기분입니다</S.AnalysisSubTitle>
      <View style={{ height: 280, width: 280 }}>
        <Graph data={[8, 7, 9, 5, 6, 10]} />
      </View>
    </View>
  );
}

function Analysis({ modalVisible, setModalVisible }: ModalProps) {
  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} modalContent={<AnalysisContent />} />
  );
}

export default Analysis;
