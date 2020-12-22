import React, { useState, useEffect } from "react";
import {
    StyleSheet, View, Text,
    TouchableOpacity, Image,
    Modal
} from "react-native";
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Comments({ item }) {
    const [data, setData] = useState([{}])
    const navigation = useNavigation()
    // const goProfile = () => {
    //     navigation.navigate('Profile', {
    //         name: item.username
    //     })
    // }
    useEffect(() => {
        async function fetchData() {
            let DATA = await AsyncStorage.getItem('DATA')
            const id = item.id
            var tempData = JSON.parse(DATA);
            var array = []
            for (var index = 0; index < tempData.length; index++) {
                if (tempData[index].id == id) {
                    array.push(tempData[index]);
                }
            }
            setData(array)
        }
        fetchData();
    }, [])
    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <TouchableOpacity
                   // onPress={goProfile}
                   >
                    <View style={styles.avatar}>
                        <Image style={styles.imageAvater} source={{ uri: data[0].avatar }} />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 4 }}>
                <TouchableOpacity>
                    <Text style={styles.username}>
                        {data[0].username}
                    </Text>
                </TouchableOpacity>
                <Text style={styles.comment}>
                    {item.comment}
                </Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#E8E8E8',
        borderRadius: 25,
        marginBottom: 15,
        padding: 7,
        marginLeft: 10,
        marginRight: 10
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    user: {
        marginTop: 10,
        flexDirection: "row"
    },
    username: {
        fontSize: 20,
        fontWeight: "bold",
    },
    imageAvater: {
        marginLeft: 10,
        width: 50,
        height: 50,
        borderRadius: 25
    },
    avatar: {
        alignItems: "center",
        justifyContent: "center"
    },
    comment: {
        fontSize: 17
    }
});