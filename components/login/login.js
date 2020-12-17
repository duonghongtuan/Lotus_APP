import React, { useEffect, useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
    Button,
    TextInput
} from 'react-native';
import { useNavigation } from '@react-navigation/native'

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")
    const navigation = useNavigation()

    useEffect(() => {
        fetch('http://it4895.herokuapp.com/it4895/login?phonenumber=0865367921&password=123456')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                console.log("hello")
            })
            .then((json) => {
                return json.movies;
            })
            .catch((error) => {
                console.error(error);
                console.log("hello")
            });
    }, [])
    const login = () => {
        fetch('http://it4895.herokuapp.com/it4895/login?phonenumber=0865367921&password=123456')
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                console.log("hello")
            })
            .then((json) => {
                return json.movies;
            })
            .catch((error) => {
                console.error(error);
                console.log("hello")
            });
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
                        placeholder="User name"
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
                    <Button
                        color="#de457d"
                        title="LOGIN"
                    //    onPress={login}
                    onPress={() => navigation.navigate('MainTab')}
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
        marginBottom: 20
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 55,
        marginTop: 10,
    },
});

export default Login;

