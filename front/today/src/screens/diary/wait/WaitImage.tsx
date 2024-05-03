import LottieView from 'lottie-react-native';
import * as S from './style';

function WaitImage() {
  return (
    <S.WaitImage>
      <S.WaitImageContainer>
        <LottieView
          source={require('../../../../assets/lotties/making.json')}
          autoPlay
          loop
          style={{
            width: '50%',
            height: '50%',
          }}
        />
        <S.WaitImageTitle>그림 그리는 중!</S.WaitImageTitle>
        <S.WaitImageContent>오늘 하루를 그리는 중입니다.</S.WaitImageContent>
        <S.WaitImageContent>잠시만 기다려주세요.</S.WaitImageContent>

        <S.WaitImageExplane>그림을 생성하는데 약 3분 정도 소요됩니다.</S.WaitImageExplane>
        <S.WaitImageExplane>그림 생성이 완료되면 알림을 보내드려요!</S.WaitImageExplane>
      </S.WaitImageContainer>
    </S.WaitImage>
  );
}

export default WaitImage;
