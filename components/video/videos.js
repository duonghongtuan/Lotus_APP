import React, { Component } from 'react'
import { Text, View, Button, StyleSheet } from 'react-native'
import VideoList from './video'


export default class Videos extends Component {
    render() {
        return (
            <View style={styles.container}>
                <VideoList />
            </View>
        )
    }
}
var styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        width: "100%",
        height: "100%",
    },
});