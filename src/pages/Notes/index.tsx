import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Container, Content, NavBar, NavBarItem, NavBarItemSelected, NavBarItemDisable, NoteTouch } from './styles';

import Header from '../../components/Header'
import Note from '../../components/Note';
import Footer from '../../components/Footer';

interface INotes {
    title: string,
    body: string,
}

const Notes: React.FC = () => {

    const navigation = useNavigation();

    const [notes, setNotes] = useState<INotes[]>([]);

    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('@posts')
            return jsonValue != null ? JSON.parse(jsonValue) : null;
        } catch (e) {
            // error reading value
        }
    };

    const getNoteList = async () => {
        const _notes = await getData();
        setNotes(_notes);
    };

    useEffect(() => {
        getNoteList();
    }, []);

    return (
        <Container>
            <Header />
            <NavBar>
                <NavBarItemSelected onPress={() => navigation.navigate('Notes')}>Notes</NavBarItemSelected>
                <NavBarItem onPress={() => navigation.navigate('Favorites')}>Favorites</NavBarItem>
                <NavBarItemDisable onPress={() => navigation.navigate('CreateNote')}>List</NavBarItemDisable>
                <NavBarItemDisable>Categories</NavBarItemDisable>
            </NavBar>
            <Content>
                
                {notes.map((item, key) =>
                    <NoteTouch onPress={() => navigation.navigate('ViewNote', item)}>
                        <Note key={key} title={item.title} description={item.body} />
                    </NoteTouch>
                )}
            </Content>
            <Footer />
        </Container>
    );
};

export default Notes;