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
    const [index, setIndex] = useState(0)

    useEffect(() => {
        async function fetchData() {
            let data = await AsyncStorage.getItem('DATA')
            let DATA = JSON.parse(data);
            let name = route.params.name
            var tempData = [];
            let x=0
            for (var i = 0; i < DATA.length; i++) {
                if (DATA[i].username == name) {
                    tempData.push(DATA[i]);
                    x=i
                }
            }
            setIndex(x)
            setobj(tempData)
        }
        fetchData();
    }, [])
    return (
        <View style={styles.container}>
            <ScrollView>
                <AvartarProfile data={obj[0]} index={index} />
                <FriendProfile />
                <View style={styles.user}>
                    <TouchableOpacity
                        onPress={() => (navigation.navigate('Profile'))}
                    >
                        {obj[0] ?
                            <Image style={styles.imageAvater}
                                source={{ uri: obj[0].avatar }} />
                            : null}

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

