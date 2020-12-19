import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { block } from 'react-native-reanimated'
import OneNotification from './oneNotification.js'

export default class Notifications extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: 'white' }}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.subTitle}>Mới</Text>
                        <OneNotification />
                    </View>
                    <View>
                        <Text style={styles.subTitle}>Trước đó</Text>
                        <OneNotification />
                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },

    subTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    }
})
