import React from 'react';
import { useNavigation } from '@react-navigation/core';

import { Container, Content, NavBar, NavBarItem, NavBarItemSelected, NavBarItemDisable, NoteTouch } from './styles';

import Header from '../../components/Header'
import Note from '../../components/Note';
import Footer from '../../components/Footer';

const Favorites: React.FC = () => {
    const navigation = useNavigation();
    return (
        <Container>
            <Header />
            <NavBar>
                <NavBarItem onPress={() => navigation.navigate('Notes')}>Notes</NavBarItem>
                <NavBarItemSelected onPress={() => navigation.navigate('Favorites')}>Favorites</NavBarItemSelected>
                <NavBarItemDisable>List</NavBarItemDisable>
                <NavBarItemDisable>Categories</NavBarItemDisable>
            </NavBar>
            <Content>
                <NoteTouch onPress={() => navigation.navigate('ViewNote')}>
                </NoteTouch>
            </Content>
            <Footer />
        </Container>
    );
};

export default Favorites;