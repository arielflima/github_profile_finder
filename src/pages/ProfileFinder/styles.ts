import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  width: 410px;
  height: 900px;
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  background-color: #373a40;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 5px;
  flex-direction: row;
  opacity: 0.7;
`;

export const IconFormatted = styled(Icon)`
  color: #29a19c;
  padding-left: 15px;
  padding-right: 10px;
  padding-bottom: 5px;
`;

export const TitleHeader = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-bottom: 3px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const SearchArea = styled.View`
  flex-direction: row;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
`;
