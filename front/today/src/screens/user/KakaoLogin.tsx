import WebView from 'react-native-webview';

import React from 'react';
import { SafeAreaView } from 'react-native';
import { Members } from '../../apis/MemberApi';
import { apis } from '../../apis/api';

const INJECTED_JAVASCRIPT = `window.ReactNativeWebView.postMessage('안녕')`;
// 로그인에 성공하게 되면 어떤 주소로 이동 => injectedJavaScript에 적은 코드가 실행

function KakaoLogin() {
  const REST_API_KEY = process.env.REST_API_KEY;
  const REDIRECT_URI = `${process.env.BASE_URL}${apis.login}/tmp`;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${encodeURIComponent(
    REDIRECT_URI,
  )}&response_type=code`;

  // requestToken을 가져오는 함수
  function getCode(target: string) {
    // url에 필요한 code가 queryString으로 들어있음
    // url 중 'code=' 뒤에 있는 것이 requestToken
    const exp = 'code=';
    const condition = target.indexOf(exp);
    if (condition !== -1) {
      const requestCode = target.substring(condition + exp.length);
      requestToken(requestCode);
    }
  }

  function requestToken(requestCode: string) {
    Members.kakaoLogin(requestCode)
      .then(res => {
        // EncryptedStorage.setItem("token", res.data.token);
        // const user: MemberData = res.data.user
      })
      .catch(err => console.log(err));
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
          const data = event.nativeEvent.url;
          // 데이터 처리시 => event.nativeEvent.data
          // 페이지의 url을 가져올 시 => event.nativeEvent.url
          getCode(data);
        }}
      />
    </SafeAreaView>
  );
}

export default KakaoLogin;
