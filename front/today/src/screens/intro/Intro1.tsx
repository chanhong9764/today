import { SafeAreaView, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { RootProp } from '../../types/navigatortype/stack';
import * as S from './style';

function Intro1({ navigation }: RootProp) {
  const theme = useTheme();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <S.Images source={require('../../../assets/intro1.png')}>
        <S.arrowContainer onPress={() => navigation.push('Intro2')}>
          <Text style={{ fontSize: 26, fontWeight: '600', color: theme.colors.mainPink }}>≫</Text>
        </S.arrowContainer>
      </S.Images>
    </SafeAreaView>
  );
}

export default Intro1;
