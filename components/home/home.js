import React, { useEffect, useState } from 'react'
import {
    View, Image, Text, SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    RefreshControl,
    ScrollView
}
    from "react-native";
import Item from '../posts/posts'
import { useNavigation } from '@react-navigation/native'
import Stories from "../story/stories";
import AsyncStorage from '@react-native-async-storage/async-storage';

const wait = (timeout) => {
    return new Promise(resolve => {
        setTimeout(resolve, timeout);
    });
}
const HomeScreen = ({ route }) => {
    const navigation = useNavigation()
    const [obj, setobj] = useState([{}])
    const [data, setData] = useState([{}])
    const [refreshing, setRefreshing] = useState(false)

    async function fetchData() {
        let id = await AsyncStorage.getItem('id')
        let array = await AsyncStorage.getItem('DATA')
        var DATA = JSON.parse(array);
        var tempData = [];
        for (var index = 0; index < DATA.length; index++) {
            if (DATA[index].id == id) {
                tempData.push(DATA[index]);
            }
        }
        setobj(tempData)
        let post = await AsyncStorage.getItem('post')
        let array1 = []
        let array2 = []
        if(post){
            array1 = JSON.parse(post)
            array2 = array1.concat(DATA)
            await AsyncStorage.removeItem('post')  
        } else {
            array2 = DATA
        }
        await AsyncStorage.setItem('DATA', JSON.stringify(array2))
        setData(array2)
    }
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        fetchData()
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        fetchData()
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }

            >
                <View style={styles.user}>
                    <TouchableOpacity
                        onPress={() => (navigation.navigate('Profile', {
                            name: obj[0].username
                        }))}
                    >
                        <Image style={styles.imageAvater} source={{ uri: obj[0].avatar }} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.writepost}
                        onPress={() => navigation.navigate('CreatePost')}
                    >
                        <Text style={{ fontSize: 20 }}>Bạn đang nghĩ gì?</Text>
                    </TouchableOpacity>
                </View>
                <Stories />
                {data.map((item, index) => (
                    <Item item={item} key={index} i={index} ></Item>
                ))}
            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    user: {
        flexDirection: "row",
        padding: 10
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
export default HomeScreen