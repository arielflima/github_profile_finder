import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  background-color: #373a40;
  align-items: flex-end;
  justify-content: flex-start;
  padding-bottom: 5px;
  flex-direction: row;
`;

export const IconFormatted = styled(Icon)`
  color: #fff;
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
  background-color: #686d76;
  flex: 1;
`;

export const SearchArea = styled.View`
  flex-direction: row;
  margin-top: 10%;
  align-items: center;
  justify-content: center;
`;

export const InputTextSearch = styled.TextInput`
  width: 70%;
  height: 50px;
  background-color: #fff;
  font-size: 18px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const SearchButton = styled.TouchableHighlight`
  background-color: #29a19c;
  width: 100px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SearchButtonText = styled.Text`
  color: #fff;
  font-size: 20px;
`;

export const PreviewArea = styled.View``;
export const Avatar = styled.View``;
export const InfoArea = styled.View``;
