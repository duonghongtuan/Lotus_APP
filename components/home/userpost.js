import React, {useState} from 'react'
import { View, Text, StyleSheet, Image, TextInput } from 'react-native'

export default function UserPost() {
    const [text, setText]= useState('')
    return (
        <View>
            <View style={styles.userpost}>
                    <View style={styles.avatar}>
                        <Image style={styles.imageAvater} source={require('../images/user.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
                            No Name
                        </Text>
                        <Text>Công khai</Text>
                    </View>
                </View>
                <View style={styles.writepost}>
                    <TextInput
                        placeholder="Bạn đang nghĩ gì?"
                        multiline={true}
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
        width: 80,
        height: 80,
        borderRadius: 40
    },
    avatar: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center"
    },
    writepost: {
        marginTop: 20,
        marginLeft: 20,
        height: 50,
    },
})