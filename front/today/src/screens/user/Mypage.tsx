import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { Members } from '../../apis/MemberApi';
import Graph from '../../components/user/Graph';
import Pyramid from '../../components/user/Pyramid';
import { MemberData } from '../../types/datatype';
import { UserProp } from '../../types/navigatortype/stack';
import * as S from './style';

function Mypage({ navigation }: UserProp) {
  const [memberInfo, setMemberInfo] = useState<MemberData | undefined>();

  useEffect(() => {
    Members.getMembers()
      .then(response => {
        setMemberInfo(response.data);
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  async function Logout() {
    await AsyncStorage.removeItem('accessToken');
    console.log('로그아웃함');
  }

  const [resultOpen, setResultOpen] = useState<boolean>(false);
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
          <Pyramid />
          <S.MyPageSubTitle>{memberInfo?.nickName} 님의 감정은</S.MyPageSubTitle>
          <View style={{ height: 250 }}>
            <Graph labels={['행복', '슬픔', '분노', '짜증', '불안', '놀람']} data={[8, 7, 9, 5, 6, 10]} />
          </View>
          <Button title="카카오 로그인 버튼" onPress={() => navigation.navigate('KakaoLogin')} />
        </S.MyPageContainer>
      </S.MyPage>
    </ScrollView>
  );
}

export default Mypage;
