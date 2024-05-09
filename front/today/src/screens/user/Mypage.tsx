import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { analysis } from '../../apis/AnalysisApi';
import { Members } from '../../apis/MemberApi';
import CommonButton from '../../common/CommonButton';
import Graph from '../../components/user/Graph';
import Pyramid from '../../components/user/Pyramid';
import { IsLoginContext } from '../../contexts/IsLoginContext';
import { AnalysisData, MemberData } from '../../types/datatype';
import { UserProp } from '../../types/navigatortype/stack';
import * as S from './style';

function Mypage({ navigation }: UserProp) {
  const [memberInfo, setMemberInfo] = useState<MemberData | undefined>();
  const [analysisData, setAnalysisData] = useState<AnalysisData | undefined>();
  const { setIsLogin } = useContext(IsLoginContext);

  useEffect(() => {
    Members.getMembers()
      .then(response => {
        setMemberInfo(response.data);
        // console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });

    const today = new Date().toISOString().slice(0, 10); // YYYY-MM-DD 형식으로 변환
    analysis
      .getAnalysismonth(today)
      .then(response => {
        const data = response.data;
        if (data) {
          const scaledData = {
            ...data,
            angry: data.angry,
            disgust: data.disgust,
            fear: data.fear,
            happiness: data.happiness,
            sadness: data.sadness,
            surprise: data.surprise,
          };
          setAnalysisData(scaledData);
        }
      })
      .catch(error => {
        console.error('graph 오류', error);
      });
  }, []);

  async function Logout() {
    await AsyncStorage.removeItem('accessToken');
    setIsLogin(false);
    console.log('로그아웃함');
  }

  return (
    <ScrollView>
      <S.MyPage>
        <S.MyPageContainer>
          <S.MyPageSubTitle>MY INFO</S.MyPageSubTitle>
          <S.MyInfo>
            <S.MyInfoTitle>닉네임</S.MyInfoTitle>
            <S.MyInfoContent>
              <Text>{memberInfo?.nickName}</Text>
            </S.MyInfoContent>
          </S.MyInfo>
          <S.MyInfo>
            <S.MyInfoTitle>이메일</S.MyInfoTitle>
            <S.MyInfoContent>
              <Text>{memberInfo?.email}</Text>
            </S.MyInfoContent>
          </S.MyInfo>

          <S.MyPageSubTitle>{memberInfo?.nickName} 님의 성향은</S.MyPageSubTitle>
          {analysisData && <Pyramid analysisData={analysisData} width={320} height={180} />}
          <S.MyPageSubTitle>{memberInfo?.nickName} 님의 감정은</S.MyPageSubTitle>
          {analysisData && (
            <View style={{ height: 300, marginBottom: 30 }}>
              <Graph analysisData={analysisData} />
            </View>
          )}
          <View style={{ alignItems: 'center', marginBottom: 30 }}>
            <CommonButton content="로그아웃" onPress={Logout} />
          </View>
        </S.MyPageContainer>
      </S.MyPage>
    </ScrollView>
  );
}

export default Mypage;
