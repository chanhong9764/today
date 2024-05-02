import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import * as S from './style';

interface SearchBarProps {
  filterText: string;
  setFilterText: (text: string) => void;
  onPress: () => void;
}

function SearchBar({ filterText, setFilterText, onPress }: SearchBarProps) {
  return (
    <S.SearchContainer>
      <S.Search placeholder="키워드를 입력해주세요." onChangeText={setFilterText} value={filterText} />
      <Icon name="search" size={27} onPress={onPress} />
    </S.SearchContainer>
  );
}

export default SearchBar;
