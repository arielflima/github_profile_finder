// import { useNavigation } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import Background from '../../assets/githubVector.png';

import {
  Container,
  ImageBackground,
  Logo,
  TextLogo1,
  TextLogo2,
  ContentText,
  EnterButton,
  EnterButtonContainer,
  EnterButtonTextContainer,
  EnterButtonIconContainer,
  ButtonIcon,
  TextButton,
} from './styles';

const Home: React.FC = () => {
  const navigation = useNavigation();

  async function handleEnter(): Promise<void> {
    navigation.navigate('ProfileFinder');
  }

  return (
    <Container>
      <ImageBackground source={Background}>
        <Logo name="github" size={80} />
        <TextLogo1>Profile Finder</TextLogo1>
        <TextLogo2>Github, simples.</TextLogo2>
        <ContentText>Encontre profiles do github de forma simples.</ContentText>
        <EnterButton onPress={() => handleEnter()}>
          <EnterButtonContainer>
            <EnterButtonTextContainer>
              <TextButton>Entrar no Profile Finder</TextButton>
            </EnterButtonTextContainer>
            <EnterButtonIconContainer>
              <ButtonIcon name="log-in" size={20} />
            </EnterButtonIconContainer>
          </EnterButtonContainer>
        </EnterButton>
      </ImageBackground>
    </Container>
  );
};

export default Home;
