import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../home/home';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { HeaderButtons } from 'react-navigation-header-buttons'
import SearchHome from '../home/search'
import { useNavigation } from '@react-navigation/native'
import Profile from '../profile/profile';
import CommentPost from '../home/CommentPost';
import Feather from 'react-native-vector-icons/Feather'
import ListFriends from '../profile/ListFriends';



function LogoTitle() {

    return (
        <View style={{ flexDirection: "row" }}>
            <Image
                style={{ width: 150, height: 40 }}
                resizeMode="contain"
                source={require('../images/logo_brand_ngang.jpg')}
            />
        </View>
    );
}

const HomeStack = createStackNavigator();

export default function HomeStackScreen() {
    const navigation = useNavigation()
    return (
        <HomeStack.Navigator initialRouteName="Lotus">
            <HomeStack.Screen name="Lotus"
                component={HomeScreen}
                options={{
                    headerLeft: null,
                    headerTitle: <LogoTitle />,
                    headerRight: () => (
                        <HeaderButtons>
                            <Icon.Button
                                name='search1'
                                onPress={() => navigation.navigate('Search')}
                                title="Info"
                                backgroundColor="#fff"
                                color="black"
                            />
                            <Icon.Button
                                name='message1'
                                onPress={() => navigation.navigate('Messenger')}
                                title="Info"
                                backgroundColor="#fff"
                                color="black"
                            />
                        </HeaderButtons>
                    ),
                }}
            />
            <HomeStack.Screen name="Search" component={SearchHome} />
            <HomeStack.Screen name="Profile" component={Profile} />
            <HomeStack.Screen name="ListFriends" component={ListFriends} />
            <HomeStack.Screen
                name="CommentPost"
                component={CommentPost}
                options={({ route }) => ({
                    headerTitle: () => (
                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                            onPress={() => navigation.navigate('Profile', {
                                name: route.params.name
                            })}
                        >
                            <Image style={styles.avatar} source={{ uri: route.params.avatar }} />
                            <Text style={{ fontSize: 23, marginLeft: 10 }}>
                                {route.params.name}</Text>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <HeaderButtons>
                            <Feather name="more-horizontal" size={30} />
                        </HeaderButtons>
                    ),
                })}
            />
        </HomeStack.Navigator>
    );
}
const styles = StyleSheet.create({
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25,
        resizeMode: 'cover',
        marginLeft: -15
    },

})