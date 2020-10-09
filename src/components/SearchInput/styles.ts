import styled, { css } from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isFocused: boolean;
}

export const Container = styled.View<ContainerProps>`
  width: 280px;
  height: 60px;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  border-width: 2px;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-color: #fff;
  padding-left: 10px;
  background-color: #fff;

  ${props =>
    props.isFocused &&
    css`
      border-color: #29a19c;
    `}
`;

export const TextInput = styled.TextInput`
  font-size: 18px;
  color: #000;
  flex: 1;
  font-family: 'Poppins-Regular';
`;

export const Icon = styled(FeatherIcon)`
  color: #29a19c;
`;
