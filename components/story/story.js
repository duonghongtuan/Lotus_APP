import React from 'react'
import {
    View, Text, Image,
    StyleSheet, ImageBackground,
    TouchableOpacity
} from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function Story({ item }) {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}
                onPress={()=>{
                    navigation.navigate('StoryDetail',{
                      data: item  
                    })
                }}
            >
                <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={styles.imageBackground} source={{ uri: item.image }}>
                    <Image style={styles.avatar} source={{ uri: item.avatar }} />
                </ImageBackground>
                <View style={styles.nameWrapper}>
                    <Text style={styles.name}>{item.username}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 5,

    },
    imageBackground: {
        position: 'relative',
        height: 200,
        width: 125,
    },
    avatar: {
        marginTop: 10,
        marginLeft: 10,
        resizeMode: 'cover',
        borderRadius: 50,
        height: 40,
        width: 40,
        borderWidth: 2,
        borderColor: '#ddd',
    },
    nameWrapper: {
        position: 'absolute',
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10
    }
})