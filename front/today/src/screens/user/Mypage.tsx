import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import { analysis } from '../../apis/AnalysisApi';
import { Members } from '../../apis/MemberApi';
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
          <S.Line />
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
          <S.Line />
          {analysisData ? (
            <Pyramid analysisData={analysisData} width={30} height={180} />
          ) : (
            <Text>일기를 작성해주세요!</Text>
          )}
          <S.MyPageSubTitle>{memberInfo?.nickName} 님의 감정은</S.MyPageSubTitle>
          <S.Line />
          {analysisData ? (
            <View style={{ height: 300, marginBottom: 30 }}>
              <Graph analysisData={analysisData} />
            </View>
          ) : (
            <Text>일기를 작성해주세요!</Text>
          )}
          <S.Line />
          <S.SettingWrapper>
            <View style={{ width: 45, alignItems: 'center', marginRight: 18 }}>
              <Icon name="lock" size={28} />
            </View>
            <Text>비밀번호 설정</Text>
          </S.SettingWrapper>
          <S.Line />
          <S.SettingWrapper style={{ marginBottom: 20 }} onPress={Logout}>
            <View style={{ width: 37, alignItems: 'center', marginRight: 28 }}>
              <Icon name="logout" size={28} />
            </View>
            <Text>로그아웃</Text>
          </S.SettingWrapper>
        </S.MyPageContainer>
      </S.MyPage>
    </ScrollView>
  );
}

export default Mypage;
