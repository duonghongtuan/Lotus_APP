import React, { useEffect, useState } from 'react'
import {
    View, Text, Image,
    StyleSheet, ImageBackground,
    TouchableOpacity, Modal
} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import stories from './datastories'
import Icon from 'react-native-vector-icons/EvilIcons'
import Swiper from 'react-native-swiper'

export default function Story({ item, i }) {
    const navigation = useNavigation()
    const [visible, setVisible] = useState(false)
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8}
                onPress={() => {
                    setVisible(!visible)
                }}
            >
                <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={styles.imageBackground} source={{ uri: item.image }}>
                    <Image style={styles.avatar} source={{ uri: item.avatar }} />
                </ImageBackground>
                <View style={styles.nameWrapper}>
                    <Text style={styles.name}>{item.username}</Text>
                </View>
            </TouchableOpacity>
            <Modal
                transparent={true}
                visible={visible}
            >
                <Swiper style={styles.wrapper}
                    showsButtons={true}
                    autoplay={true}
                    loop={false}
                    index={i}
                    showsPagination={false}
                >
                    {stories.map((item, index) => (
                        <View style={styles.slide1} key={index}>
                            <View style={styles.header}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                    <Image style={styles.avatarModal} source={{ uri: item.avatar }} />
                                    <Text style={styles.usernameMd}>{item.username}</Text>
                                </View>
                                <TouchableOpacity style={styles.icon}
                                    onPress={() => setVisible(!visible)}
                                >
                                    <Icon name="close" size={35} />
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.image} source={{ uri: item.image }} />
                        </View>
                    ))}
                </Swiper>
            </Modal>
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
    },
    image: {
        height: "84%",
        width: "100%",
        resizeMode: 'contain',
        flexDirection: 'row',
    },
    slide1: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#FF99CC',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 5
    },
    avatarModal: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginLeft: 10
    },
    usernameMd: {
        fontSize: 25,
        marginLeft: 20
    },
    icon: {
        flex: 1,
        alignItems: 'flex-end',
        marginRight: 10
    }
})