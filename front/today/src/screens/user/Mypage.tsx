import AsyncStorage from '@react-native-async-storage/async-storage';
import { useContext, useEffect, useState } from 'react';
import { ScrollView, Text, View } from 'react-native';
import { Members } from '../../apis/MemberApi';
import CommonButton from '../../common/CommonButton';
import Graph from '../../components/user/Graph';
import Pyramid from '../../components/user/Pyramid';
import { IsLoginContext } from '../../contexts/IsLoginContext';
import { MemberData } from '../../types/datatype';
import { UserProp } from '../../types/navigatortype/stack';
import * as S from './style';

function Mypage({ navigation }: UserProp) {
  const [memberInfo, setMemberInfo] = useState<MemberData | undefined>();
  const { setIsLogin } = useContext(IsLoginContext);

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
          <Pyramid />
          <S.MyPageSubTitle>{memberInfo?.nickName} 님의 감정은</S.MyPageSubTitle>
          <View style={{ height: 300, marginBottom: 30 }}>
            <Graph labels={['행복', '슬픔', '분노', '짜증', '불안', '놀람']} data={[8, 7, 9, 5, 6, 10]} />
          </View>
          <View style={{ alignItems: 'center', marginBottom: 30 }}>
            <CommonButton content="로그아웃" onPress={Logout} />
          </View>
        </S.MyPageContainer>
      </S.MyPage>
    </ScrollView>
  );
}

export default Mypage;
