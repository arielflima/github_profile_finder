import React, { useState, useCallback } from 'react';

import {
  Container,
  Header,
  TitleHeader,
  Content,
  SearchArea,
  IconFormatted,
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
      <Header>
        <IconFormatted name="github" size={22} />
        <TitleHeader>Github profile finder</TitleHeader>
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
    </Container>
  );
};

export default ProfileFinder;
