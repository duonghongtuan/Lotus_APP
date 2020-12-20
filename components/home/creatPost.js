import React, { Component } from 'react'
import {
    Text, View, StyleSheet, Image, TextInput,
    TouchableOpacity,
    Modal,
    TouchableHighlight

} from 'react-native'
import pick from '../api/picker.js'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import UserPost from './userpost.js'

export default class CreatePost extends Component {
    // ảnh    
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            avatarSource: null,
            modalVisible: false
        }
    }
    Show() {
        pick(source => this.setState({ avatarSource: source }))
    }

    render() {

        console.log(this.state.avatarSource)
        let img = this.state.avatarSource == null ? null :
            <Image
            source={{uri:this.state.avatarSource}}
                style={{ height: 300, width: 400 }}
                resizeMode="contain"
            />
        return (
            <View style={styles.container}>
                <UserPost image={this.state.avatarSource}/>
                <View style={{ alignItems: "center", marginTop: 40 }}>
                    {img}
                </View>
                <View style={styles.listpost}>
                    <Modal
                        transparent={true}
                        visible={this.state.modalVisible}
                    >
                        <View style={{ flex: 1 }}>
                            <View style={{ marginTop: 400, padding: 20, backgroundColor: '#ffff', height: 210 }}>
                                <TouchableOpacity
                                    style={{ alignItems: 'center' }}
                                    onPress={() => {
                                        this.setState({ modalVisible: false })
                                    }}
                                >
                                    <Ionicons name="chevron-down" size={30} color="#f1538e" />
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={this.Show.bind(this)}
                                >
                                    <Ionicons name="image-outline" size={30} color="green" />
                                    <Text style={styles.texticon}>
                                        Ảnh
                                </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={this.Show.bind(this)}
                                >
                                    <Ionicons style={styles.icon} name="videocam" size={30} color="#f1538e" />
                                    <Text style={styles.texticon}>
                                        Video
                                </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.buttonImage}
                                    onPress={this.Show.bind(this)}
                                >
                                    <Icon style={styles.icon} name="smile-circle" size={30} color="yellow" />
                                    <Text style={styles.texticon}>
                                        Cảm xúc
                                </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>

                </View>
                <TouchableHighlight
                    style={styles.openButton}
                    onPress={() => {
                        this.setState({ modalVisible: true })
                    }}
                >
                    <View style={styles.bottom}>
                        <Ionicons style={styles.icons} name="image-outline" size={30} color="green" />
                        <Ionicons style={styles.icons} name="videocam" size={30} color="#f1538e" />
                        <Icon style={styles.icons} name="smile-circle" size={30} color="yellow" />
                    </View>
                </TouchableHighlight>
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
    writepost: {
        flex: 4,
        marginLeft: 20,

    },
    listpost: {
        flex: 4,
    },
    buttonImage: {
        flexDirection: "row",
        marginBottom: 20
    },
    icons: {
        marginRight: 30
    },
    texticon: {
        fontSize: 20,
        marginLeft: 20
    },
    bottom: {
        flexDirection: 'row',
        paddingLeft: 20,
        borderTopColor: '#f1538e',
        borderWidth: 1,
        backgroundColor: '#ffff'
    }
});