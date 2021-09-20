import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    width: 100%;
    height: 100%;
    padding: 50px 32px;
`;

export const NavBar = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100%;
    margin-top: 32px;
`;

export const NavBarItem = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const NavBarItemSelected = styled.Text`
    color: #CB69C1;
    font-size: 16px;
`;

export const NavBarItemDisable = styled.Text`
    color: #666666;
    font-size: 16px;
`;

export const Title = styled.Text`
    font-size: 28px;
    color: #fff;
    /* font-family: 'Rubik-Medium'; */
`;

export const SubTitle = styled.Text`
    font-size: 12px;
    color: #fff;
    /* font-family: 'Rubik-Regular'; */
`;

export const Content = styled.View`
    display: flex;
    width: 100%;
    padding-top: 56px;
    flex: 1;
`;

export const NoteTouch = styled.TouchableOpacity`
`;