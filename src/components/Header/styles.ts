import styled from 'styled-components/native';

export const Title = styled.Text`
    font-size: 28px;
    color: #fff;
    /* font-family: 'Rubik-Medium'; */
`;

export const SearchContent = styled.View`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 56px;
    width: 100%;
`;

export const SubTitle = styled.Text`
    font-size: 12px;
    color: #EEEDF0;
    /* font-family: 'Rubik-Regular'; */
`;

export const Image = styled.Image`
    width: 18px;
    height: 18px;
`;

export const SearchButton = styled.TouchableHighlight`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 39px;
    height: 39px;
    background-color: #17181F;
    border-radius: 12px;
`;

export const MenuContent = styled.View`
    
`;

export const Menu = styled.View`
    max-width: 20px;
    max-height: 20px;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
`;

export const Rectangle = styled.View`
    width: 4px;
    height: 4px;
    background: #EEEDF0;
    margin: 6px;
    border-radius: 1px;
`;