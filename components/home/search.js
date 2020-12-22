import React, { useEffect, useState } from 'react'
import {
    View, Image, Text, SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    ScrollView
}
    from "react-native";
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SearchHome() {
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const [DATA, setDATA] = useState([{}])
    const [array, setArray] = useState([{}])
    const [array1, setArray1] = useState([{}])

    async function fetchData() {
        let array = await AsyncStorage.getItem('DATA')
        var data = JSON.parse(array);
        setDATA(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    const updateSearch = (search) => {
        setSearch(search);
        var tempData = [];
        for (var index = 0; index < DATA.length; index++) {
            if (DATA[index].username == search) {
                tempData.push(DATA[index]);
            }
        }
        if (tempData[0] != null) {
            setArray(tempData)
        }
        if (search === '') {
            setArray([{}])
        }
    };
    const goProfile = () => {
        navigation.navigate('Profile', {
          name: array[0].username
        })
      }
    return (
        <View>
            <View>
                <SearchBar
                    placeholder="Tìm kiếm"
                    onChangeText={updateSearch}
                    value={search}
                    containerStyle={{ backgroundColor: '#FFFFFF', borderBottomColor: '#FFFFFF', borderTopColor: '#FFFFFF' }}
                    inputContainerStyle={{ backgroundColor: "#C0C0C0", borderRadius: 30, padding: 5 }}
                    inputStyle={{ backgroundColor: "#C0C0C0", padding: 5, color: '#000000' }}
                />
            </View>
            {array[0].username ?
                <View style={styles.user}>
                    <TouchableOpacity
                        style={{ flex: 2 }}
                        onPress={goProfile}
                    >
                        <View style={{ flexDirection: 'row' }}>
                            <View style={styles.avatar}>
                                <Image style={styles.imageAvater} source={{ uri: array[0].avatar }} />
                            </View>
                            <View style={styles.name}>
                                <Text style={styles.username}>
                                    {array[0].username}
                                </Text>
                                <Text>10 bạn chung</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View> 
                : null}
        </View>
    )
}
const styles = StyleSheet.create({
    name: {
        flexDirection: 'column',
        padding: 20
    },
    user: {
        marginTop: 10,
        flexDirection: "row",
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#FFB6C1'
    },
    username: {
        fontSize: 20,
        fontWeight: "bold",
    },
    imageAvater: {
        marginLeft: 10,
        width: 70,
        height: 70,
        borderRadius: 35
    },
    avatar: {
        alignItems: "center",
        justifyContent: "center"
    },
    edit: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: "center",
        marginRight: 20
    },
})