import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';

export const center = css`
  justify-content: center;
  align-items: center;
`;

export const SearchContainer = styled.View`
  background-color: white;
  border-radius: 3px;
  height: 50px;
  padding: 10px;
  margin: 30px 35px 10px;

  flex-direction: row;
  justify-content: space-between;

  ${Platform.select({
    ios: `
      shadow-color: #ffffff;
      shadow-offset: {width: 10, height: 10};
      shadow-opacity: 0.5;
      shadow-radius: 10;
    `,
    android: `
      elevation: 6;
    `,
  })}
`;

export const Search = styled.TextInput`
  flex: 1;
  width: 100%;
  padding: 0px 5px;
`;
