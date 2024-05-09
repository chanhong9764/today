// Analysis.tsx
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { analysis } from '../../../apis/AnalysisApi';
import { Members } from '../../../apis/MemberApi';
import ModalComponent from '../../../components/modal/Modal';
import Graph from '../../../components/user/Graph';
import Pyramid from '../../../components/user/Pyramid';
import { AnalysisData, MemberData } from '../../../types/datatype';
import { ModalProps } from '../../../types/modal';
import * as S from './style';

function AnalysisContent() {
  const [memberInfo, setMemberInfo] = useState<MemberData | undefined>();
  const [analysisData, setAnalysisData] = useState<AnalysisData | undefined>(undefined);

  useEffect(() => {
    Members.getMembers()
      .then(response => {
        setMemberInfo(response.data);
      })
      .catch(err => {
        console.log(err);
      });

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환
    analysis
      .getAnalysisday(today) // 하루치 데이터 불러오기
      .then(response => {
        setAnalysisData(response.data); // 데이터 상태 업데이트
      })
      .catch(error => {
        console.error('analysis data:', error);
      });
  }, []);

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
      <S.AnalysisTitle>오늘의 일기 분석 결과</S.AnalysisTitle>
      <S.AnalysisSubTitle>{memberInfo?.nickName}님의 오늘의 성격유형입니다</S.AnalysisSubTitle>
      {analysisData && <Pyramid analysisData={analysisData} width={280} height={250} />}
      <S.AnalysisSubTitle>{memberInfo?.nickName}님의 오늘의 기분입니다</S.AnalysisSubTitle>
      <View style={{ height: 280, width: 280 }}>{analysisData && <Graph analysisData={analysisData} />}</View>
    </View>
  );
}

function Analysis({ modalVisible, setModalVisible }: ModalProps) {
  return (
    <ModalComponent modalVisible={modalVisible} setModalVisible={setModalVisible} modalContent={<AnalysisContent />} />
  );
}

export default Analysis;
