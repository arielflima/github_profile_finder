import React from 'react';

import { ButtonProps } from 'react-native';
import { ContainerButton, TextButton } from './styles';

const SearchButton: React.FC<ButtonProps> = ({ ...rest }) => {
  return (
    <ContainerButton {...rest}>
      <TextButton>Procurar</TextButton>
    </ContainerButton>
  );
};

export default SearchButton;
