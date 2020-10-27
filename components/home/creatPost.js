import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TextInput,
    TouchableOpacity,
    
} from 'react-native'
import pick from '../api/picker.js'
import Icon from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default class CreatePost extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: '',
            avatarSource: null
        }
    }
    Show(){
        pick(source => this.setState({avatarSource: source}))
      }
    render() {
        let img = this.state.avatarSource == null? null:
        <Image
            source={this.state.avatarSource}
            style={{height:200, width: 200}}
            resizeMode = "contain"
        />
        return (
            <View style={styles.container}>
                <View style={styles.userpost}>
                    <View style={styles.avatar}>
                        <Image style={styles.imageAvater} source={require('../images/user.png')} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 30}}>
                            No Name
                        </Text>
                        <Text>Công khai</Text>
                    </View>
                </View>
                <View style={styles.writepost}>
                    <TextInput
                    placeholder="Bạn đang nghĩ gì?"
                    multiline={true}
                    onChangeText={text => {this.setState(() =>{
                        return{
                            text: text
                        }
                    })}}
                    />
                    {img}
                </View>
                <View style={styles.listpost}>
                    <TouchableOpacity
    
                        style={styles.buttonImage}
                        onPress={this.Show.bind(this)}
                    >
                        <Ionicons name="image-outline" size={30} color="green" />
                        <Text style={{marginTop: 5, marginLeft: 20}}>
                            Ảnh
                        </Text>
                    </TouchableOpacity>
                </View>
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
    userpost: {
        flex: 2,
        flexDirection: "row"
    },
    imageAvater: {
        width: 80,
        height: 80,
        borderRadius: 40
    },
    avatar: {
        width: "30%",
        backgroundColor: "#ffff",
        alignItems: "center",
        justifyContent: "center"
    },
    writepost: {
        flex: 4,
        marginLeft: 20,
        
    },
    listpost: {
        flex: 4, 
    },
    buttonImage: {
        flexDirection: "row"
    }
});