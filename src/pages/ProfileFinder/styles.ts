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
  height: 15%;
  background-color: #373a4090;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  padding-bottom: 25px;
`;

export const IconFormatted = styled(Icon)`
  color: #29a19c;
  margin-left: -40px;
  padding-right: 10px;
  padding-bottom: 5px;
`;

export const TitlesContainer = styled.View``;

export const TitleHeader = styled.Text`
  color: #fff;
  font-size: 24px;
  margin-bottom: 3px;
`;

export const TitleHeaderSub = styled.Text`
  color: #fff;
  margin-top: -10px;
`;

export const Content = styled.View`
  flex: 1;
`;

export const SearchArea = styled.View`
  flex-direction: row;
  margin-top: -8%;
  align-items: center;
  justify-content: center;
`;
