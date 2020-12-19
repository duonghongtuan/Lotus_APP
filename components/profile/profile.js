import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'
import AvartarProfile from './AvatarProfile'
import FriendProfile from './FriendProfile'
import { useNavigation } from '@react-navigation/native'
//import DATA from '../posts/data'
import Item from '../posts/posts'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Profile({ route }) {
    const navigation = useNavigation()
    const [obj, setobj] = useState([{}])

    useEffect(() => {
        async function fetchData() {
            let data = await AsyncStorage.getItem('DATA')
            let DATA = JSON.parse(data);
            let name = route.params.name
            var tempData = [];
            for (var index = 0; index < DATA.length; index++) {
                if (DATA[index].username == name) {
                    tempData.push(DATA[index]);
                }
            }
            setobj(tempData)
        }
        fetchData();
        // const name = route.params.name
        // var tempData = [];
        // for (var index = 0; index < DATA.length; index++) {
        //     if (DATA[index].username == name) {
        //         tempData.push(DATA[index]);
        //     }
        // }
        // setobj(tempData)
        // console.log(obj)
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>

                <AvartarProfile data={obj[0]} />

                <FriendProfile />
                <View style={styles.user}>
                    <TouchableOpacity
                        onPress={() => (navigation.navigate('Profile'))}
                    >
                        <Image style={styles.imageAvater}
                            source={{ uri: obj[0].avatar }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.writepost}
                        onPress={() => navigation.navigate('CreatePost')}
                    >
                        <Text style={{ fontSize: 20 }}>Bạn đang nghĩ gì?</Text>
                    </TouchableOpacity>
                </View>
                {obj.map((item, index) => (
                    <Item item={item} key={index} />
                ))}
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    user: {
        flexDirection: "row",
        padding: 20,
        borderColor: '#CCCCCC',
        borderBottomWidth: 2,
    },
    imageAvater: {
        width: 60,
        height: 60,
        borderRadius: 30
    },
    writepost: {
        marginTop: 20,
        marginLeft: 20,
        height: 50,
    },
})

