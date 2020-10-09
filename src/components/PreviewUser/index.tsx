import React from 'react';

import {
  Container,
  Avatar,
  PreviewTextContent,
  AvatarContainer,
  PreviewTextContentContainer,
  ContainerTouchableHighlight,
  TouchClick,
} from './styles';

interface PreviewUserProps {
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
      <TouchClick>
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
