import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack'
import Icon from 'react-native-vector-icons/AntDesign'
import { HeaderButtons } from 'react-navigation-header-buttons'
import { useNavigation} from '@react-navigation/native'
import Videos from '../video/videos';
 
const VideoStack = createStackNavigator();

export default function VideoStackScreen() {
    const navigation = useNavigation()
    return (
        <VideoStack.Navigator initialRouteName="Video">
        
            <VideoStack.Screen name="Video"
                component={Videos}
                options={{
                    headerLeft: null,
                    headerTitle: 'Video',
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
        </VideoStack.Navigator>
    );
}