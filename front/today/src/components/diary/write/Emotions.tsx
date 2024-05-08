import LottieView from 'lottie-react-native';
import { EmotionDataProp } from '../../../contexts/EmotionData';
import * as S from './style';

type EmotionProps = {
  emotion: EmotionDataProp;
  onPress: () => void;
  backgroundColor: string;
  borderColor: string;
};

type LottieFilesProp = {
  [key: string]: any; // key는 string, 값은 any (여기서는 Lottie 파일을 가리킴)
};

const lottieFiles: LottieFilesProp = {
  happiness: require('../../../../assets/lotties/happiness.json'),
  surprise: require('../../../../assets/lotties/surprise.json'),
  sadness: require('../../../../assets/lotties/sadness.json'),
  disgust: require('../../../../assets/lotties/disgust.json'),
  fear: require('../../../../assets/lotties/fear.json'),
  angry: require('../../../../assets/lotties/angry.json'),
};

function Emotions({ emotion, onPress, backgroundColor, borderColor }: EmotionProps) {
  return (
    <S.EmotionContainer onPress={onPress} backgroundColor={backgroundColor} borderColor={borderColor}>
      <LottieView
        source={lottieFiles[emotion.feel]}
        autoPlay
        loop
        style={{
          width: 50,
          height: 50,
        }}
      />
      <S.EmotionsTitle>{emotion.name}</S.EmotionsTitle>
    </S.EmotionContainer>
  );
}

export default Emotions;
