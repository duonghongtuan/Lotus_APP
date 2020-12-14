import React, { Component } from 'react'
import {
    Text, View, Button, StyleSheet,
    ScrollView, SafeAreaView
} from 'react-native'
import VideoList from './VideoList'
import DATA from '../posts/data'


export default class Videos extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    {DATA.map((item, index) => (
                        <VideoList item={item} key={index} />
                    ))}
                </ScrollView>
            </SafeAreaView>
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