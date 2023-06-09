import React from 'react';
import { View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import FooterStyle from './ComponentsStyles/FooterStyle';


const Footer = (userId) => {
    const navigation = useNavigation();

    console.log('FOOTER USER ID: ', userId)

    return (
        <SafeAreaView style={FooterStyle.safeArea}>
            <View style={FooterStyle.bottomContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('RequestScreen')}>
                    <Icon
                        name="list"
                        type="font-awesome"
                        size={40}
                        color="#ABABAB"
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen', {userId: userId})} >
                    <Icon
                        name="user"
                        type="font-awesome"
                        size={40}
                        color="#ABABAB"
                    />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Footer;