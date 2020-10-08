import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  background-color: #373a40;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
`;
export const TitleHeader = styled.Text`
  color: #fff;
  font-size: 24px;
`;
export const Content = styled.View`
  background-color: #686d76;
`;
export const InputTextSearch = styled.Text``;
export const SearchButton = styled(RectButton)`
  background-color: #19d3da;
`;
export const SearchButtonText = styled.Text``;
export const PreviewArea = styled.View``;
export const Avatar = styled.View``;
export const InfoArea = styled.View``;
