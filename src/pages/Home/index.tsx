import React, { useState, useEffect, useCallback } from 'react';

import { Container, Header, TitleHeader, Content, SearchArea } from './styles';

import api from '../../services/api';

import SearchInput from '../../components/SearchInput';
import SearchButton from '../../components/SearchButton';
import PreviewUser from '../../components/PreviewUser';

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [user, setUser] = useState([]);

  const handleSearch = useCallback(async () => {
    const response = await api.get(`users/${searchValue}`);

    setUser(response.data);
  }, [searchValue]);

  return (
    <Container>
      <Header>
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
        <PreviewUser {...user} />
      </Content>
    </Container>
  );
};

export default Home;
