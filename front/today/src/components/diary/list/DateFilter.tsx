import { format } from 'date-fns';
import { ko } from 'date-fns/locale';
import React, { useState } from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import * as S from './style';

function DateFilter() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  function onConfirm(selectedDate: any) {
    setShow(false);
    setDate(selectedDate);
  }

  function onCancel() {
    setShow(false);
  }

  return (
    <>
      <S.DiaryListTitleContainer onPress={() => setShow(!show)}>
        <S.DiaryListTitle>{format(new Date(date), 'PPP', { locale: ko })} </S.DiaryListTitle>
      </S.DiaryListTitleContainer>
      <DateTimePickerModal isVisible={show} date={date} mode="date" onConfirm={onConfirm} onCancel={onCancel} />
    </>
  );
}

export default DateFilter;
