import React, { useState, useCallback } from 'react';
import Background from '../../assets/githubVector.png';

import {
  Container,
  Header,
  IconFormatted,
  TitleHeader,
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
    const response = await api.get(`users/${searchValue}`);

    const { avatar_url, name, login, followers, public_repos } = response.data;

    setUser({ avatar_url, name, login, followers, public_repos });
  }, [searchValue]);

  return (
    <Container>
      <ImageBackground source={Background}>
        <Header>
          <IconFormatted name="github" size={30} />
          <TitleHeader>Profile Finder</TitleHeader>
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
