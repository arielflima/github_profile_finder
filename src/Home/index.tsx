import React, { useReducer } from 'react';
import { Text } from 'react-native';

import {
  Container,
  Header,
  TitleHeader,
  Content,
  InputTextSearch,
  SearchButton,
  SearchButtonText,
  PreviewArea,
  Avatar,
  InfoArea,
} from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <TitleHeader>Github profile finder</TitleHeader>
      </Header>
      <Content>
        <InputTextSearch />
        <SearchButton>
          <SearchButtonText>Search</SearchButtonText>
        </SearchButton>
        <PreviewArea>
          <Avatar />
          <InfoArea />
        </PreviewArea>
      </Content>
    </Container>
  );
};

export default Home;
