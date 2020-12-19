import React from 'react';
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

const Create = () => {
    const navigation = useNavigation()
   
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
                    />

                    <TextInput
                        secureTextEntry={true}
                        style={styles.textIput}
                        placeholder="Password"
                    />

                    <TextInput
                        style={styles.textIput}
                        placeholder="Phone number"
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
