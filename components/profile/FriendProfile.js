import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import DATA from '../posts/data'

const Frineds = ({item}) => {
    const navigation = useNavigation()
    // const goProfile = () => {
    //     navigation.navigate('Profile', {
    //         name: item.username
    //     })
    // }
    return (
        <TouchableOpacity style={styles.friend}
            //onPress={goProfile(item)}
        >
            <Image style={styles.avatar} source={{ uri: item.avatar }} />
            <Text style={styles.username}>{item.username}</Text>
        </TouchableOpacity>
    )
}

export default function FriendProfile() {
    const navigation = useNavigation()
    const [array1, setArray1] = useState([{}])
    const [array2, setArrar2] = useState([{}])

    const goFriends = () => {
        navigation.navigate('ListFriends')
    }

    useEffect(() => {
        var tempData1 = [];
        var tempData2 = [];
        for (var index = 0; index < DATA.length; index++) {
            if (index < 3) {
                tempData1.push(DATA[index]);
            }
            if (index > 2 & index < 6) {
                tempData2.push(DATA[index]);
            }
        }
        setArray1(tempData1)
        setArrar2(tempData2)
    }, [])

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 10, }}>
                <View style={{ flex: 1, marginLeft: 20 }}>
                    <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
                        Bạn bè
                        </Text>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', marginRight: 20, marginTop: 10 }}>
                    <Text style={{ fontSize: 20 }}>
                        Yêu cầu kết bạn
                    </Text>
                </View>
            </View>
            <View style={{ marginLeft: 20, marginBottom: 10 }}>
                <Text style={{ fontSize: 18, color: '#888888' }}>399 người bạn</Text>
            </View>
            <View style={styles.listFriend}>
                {array1.map((item, index) => (
                   <Frineds item={item} key={index}/> 
                ))}
            </View>
            <View style={styles.listFriend}>
                {array2.map((item, index) => (
                    <Frineds item={item} key={index}/> 
                ))}
            </View>
            <TouchableOpacity
                onPress={goFriends}
            >
                <View style={styles.allFriend}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
                        Xem tất cả bạn bè</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        borderTopWidth: 2,
        borderColor: '#CCCCCC',
        marginTop: 10,
        borderBottomWidth: 2,
        borderRadius: 20,
        padding: 5
    },
    friend: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center'
    },
    listFriend: {
        flexDirection: "row",
        alignItems: 'stretch',
    },
    avatar: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    username: {
        fontWeight: 'bold',
        fontSize: 20,
    },
    allFriend: {
        flexDirection: 'row',
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#BBBBBB',
        borderRadius: 10,
        marginHorizontal: 20,
        padding: 5,
        marginTop: 20
    }
})