import { Image } from 'react-native';
import { EmotionDataProp } from '../../../contexts/EmotionData';
import * as S from './style';

type EmotionProps = {
  emotion: EmotionDataProp;
  onPress: () => void;
  backgroundColor: string;
  borderColor: string;
};

type EmotionFilesProp = {
  [key: string]: any; // key는 string, 값은 any (여기서는 Lottie 파일을 가리킴)
};

const EmotionFiles: EmotionFilesProp = {
  happiness: require('../../../../assets/emotions/happiness.png'),
  surprise: require('../../../../assets/emotions/surprise.png'),
  sadness: require('../../../../assets/emotions/sadness.png'),
  disgust: require('../../../../assets/emotions/disgust.png'),
  fear: require('../../../../assets/emotions/fear.png'),
  angry: require('../../../../assets/emotions/angry.png'),
};

function Emotions({ emotion, onPress, backgroundColor, borderColor }: EmotionProps) {
  return (
    <S.EmotionContainer onPress={onPress} backgroundColor={backgroundColor} borderColor={borderColor}>
      <Image
        source={EmotionFiles[emotion.feel]}
        style={{
          width: 50,
          height: 50,
          marginBottom: 10,
        }}
      />
      <S.EmotionsTitle>{emotion.name}</S.EmotionsTitle>
    </S.EmotionContainer>
  );
}

export default Emotions;
