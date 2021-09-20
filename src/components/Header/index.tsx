import React from 'react';

import { Title, SubTitle, Image, SearchContent, Menu, SearchButton, Rectangle, MenuContent } from './styles';

import searchImg from '../../assets/Search.png';
import { LinearGradient } from 'expo-linear-gradient';

const Header: React.FC = () => {
    return (
        <>
            <SearchContent>
                <MenuContent>
                    <Menu>
                        <Rectangle></Rectangle>
                        <Rectangle></Rectangle>
                    </Menu>
                    <Menu>
                        <Rectangle></Rectangle>
                        <Rectangle></Rectangle>
                    </Menu>
                </MenuContent>
                <LinearGradient style={{ borderRadius: 12, width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} start={{ x: 1, y: 1 }} end={{ x: 0, y: 0 }} colors={['#CB69C1', '#6C72CB']}>
                    <SearchButton>
                        <Image source={searchImg} />
                    </SearchButton>
                </LinearGradient>
            </SearchContent>
            <Title>Hello Kevyn</Title>
            <SubTitle>Welcome back!</SubTitle>
        </>
    );
}

export default Header;