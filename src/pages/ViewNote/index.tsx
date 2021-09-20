import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { LinearGradient } from 'expo-linear-gradient';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnUI, Easing, Value } from 'react-native-reanimated';

import addPhotoImg from '../../assets/add_a_photo.png';
import checkedImg from '../../assets/checked.png';
import addFileImg from '../../assets/file_new.png';
import addAudioImg from '../../assets/keyboard_voice.png';
import checkImg from '../../assets/check.png';
import backImg from '../../assets/chevron_big_left.png';
import filePlusImg from '../../assets/fileplus.png';
import trashImg from '../../assets/trash_empty.png';

import api from '../../services/api'

import { Container, HeaderContent, Title, Description, CircleButton, FooterContent, FooterOptions, CheckedImage, Image, HeaderOptions, BackButton, CreateAnimation, Check, Menu, Rectangle, FileImage, Dropdown, NoteTouch } from './styles';

const ViewNote: React.FC = ({ route }: any) => {
    const { id, title, body } = route.params;
    const navigation = useNavigation();

    const [dataTitle, setDataTitle] = useState(title);
    const [description, setDescription] = useState(body);

    const contentWidth = useSharedValue(180);
    const contentHeight = useSharedValue(180);
    const imageWidth = useSharedValue(24);
    const imageHeight = useSharedValue(24);
    const transitionValue = useSharedValue(1);

    const contentStyle = useAnimatedStyle(() => {
        return {
            width: contentWidth.value,
            height: contentHeight.value,
            transition: transitionValue.value,
        };
    });

    const imageSize = useAnimatedStyle(() => {
        return {
            width: imageWidth.value,
            height: imageHeight.value,
            transition: transitionValue.value,
        };
    });

    function handlePost() {
        editData();
    };

    const editData = async () => {
        try {
            const response = await api.put('/posts', {
                title: title,
                body: body
            });

            const data = '@posts';
            const posts: any = await AsyncStorage.getItem(data);
            const arr: any = JSON.parse(posts);

            arr.map(item => item.id === id
                ? { title: response.data.title, body: response.data.body, id: id } 
                : item
            );
            await AsyncStorage.setItem(data, JSON.stringify(arr));
         } catch (e) {
        };
    };

    function animationFunction() {
        handlePost();
        // transitionValue.value = withTiming(0)
        // contentWidth.value = withTiming(1000, { duration: 1100, easing: Easing.ease });
        // contentHeight.value = withTiming(1000, { duration: 400, easing: Easing.ease });
        // imageWidth.value = withTiming(180, { duration: 400, easing: Easing.ease });
        // imageHeight.value = withTiming(180, { duration: 400, easing: Easing.ease });

        setTimeout(() => {
            navigation.navigate('Notes');
            // contentWidth.value = withTiming(200);
            // contentHeight.value = withTiming(200);
            // imageWidth.value = withTiming(24);
            // imageHeight.value = withTiming(24);
        }, 500);
    };

    const handleDeleteNote = () => {
        navigation.navigate('Home', {excludeId: id});
    }

    return (
        <>
            <Animated.View>
                <Container>
                    <HeaderContent>
                        <BackButton onPress={() => navigation.goBack('Notes')}>
                            <Image source={backImg} />
                        </BackButton>
                        <HeaderOptions>
                            <FileImage source={filePlusImg} />
                            <CheckedImage source={checkedImg} />
                            <Menu>
                                <Rectangle></Rectangle>
                                <Rectangle></Rectangle>
                                <Rectangle></Rectangle>
                            </Menu>
                        </HeaderOptions>
                    </HeaderContent>

                    <Title onChangeText={text => setDataTitle(text)} value={dataTitle} placeholder="Title" placeholderTextColor="#EEEDF080"></Title>
                    <Description onChangeText={text => setDescription(text)} value={description} textAlignVertical="top" multiline={true} numberOfLines={70} placeholder="Description" placeholderTextColor="#EEEDF080" placeHolderStyle=""></Description>

                    <FooterContent>
                        <FooterOptions>
                            <Image source={addPhotoImg} />
                            <Image source={addFileImg} />
                            <Image source={addAudioImg} />
                            <NoteTouch onPress={handleDeleteNote}>
                                <Image source={trashImg} />
                            </NoteTouch>
                        </FooterOptions>
                        <LinearGradient style={{ borderRadius: 100, width: 48, height: 48 }} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={['#CB69C1', '#6C72CB']}>
                            <CircleButton onPress={animationFunction}>
                                <Image source={checkImg} />
                            </CircleButton>
                        </LinearGradient>
                    </FooterContent>
                </Container>
            </Animated.View>
            <CreateAnimation>
                <Animated.View style={[styles.contentStyle]}>
                    <Animated.View style={[styles.viewStyle, contentStyle]}>
                        <Check>
                            <Image style={imageSize} source={checkImg} />
                        </Check>
                    </Animated.View>
                </Animated.View>
            </CreateAnimation>
        </>
    );
};

const styles = StyleSheet.create({
    contentStyle: {
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        width: 100,
    },
    viewStyle: {
        display: 'flex',
        borderRadius: 100,
        alignContent: 'center',
        justifyContent: 'center',
        backgroundColor: '#CB69C1',
        flexDirection: 'row'
    },
});

export default ViewNote;