import styled from 'styled-components/native';
import GitIcon from 'react-native-vector-icons/Feather';
import EnterIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
`;

export const ImageBackground = styled.ImageBackground`
  width: 410px;
  height: 900px;
`;

export const Logo = styled(GitIcon)`
  margin-top: 120px;
  margin-left: 30px;
  color: #29a19c;
`;

export const TextLogo1 = styled.Text`
  margin-left: 35px;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
`;
export const TextLogo2 = styled.Text`
  margin-left: 35px;
  font-size: 18px;
  font-weight: normal;
  color: #fff;
`;

export const ContentText = styled.Text`
  color: #fff;
  font-size: 20px;
  margin-left: 35px;
  margin-top: 150px;
  width: 45%;
  font-weight: bold;
`;

export const EnterButton = styled.TouchableHighlight`
  width: 300px;
  height: 60px;
  background-color: #29a19c;
  justify-content: center;
  align-items: flex-start;
  border-radius: 5px;
  margin-top: 155px;
  margin-left: 50px;
`;

export const TextButton = styled.Text`
  font-weight: normal;
  font-size: 16px;
  color: #fff;
`;

export const EnterButtonContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const EnterButtonTextContainer = styled.View`
  width: 80%;
  justify-content: center;
  align-items: center;
`;

export const EnterButtonIconContainer = styled.View`
  background-color: #3ab2ad;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 124%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`;
export const ButtonIcon = styled(EnterIcon)`
  color: #fff;
`;
