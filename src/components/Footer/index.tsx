import React from 'react';
import { useNavigation } from '@react-navigation/core';
import { LinearGradient } from 'expo-linear-gradient';

import { HomeButton, CircleButton, FooterContent, FooterOptions, Image, HomeButtonView } from './styles';

import plusImg from '../../assets/plus.png';
import homeImg from '../../assets/home_fill.png'
import trashImg from '../../assets/trash_empty.png';
import settingsImg from '../../assets/settings.png';

const Footer: React.FC = () => {
    const navigation = useNavigation();
    return (
        <FooterContent>
        <FooterOptions>
            <LinearGradient style={{ borderRadius: 100, width: 40, height: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#CB69C1', '#6C72CB']}>
                <HomeButtonView>
                    <HomeButton onPress={() => navigation.goBack('Home')}>
                        <Image source={homeImg  } />
                    </HomeButton>
                </HomeButtonView>
            </LinearGradient>
            <Image source={trashImg} />
            <Image source={settingsImg} />
        </FooterOptions>
        <LinearGradient style={{ borderRadius: 100, width: 48, height: 48 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#CB69C1', '#6C72CB']}>
            <CircleButton onPress={() => navigation.navigate('CreateNote')}>
                <Image source={plusImg} />
            </CircleButton>
        </LinearGradient>
        </FooterContent>
    );
}
    
export default Footer;