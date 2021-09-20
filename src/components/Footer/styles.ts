import styled from 'styled-components/native';

export const FooterContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
`;

export const FooterOptions = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 50%;
`;

export const HomeButtonView = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HomeButton = styled.TouchableHighlight`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 38px;
    height: 38px;
    background-color: #17181F;
    border-radius: 100px;
`;

export const CircleButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 48px;
    height: 48px;
`;

export const Image = styled.Image`
    width: 24px;
    height: 24px;
`;