import React from 'react'
import { View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import {
    Container,
    Header,
    Content,
} from 'native-base';
import OneMes from './oneMes';
import SearchHome from '../home/search'
import avatarCat1 from '../images/avatar-cat-1.jpg';
import data from '../posts/data';
const mockData = [
    {
        avatar: { avatarCat1 },
        name: 'Min',
        mess: 'Hello',
        time: '2020-12-21T07:06:28.624Z',
    }

]

export default function Messenger() {
    return (
        <View>
            <SearchHome />
            <ScrollView>
                <View>
                    {
                        data.map((item, idx) => <OneMes
                            key={idx}
                            avatar={item.avatar}
                            name={item.username}
                            mess={item.comments[1].comment}
                            time={item.time}
                        />)
                    }
                </View>
                <View>
                    {
                        data.map((item, idx) => <OneMes
                            key={idx}
                            avatar={item.avatar}
                            name={item.username}
                            mess={item.comments[1].comment}
                            time={item.time}
                        />)
                    }
                </View>
            </ScrollView>
        </View>
    )
}
