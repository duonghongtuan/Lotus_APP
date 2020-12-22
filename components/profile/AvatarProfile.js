import React, { useEffect, useState } from 'react'
import { View, Text, Image, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import IconFont from 'react-native-vector-icons/FontAwesome'
import pick from '../api/picker.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Item from '../posts/posts.js'

export default function AvartarProfile({ data, index }) {
    const [avatar, setAvatar] = useState(null)
    const [coverImage, setCoverImage] = useState(null)
    const [name, setName] = useState('')

    async function fetchData() {
        let username = await AsyncStorage.getItem('username')
        setName(username)
    }
    useEffect(() => {
        fetchData()
    }, [])

    const changeCoverImg = () => {
        pick(async (source) => {
            setCoverImage(source)
            let DATA = await AsyncStorage.getItem('DATA')
            let array = JSON.parse(DATA)
            array[index].coverImage = source
            await AsyncStorage.setItem('DATA', JSON.stringify(array))
        })
    }
    const changeAvatar = () => {
        pick(async (source) => {
            setAvatar(source)
            let DATA = await AsyncStorage.getItem('DATA')
            let array = JSON.parse(DATA)
            array[index].avatar = source
            await AsyncStorage.setItem('DATA', JSON.stringify(array))
        })
    }
    return (
        <View>
            <View >
                <View style={styles.cover}>
                    {coverImage ? <ImageBackground style={styles.coverImage} source={{ uri: coverImage }} >
                        <TouchableOpacity
                            onPress={changeCoverImg}
                        >
                            {name === data.username ?
                                <View style={styles.camera}>
                                    <Icon name="camera" size={20} />
                                </View> : null}
                        </TouchableOpacity>
                    </ImageBackground>
                        :
                        <ImageBackground style={styles.coverImage} source={{ uri: data.coverImage }} >
                            <TouchableOpacity
                                onPress={changeCoverImg}
                            >
                                {name === data.username ?
                                    <View style={styles.camera}>
                                        <Icon name="camera" size={20} />
                                    </View> : null}
                            </TouchableOpacity>
                        </ImageBackground>}

                </View>
                <View style={styles.avatar}>
                    {avatar ?
                        <TouchableOpacity onPress={changeAvatar}>
                            <Image style={styles.avatarImage} source={{ uri: avatar }} />
                            {name === data.username ?
                                <View style={styles.cameraAvatar}>
                                    <Icon name="camera" size={20} />
                                </View> : null}

                        </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={changeAvatar}>
                            <Image style={styles.avatarImage} source={{ uri: data.avatar }} />
                            {name === data.username ?
                                <View style={styles.cameraAvatar}>
                                    <Icon name="camera" size={20} />
                                </View> : null}
                        </TouchableOpacity>}

                </View>
            </View>
            <View style={{ alignItems: 'center', marginTop: 30 }}>
                <Text style={styles.username}>{data.username}</Text>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <View
                    style={styles.add}>
                    <Ionicons name="add-circle-outline" size={30} color={'#FFFFFF'} />
                    <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' }}
                    >Thêm tin</Text>
                </View>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.edit}
                    >
                        <Feather name="more-horizontal" size={30} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.info}>
                <IconFont name='mortar-board' size={25} />
                <Text style={{ marginLeft: 10, fontSize: 15 }}>Đã học tại</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}> HUST</Text>
            </View>
            <View style={styles.info}>
                <IconFont name='home' size={30} />
                <Text style={{ marginLeft: 15, fontSize: 15 }}>Sống tại</Text>
                <Text style={{ fontWeight: 'bold', fontSize: 15 }}> Hà Nội</Text>
            </View>
            <View style={styles.editinfo}>
                <Text style={{ fontSize: 18, color: '#0000BB' }}>
                    Chỉnh sửa chi tiết công khai</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    cover: {
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
        marginHorizontal: 10,
    },
    coverImage: {
        position: 'relative',
        height: 250,
        width: "100%",
        resizeMode: 'cover',
        alignItems: 'flex-end',
        justifyContent: 'flex-end'
    },
    camera: {
        backgroundColor: '#BBBBBB',
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        alignItems: 'center'
    },
    avatarImage: {
        height: 150,
        width: 150,
        resizeMode: 'cover',
        borderRadius: 75,
        marginTop: -75,
        borderWidth: 3,
        borderColor: '#FFFFFF'
    },
    cameraAvatar: {
        backgroundColor: '#BBBBBB',
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 130,
        marginTop: -50
    },
    username: {
        fontSize: 30,
        fontWeight: 'bold'
    },
    add: {
        flexDirection: 'row',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f1538e',
        borderRadius: 10,
        marginHorizontal: 20,
    },
    info: {
        flexDirection: 'row',
        marginTop: 20,
        alignItems: 'center',
        marginLeft: 20
    },
    editinfo: {
        flexDirection: 'row',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#99CCFF',
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 5,
        marginTop: 20
    }
})
