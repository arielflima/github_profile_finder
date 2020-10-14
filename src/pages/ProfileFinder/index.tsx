import React, { useState, useCallback } from 'react';
import { Alert } from 'react-native';
import Background from '../../assets/githubVector.png';

import {
  Container,
  Header,
  IconFormatted,
  TitlesContainer,
  TitleHeader,
  TitleHeaderSub,
  Content,
  SearchArea,
  ImageBackground,
} from './styles';

import api from '../../services/api';

import SearchInput from '../../components/SearchInput';
import SearchButton from '../../components/SearchButton';
import PreviewUser, { PreviewUserProps } from '../../components/PreviewUser';

const ProfileFinder: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState<PreviewUserProps>();

  const handleSearch = useCallback(async () => {
    try {
      const response = await api.get(`users/${searchValue}`);

      const {
        avatar_url,
        name,
        login,
        followers,
        public_repos,
      } = response.data;

      setUser({ avatar_url, name, login, followers, public_repos });
    } catch (err) {
      Alert.alert(
        'Usuário não encontrado!',
        'Descupe, mas o usuário digitado não foi encontrado, verifique e tente novamente.',
      );
    }
  }, [searchValue]);

  return (
    <Container>
      <ImageBackground source={Background}>
        <Header>
          <IconFormatted name="github" size={40} />
          <TitlesContainer>
            <TitleHeader>Profile Finder</TitleHeader>
            <TitleHeaderSub>Github, simples.</TitleHeaderSub>
          </TitlesContainer>
        </Header>
        <Content>
          <SearchArea>
            <SearchInput
              value={searchValue}
              onChangeText={setSearchValue}
              placeholder="username do github"
            />
            <SearchButton title="buttonSearch" onPress={handleSearch} />
          </SearchArea>
          {user && <PreviewUser {...user} />}
        </Content>
      </ImageBackground>
    </Container>
  );
};

export default ProfileFinder;
