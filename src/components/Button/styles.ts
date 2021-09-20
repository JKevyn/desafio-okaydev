import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler'

export const Container = styled(RectButton)`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: 100%;
`;

export const ButtonStyle = styled.View`
    border-radius: 50%;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-size: 24px;
`;