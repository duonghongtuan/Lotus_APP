import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../home/home';
import { Image, View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import { HeaderButtons } from 'react-navigation-header-buttons'
import SearchHome from '../home/search'
import { useNavigation} from '@react-navigation/native'
 


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
                                onPress={() => alert('This is a message!')}
                                title="Info"
                                backgroundColor="#fff"
                                color="black"
                            />
                        </HeaderButtons>
                    ),
                }}
            />
            <HomeStack.Screen 
                name="Search" component={SearchHome}
            />
        </HomeStack.Navigator>
    );
}