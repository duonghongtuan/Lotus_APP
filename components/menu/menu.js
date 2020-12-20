import React, { useEffect, useState } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import ListMenu from './listMenu';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

export default function Menu() {
    const navigation = useNavigation()
    const [obj, setobj] = useState([{}])
    useEffect(() => {
        async function fetchData() {
            let array = await AsyncStorage.getItem('DATA')
            let DATA = JSON.parse(array);
            let phone = await AsyncStorage.getItem('phonenumber')
            var tempData = [];
            for (var index = 0; index < DATA.length; index++) {
                if (DATA[index].phonenumber == phone) {
                    tempData.push(DATA[index]);
                }
            }
            setobj(tempData)
        }
        fetchData();

    }, [])
    return (
        <View style={styles.container}>
            <TouchableOpacity  style={styles.user}
            onPress={() => (navigation.navigate('Profile', {
                name: obj[0].username
            }))}
            >
                <View style={styles.avatar}>
                    <Image style={styles.imageAvater} source={{ uri: obj[0].avatar }} />
                </View>
                <View>
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        {obj[0].username}
                    </Text>
                </View>           
            </TouchableOpacity>
            <View style={styles.listMenu}>
                <ListMenu />
            </View>
            <View></View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        height: "100%"
    },
    user: {
        flex: 2,
        flexDirection: "row",
        alignItems: "center",
    },
    avatar: {
        justifyContent: "center",
        padding: 30
    },
    imageAvater: {
        width: 70,
        height: 70,
        borderRadius: 35
    },

    listMenu: {
        flex: 10,
    }
})