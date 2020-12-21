import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import DATA from '../posts/data'
import { Toast } from 'native-base';

const Login = () => {
    const [phonenumber, setPhonenumber] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useNavigation()
    const [array, setArray] = useState([{}])
    useEffect(() => {
        async function fetchData() {
            let data = await AsyncStorage.getItem('DATA')
            let array1 = []
            if (data) {
                array1 = JSON.parse(data)
            } else {
                array1 = DATA
            }
            setArray(array1)
        }
        fetchData()
    }, [])
    const login = async () => {
        
        for (var index = 0; index < array.length; index++) {
            if ((array[index].phonenumber === phonenumber) & (array[index].password === password)) {
                try {
                    //await AsyncStorage.clear()
                    await AsyncStorage.setItem('DATA', JSON.stringify(array))
                    await AsyncStorage.setItem('phonenumber', phonenumber)
                    return navigation.navigate('MainTab')
                } catch (error) {
                    console.log(error)
                }
            } 
        }       
        if ((phonenumber == '') | (password == '')) {
            Toast.show({
                text: "Xin hãy nhập thông tin",
                buttonText: "Okay"
            })
        }else {
            Toast.show({
                text: "Bạn đã nhập sai",
                buttonText: "Okay"
            })
        }

    }

    return (
        <View >
            <View style={styles.container}>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../images/logobrand.png')}
                    />
                </View>
                <View>
                    <TextInput
                        style={styles.textIput}
                        placeholder="Phone number"
                        defaultValue={phonenumber}
                        onChangeText={text => setPhonenumber(text)}
                    />
                    <TextInput
                        secureTextEntry={true}
                        style={styles.textIput}
                        placeholder="Password"
                        defaultValue={password}
                        onChangeText={text => setPassword(text)}
                    />
                    <Button
                        color="#de457d"
                        title="LOGIN"
                        onPress={login}
                    //onPress={() => navigation.navigate('MainTab')}
                    />
                </View>
            </View>
            <View style={styles.fixToText}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Register')}
                >
                    <Text>Chưa có tài khoản</Text>
                </TouchableOpacity>
                <Text>Quên mật khẩu</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        paddingTop: 80,
        backgroundColor: 'white',
    },

    logo: {
        width: 200,
        height: 200,
        alignItems: "center",
        justifyContent: "center",
    },

    textIput: {
        color: '#fc67a7',
        backgroundColor: '#fee7ef',
        width: 300,
        paddingLeft: 20,
        marginBottom: 20,
        fontSize: 15
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 55,
        marginTop: 10,
    },
});

export default Login;

