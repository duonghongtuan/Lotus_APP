import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';

export default function UserPost({ image }) {
    const [text, setText] = useState('')
    const navigation = useNavigation()
    const [obj, setobj] = useState([{}])
    var date = new Date()
    var id = date.getDate() + "id" + date.getHours() + date.getMinutes() + date.getSeconds()
    useEffect(() => {
        async function fetchData() {
            let array = await AsyncStorage.getItem('DATA')
            let DATA = JSON.parse(array);
            let ID = await AsyncStorage.getItem('id')
            var tempData = [];
            for (var index = 0; index < DATA.length; index++) {
                if (DATA[index].id == ID) {
                    tempData.push(DATA[index]);
                }
            }
            setobj(tempData)
        }
        fetchData();

    }, [])
    const addPost = async () => {
        let array = [{
            id: id,
            username: obj[0].username,
            totalLike: 0,
            password: "",
            phonenumber: obj[0].phonenumber,
            post: text,
            coverImage: obj[0].coverImage,
            imagePost: image,
            avatar: obj[0].avatar,
            video: '',
            dateTime: moment(),
            comments: [],
        }]
        setText('')
        image = ''
        await AsyncStorage.setItem('post', JSON.stringify(array))
        navigation.navigate('Lotus', {
            load: 'load'
        })
    }

    return (
        <View>
            <View style={styles.userpost}>
                <View style={styles.avatar}>
                    <Image style={styles.imageAvater} source={{ uri: obj[0].avatar }} />
                </View>
                <View style={styles.username}>
                    <Text style={styles.name}>
                        {obj[0].username}
                    </Text>
                    <Text>Công khai</Text>
                </View>
                <View style={styles.post}>
                    <TouchableOpacity
                        onPress={addPost}
                    >
                        <Text style={{ fontSize: 20 }}>Đăng</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.writepost}>
                <TextInput
                    placeholder="Bạn đang nghĩ gì?"
                    multiline={true}
                    style={{ fontSize: 20, height: 100 }}
                    onChangeText={text => {
                        setText(text)
                    }}
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    userpost: {
        flexDirection: "row"
    },
    imageAvater: {
        width: 60,
        height: 60,
        borderRadius: 30,

    },
    username: {
        flex: 4,
        padding: 10

    },
    name: {
        fontSize: 25,
        fontWeight: "bold",
    },
    post: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    },
    avatar: {
        flex: 1,
        justifyContent: "center",
        padding: 10
    },
    writepost: {
        marginTop: 20,
        marginLeft: 20,
        height: 50,
    },
})