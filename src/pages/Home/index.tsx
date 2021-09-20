import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, runOnUI, Easing } from 'react-native-reanimated';

import Button from '../../components/Button';
import logoImg from '../../assets/file.png';

import { Container, IconContent, Icon, IconText, BorderStyle, IconView } from './styles';

const Home: React.FC = () => {
    const navigation = useNavigation();

    const contentWidth = useSharedValue(200);
    const contentHeight = useSharedValue(200);
    const contentOpacity = useSharedValue(1);

    const contentStyle = useAnimatedStyle(() => {
        return {
            width: contentWidth.value,
            height: contentHeight.value,
            transition: contentOpacity.value,
        };
    });

    const imageOpacity = useAnimatedStyle(() => {
        return {
            opacity: contentOpacity.value,
        };
    });

    const opacityAnimation = useAnimatedStyle(() => {
        return {
            opacity: contentOpacity.value,
        };
    });

    const handleInitiaValues = async () => {
        const posts = await AsyncStorage.getItem('@posts');
        if(!posts) {
            await AsyncStorage.setItem('@posts', '[]')
        }
    };

    useEffect(() => {
        handleInitiaValues();
    }, []);


    function animationFunction() {
        contentWidth.value = withTiming(1000, { duration: 1100, easing: Easing.ease });
        contentHeight.value = withTiming(1000, { duration: 400, easing: Easing.ease });
        contentOpacity.value = withTiming(0, { duration: 600, easing: Easing.ease });
        setTimeout(() => {
            navigation.navigate('Notes')
            contentWidth.value = withTiming(200);
            contentHeight.value = withTiming(200);
            contentOpacity.value = withTiming(1);
        }, 500);
    }

    return (
        <Container>
            <IconContent>
                <Animated.View style={[contentStyle, styles.iconStyle]}>
                    <IconView>
                        <Icon>
                            <Animated.Image style={imageOpacity} source={logoImg} />
                        </Icon>
                        <Animated.Text style={[opacityAnimation, styles.textStyle]}>New Note</Animated.Text>
                    </IconView>
                </Animated.View>
            </IconContent>
            <BorderStyle>
                <Button onPress={animationFunction}>
                    Iniciar
                </Button>
            </BorderStyle>
        </Container>
    );
};

export default Home;

const styles = StyleSheet.create({
    iconStyle: {
        borderRadius: 60,
        backgroundColor: '#CB69C1',
    },

    textStyle: {
        color: '#fff',
        fontSize: 24,
        marginTop: 24,
        textAlign: 'center'
    },

    imageStyle: {
        width: 66,
        height: 84,
    },

});