import React from 'react';
import { Linking } from 'react-native';

import {
  Container,
  Avatar,
  PreviewTextContent,
  AvatarContainer,
  PreviewTextContentContainer,
  ContainerTouchableHighlight,
  TouchClick,
} from './styles';

export interface PreviewUserProps {
  avatar_url: string;
  name: string;
  login: string;
  followers: number;
  public_repos: number;
}

const PreviewUser: React.FC<PreviewUserProps> = ({
  avatar_url,
  name,
  login,
  followers,
  public_repos,
}) => {
  return (
    <Container>
      <TouchClick
        onPress={() => Linking.openURL(`https://www.github.com/${login}`)}
      >
        <ContainerTouchableHighlight>
          <AvatarContainer>
            <Avatar source={{ uri: avatar_url }} />
          </AvatarContainer>
          <PreviewTextContentContainer>
            <PreviewTextContent>{`Name: ${name}`}</PreviewTextContent>
            <PreviewTextContent>{`Username: ${login}`}</PreviewTextContent>
            <PreviewTextContent>{`Followers: ${followers}`}</PreviewTextContent>
            <PreviewTextContent>{`Repositories Count: ${public_repos}`}</PreviewTextContent>
          </PreviewTextContentContainer>
        </ContainerTouchableHighlight>
      </TouchClick>
    </Container>
  );
};

export default PreviewUser;
