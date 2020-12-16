import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'

export default function FriendProfile() {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', marginTop: 10,  }}>
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
            <View style={{marginLeft: 20,marginBottom: 10 }}>
                <Text style={{fontSize: 18, color: '#888888'}}>399 người bạn</Text>
            </View>
            <View style={styles.listFriend}>
                <TouchableOpacity
                    style={styles.friend}
                >
                    <Image style={styles.avatar} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUONVyXYt8rv0PbnkzvLZV8ftmjHsdH6qmOg&usqp=CAU" }} />
                    <Text style={styles.username}> Jennie</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.friend}
                >
                    <Image style={styles.avatar} source={{ uri: "https://vtv1.mediacdn.vn/thumb_w/650/2019/8/26/69494009400154943152580015494244680001-vs-15667900255311947342930.jpg" }} />
                    <Text style={styles.username}>Spider Man</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.friend}
                >
                    <Image style={styles.avatar} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUONVyXYt8rv0PbnkzvLZV8ftmjHsdH6qmOg&usqp=CAU" }} />
                    <Text style={styles.username}> Jennie</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.listFriend}>
                <TouchableOpacity
                    style={styles.friend}
                >
                    <Image style={styles.avatar} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUONVyXYt8rv0PbnkzvLZV8ftmjHsdH6qmOg&usqp=CAU" }} />
                    <Text style={styles.username}> Jennie</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.friend}
                >
                    <Image style={styles.avatar} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUONVyXYt8rv0PbnkzvLZV8ftmjHsdH6qmOg&usqp=CAU" }} />
                    <Text style={styles.username}> Jennie</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.friend}
                >
                    <Image style={styles.avatar} source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUONVyXYt8rv0PbnkzvLZV8ftmjHsdH6qmOg&usqp=CAU" }} />
                    <Text style={styles.username}> Jennie</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity>
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