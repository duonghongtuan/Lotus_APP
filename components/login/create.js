import React,{useState} from 'react';
import {
    Button,
    Image,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Text,
    View,
    ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';

const Create = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [phonenumber, setPhonenumber] = useState("");
    
    const addUser = async () => {
        let array = [{
            id: "12fdddd3",
            username: username,
            totalLike: 10,
            password: "",
            phonenumber: obj[0].phonenumber,
            post: text,
            coverImage: obj[0].coverImage,
            imagePost: image,
            avatar: obj[0].avatar,
            video: '',
        }]
        setText('')
        image=''
        await AsyncStorage.setItem('post', JSON.stringify(array)) 
        navigation.navigate('Lotus')
    }
   
    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../images/logosignup.png')}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textIput}
                        placeholder="Username"
                        onChangeText={text => setUsername(text)}
                    />

                    <TextInput
                        secureTextEntry={true}
                        style={styles.textIput}
                        placeholder="Password"
                        onChangeText={text => setPassword(text)}
                    />

                    <TextInput
                        style={styles.textIput}
                        placeholder="Phone number"
                        onChangeText={text => setPhonenumber(text)}
                    />

                    <TextInput
                        style={styles.textIput}
                        placeholder="Birthday"
                    />
                    <Button
                        color="#de457d"
                        title="Create"

                    />
                </View>

                <View style={{ flexDirection: "row", marginTop: 10 }}>
                    <Text style={{ paddingRight: 10 }}>Đã có tài khoản</Text>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                    >
                        <Text style={{ fontWeight: 'bold' }}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
    },

    logo: {
        width: 200,
        height: 120,
        marginBottom: 30,
    },

    textIput: {
        color: '#fc67a7',
        backgroundColor: '#fee7ef',
        width: 300,
        paddingLeft: 20,
        marginBottom: 20
    },
})

export default Create;
