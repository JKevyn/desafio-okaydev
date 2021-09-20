import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 38px 32px 48px;
    /* display: none; */
`;

export const CreateAnimation = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;

export const Check = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const HeaderContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 64px;
`;

export const HeaderOptions = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 50%;
`;

export const CheckedImage = styled.Image`
    width: 16px;
    height: 16px;
`;

export const FileImage  = styled.Image`
    width: 20px;
    height: 18px;
`;

export const BackButton = styled.TouchableOpacity`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.TextInput`
    width: 100%;
    color: #fff;
    font-size: 36px;
    line-height: 42px;
    border-bottom-color: #EEEDF080;
    border-bottom-width: 2px;
`;

export const Description = styled.TextInput`
    width: 100%;
    color: #fff;
    font-size: 18px;
    margin-top: 32px;
    height: 64%;
`;

export const FooterContent = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 16px;
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
    margin-top: 1px;
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

export const Menu = styled.View`
    max-width: 20px;
    max-height: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;

export const Rectangle = styled.View`
    width: 4px;
    height: 4px;
    background: #FFF;
    border-radius: 100px;
    margin-bottom: 4px;
`;

export const Dropdown = styled.Picker`

`;

export const NoteTouch = styled.TouchableOpacity`
`;