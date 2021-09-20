import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, ButtonStyle } from './styles';

interface ButtonProps extends RectButtonProperties {
    children: string;
}

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
    <LinearGradient style={{borderRadius: 100}} start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#CB69C1', '#6C72CB']}>
        <Container {...rest}>
            <ButtonText>{children}</ButtonText>
        </Container>
    </LinearGradient>
);

export default Button;