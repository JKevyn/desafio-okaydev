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
import api from '../../services/api'

import { Container, HeaderContent, Title, Description, CircleButton, FooterContent, FooterOptions, CheckedImage, Image, HeaderOptions, BackButton, CreateAnimation, Check, Menu, Rectangle, FileImage, Dropdown } from './styles';

const CreateNote: React.FC = () => {
    const navigation = useNavigation();

    const [description, setDescription] = useState('');
    const [title, setTitle] = useState('');

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
        storeData();
    };

    const storeData = async () => {
        try {
            const response = await api.post('/posts', {
                title: title,
                body: description
            });
            
            const data = '@posts';
            const posts:any = await AsyncStorage.getItem(data);
            const arr:any = JSON.parse(posts);
            
            arr.push({ title: response.data.title, body: response.data.body, id: arr.length + 1 });
            await AsyncStorage.setItem(data, JSON.stringify(arr));
            console.warn(arr);
        } catch (e) {
            // saving error
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
                    <Title onChangeText={text => setTitle(text)} value={title} placeholder="Title" placeholderTextColor="#EEEDF080"></Title>
                    <Description onChangeText={text => setDescription(text)} value={description} textAlignVertical="top" multiline={true} numberOfLines={70} placeholder="Description" placeholderTextColor="#EEEDF080" placeHolderStyle=""></Description>
                    <FooterContent>
                        <FooterOptions>
                            <Image source={addPhotoImg} />
                            <Image source={addFileImg} />
                            <Image source={addAudioImg} />
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

export default CreateNote;