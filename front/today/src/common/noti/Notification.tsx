import { useState } from 'react';
import Icon from 'react-native-vector-icons/Entypo';
import { NoticeData } from '../../types/datatype';
import * as S from './Notistyle';

type NotiBadgeProp = {
  onPress: () => void;
};

function NotificationBadge({ onPress }: NotiBadgeProp) {
  const [notiData, setNotiData] = useState<NoticeData[]>([]);

  return (
    <S.NotiContainer onPress={onPress}>
      <Icon name="bell" size={30} />
      {/* {count > 0 && ( */}
      <S.NotiBadge>
        <S.NotiBadgeText>15</S.NotiBadgeText>
      </S.NotiBadge>
      {/* )} */}
    </S.NotiContainer>
  );
}

export default NotificationBadge;
