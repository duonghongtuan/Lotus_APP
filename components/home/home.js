import React from "react";
import { View, Image, Text, SafeAreaView, TouchableOpacity, StyleSheet } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import DATA from '../posts/data'
import Item from '../posts/posts'
import { useNavigation } from '@react-navigation/native'
import Stories from "../story/stories";

const HomeScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
                <View style={styles.user}>
                    <Image style={styles.imageAvater} source={require('../images/user.png')} />
                    <TouchableOpacity
                        style={styles.writepost}
                        onPress={() => navigation.navigate('CreatePost')}
                    >
                        <Text style={{ fontSize: 20 }}>Bạn đang nghĩ gì?</Text>
                    </TouchableOpacity>
                </View>
                <Stories />
                {DATA.map((item, index) => (
                    <Item item={item} key={index} ></Item>
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