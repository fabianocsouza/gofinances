import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons'
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
`;

export const Header = styled.View``;

export const  Title = styled.Text``;

export const  Icon = styled(Feather)``;

export const Footer = styled.View``;

export const Amount = styled.Text``;

export const LastTransition = styled.Text``;
