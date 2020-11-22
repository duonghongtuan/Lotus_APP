import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/AntDesign'
import { HeaderButtons } from 'react-navigation-header-buttons'
import { useNavigation} from '@react-navigation/native'
import Notifications from '../notification/notification';
 
const NotiStack = createStackNavigator();

export default function NotiStackScreen() {
    const navigation = useNavigation()
    return (
        <NotiStack.Navigator initialRouteName="Notification">
        
            <NotiStack.Screen name="Notification"
                component={Notifications}
                options={{
                    headerLeft: null,
                    headerTitle: 'Notification',
                    headerRight: () => (
                        <HeaderButtons>
                            <Icon.Button
                                name='search1'
                                onPress={() => navigation.navigate('Search')}
                                title="Info"
                                backgroundColor="#fff"
                                color="black"
                            />
                        </HeaderButtons>
                    ),
                }}
            />
        </NotiStack.Navigator>
    );
}