import WebView from 'react-native-webview';

import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { UserProp } from '../../types/navigatortype/stack';
const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('안녕')`;
// 로그인에 성공하게 되면 어떤 주소로 이동 => injectedJavaScript에 적은 코드가 실행

function KakaoLogin({ navigation }: UserProp) {
  const REDIRECT_URI = `${process.env.BASE_URL}/tmp`;
  const KAKAO_AUTH_URL = `${process.env.BASE_URL}/oauth2/authorization/kakao?redirect_uri=${REDIRECT_URI}&mode=login`;

  // requestToken을 가져오는 함수
  const getCode = async (data: string) => {
    const accessToken = JSON.parse(data).accessToken;
    try {
      await AsyncStorage.setItem('accessToken', accessToken);
      console.log(accessToken);
    } catch (error) {
      console.log(error);
    }
    navigation.navigate('Mypage');
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <View style={{ width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <LottieView
          source={require('../../../assets/lotties/making.json')}
          autoPlay
          loop
          style={{
            width: 300,
            height: 300,
          }}
        />
      </View> */}
      <WebView
        style={{ flex: 1 }}
        source={{
          uri: KAKAO_AUTH_URL,
        }}
        // injectedJavaScript :
        // 웹뷰로 열리는 모든 페이지에서 실행될 자바스크립트 코드를 작성할 수 있음
        // 특정 페이지에서만 실행되는 것이 아니라 모든 페이지에서 실행됨
        injectedJavaScript={INJECTED_JAVASCRIPT}
        javaScriptEnabled
        // injectedJavaScript의 함수가 실행되면 onMessage 실행
        onMessage={event => {
          const data = event.nativeEvent.data;
          // 데이터 처리시 => event.nativeEvent.data
          // 페이지의 url을 가져올 시 => event.nativeEvent.url
          getCode(data);
        }}
      />
    </SafeAreaView>
  );
}

export default KakaoLogin;
