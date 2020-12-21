import React, { useEffect, useState } from 'react'
import {
    View, Image, Text, SafeAreaView,
    TouchableOpacity,
    StyleSheet,
    Animated,
    RefreshControl,
    ScrollView
}
    from "react-native";
import { SearchBar } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'
import Feather from 'react-native-vector-icons/Feather'
import DATA from '../posts/data'
import { FlatList } from 'react-native-gesture-handler';

const Friend = ({item}) => {
    const navigation = useNavigation()
    const goProfile = () => {
        navigation.navigate('Profile', {
          name: item.username
        })
      }
    return (
        <View style={styles.user}>
            <TouchableOpacity
                style={{ flex: 2 }}
                onPress={goProfile}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={styles.avatar}>
                        <Image style={styles.imageAvater} source={{ uri: item.avatar }} />
                    </View>
                    <Text style={styles.username}>
                        {item.username}
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.edit}
                onPress={() => (setModal(!modal))}
            >
                <Feather name="more-horizontal" size={30} />
            </TouchableOpacity>
        </View>
    )
}

export default function ListFriends() {
    const navigation = useNavigation()
    const [search, setSearch] = useState('')
    const updateSearch = (search) => {
        setSearch(search);
      };
    return (
        <View>
            <View>
                <SearchBar
                    placeholder="Tìm kiếm bạn bè"
                    onChangeText={updateSearch}
                    value={search}
                    containerStyle={{backgroundColor:'#FFFFFF', borderBottomColor: '#FFFFFF', borderTopColor:'#FFFFFF'}}
                    inputContainerStyle={{backgroundColor: "#C0C0C0", borderRadius: 30, padding: 5}}
                    inputStyle={{backgroundColor: "#C0C0C0",padding: 5, color: '#000000'}}
                />
            </View>
            <View style={{flexDirection: 'row'}}>
                <View style={styles.total}>
                    <Text style={{fontSize: 20}}>{DATA.length} người bạn</Text>
                </View>
                <View>
                    <Text style={{fontSize: 18, color: '#f1538e', marginRight: 20}}>Sắp xếp</Text>
                </View>
            </View>
            <ScrollView>
            {DATA.map((item, index) => (
                    <Friend item={item} key={index} />
                ))}
            </ScrollView>           
        </View>
    )
}
const styles = StyleSheet.create({
    total:{
        flex: 2,
        marginLeft: 20,
    },
    user: {
        marginTop: 10,
        flexDirection: "row",
        marginBottom: 20
      },
      username: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 10,
        marginLeft: 10,
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