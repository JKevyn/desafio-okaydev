import React from 'react';
import { CardNote, CardNoteText, TitleNote, TextNote, CardNoteHeart, Image } from './styles';

import emptyHeartImg from '../../assets/empty-heart.png';
import heartImg from '../../assets/heart.png';

interface NoteProps {
    title: string,
    description: string
}

const Note: React.FC<NoteProps> = ({ title, description }) => {
    const sliceString = (str: string, max: number) => {
        return str.slice(0, max) + '...';
    }

    title = sliceString(title, 30);
    description = sliceString(description, 20);

    return (
        <CardNote>
            <CardNoteText>
                <TitleNote>{title}</TitleNote>
                <TextNote>{description}</TextNote>
            </CardNoteText>
            {/* <CardNoteHeart>
            <Image source={emptyHeartImg} />
        </CardNoteHeart> */}
        </CardNote>
    );
};

export default Note;