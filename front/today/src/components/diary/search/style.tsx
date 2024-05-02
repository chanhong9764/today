import styled, { css } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.View`
  background-color: white;
  border-radius: 5px;
  height: 50px;
  padding: 10px;
  margin: 20px;
  box-shadow: 2px 2px 2px #d1d1d1;
  flex-direction: row;
  justify-content: space-between;
`;

export const Search = styled.TextInput`
  flex: 1;
  width: 100%;
  padding: 0px 5px;
`;
