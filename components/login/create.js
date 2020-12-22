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
import DATA from '../posts/data'

const Create = () => {
    const navigation = useNavigation()
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const [phonenumber, setPhonenumber] = useState("");
    const [birthday, setbirthday] = useState('')
    var date = new Date()
    var id = date.getDate() + "id" + date.getHours() + date.getMinutes() + date.getSeconds()
    const addProfile = async () => {
        let array = [{
            id: id,
            username: username,
            totalLike: '',
            password: password,
            phonenumber: phonenumber,
            post: username+ ' đã tham gia vào LOTUS',
            coverImage: 'https://scontent.fhan5-4.fna.fbcdn.net/v/t1.0-9/131594300_1798063953682872_4392273444146805285_n.jpg?_nc_cat=104&ccb=2&_nc_sid=730e14&_nc_ohc=3pZc-fqeX4oAX_l4lZM&_nc_ht=scontent.fhan5-4.fna&oh=f0a360cafa491731e6792cf00d462321&oe=60045D0C',
            imagePost: '',
            avatar: 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/131136768_1798062657016335_737043636929712195_n.jpg?_nc_cat=110&ccb=2&_nc_sid=730e14&_nc_ohc=ywClXZ0LB_IAX_ESDnC&_nc_ht=scontent.fhan5-2.fna&oh=f1cf7f6e38ec3635fd02f177fabe550b&oe=600588C6',
            video: '',
        }]
        await AsyncStorage.clear()
        let data = DATA.concat(array)
        await AsyncStorage.setItem('DATA', JSON.stringify(data))
        await AsyncStorage.setItem('phonenumber', phonenumber)
        return navigation.navigate('MainTab')
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
                        defaultValue={username}
                        onChangeText={text => setUsername(text)}
                    />

                    <TextInput
                        secureTextEntry={true}
                        style={styles.textIput}
                        placeholder="Password"
                        defaultValue={password}
                        onChangeText={text => setPassword(text)}
                    />

                    <TextInput
                        style={styles.textIput}
                        placeholder="Phone number"
                        defaultValue={phonenumber}
                        onChangeText={text => setPhonenumber(text)}
                    />

                    <TextInput
                        style={styles.textIput}
                        placeholder="Birthday"
                        defaultValue={birthday}
                        onChangeText={text => setbirthday(text)}
                    />
                    <Button
                        color="#de457d"
                        title="Create"
                        onPress={addProfile}
                        
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
