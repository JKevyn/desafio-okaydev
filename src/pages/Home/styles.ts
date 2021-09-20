import styled from 'styled-components/native';

export const Container = styled.View`
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 128px 38px 64px 38px;
`;

export const IconContent = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const IconView = styled.View`
    width: 100%;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Icon = styled.View`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 200px;
    height: 200px;
    border-radius: 60px;
    background-color: #CB69C1;
`;

export const IconText = styled.Text`
    color: #fff;
    font-size: 24px;
    margin-top: 24px;
`;

export const BorderStyle = styled.View`
    border-radius: 100px;
`;