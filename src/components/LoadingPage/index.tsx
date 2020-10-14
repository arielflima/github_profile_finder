import React from 'react';

import { Container, LogoLoading } from './styles';

const LoadingPage: React.FC = () => {
  return (
    <Container>
      <LogoLoading name="github" size={150} />
    </Container>
  );
};

export default LoadingPage;
