import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import ListMenu from './listMenu';

export default class Menu extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.user}>
                    <View style={styles.avatar}>
                        <Image style={styles.imageAvater} source={require('../images/logo.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30 }}>
                            Lotus
                        </Text>
                    </View>
                </View>
                <View style={styles.listMenu}>
                    <ListMenu />
                </View>
                <View></View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        height: "100%"
    },
    user: {
        flex: 2,
        flexDirection: "row"
    },
    imageAvater: {
        width: 60,
        height: 60,
        borderRadius: 40
    },
    avatar: {
        width: "30%",
        alignItems: "center",
        justifyContent: "center"
    },
    listMenu: {
        flex: 10,
    }
})