import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/AntDesign'
import { HeaderButtons } from 'react-navigation-header-buttons'
import { useNavigation} from '@react-navigation/native'
import Menu from '../menu/menu';
 
const MenuStack = createStackNavigator();

export default function MenuStackScreen() {
    const navigation = useNavigation()
    return (
        <MenuStack.Navigator initialRouteName="Menu">
        
            <MenuStack.Screen name="Menu"
                component={Menu}
                options={{
                    headerLeft: null,
                    headerTitle: 'Menu',
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
        </MenuStack.Navigator>
    );
}