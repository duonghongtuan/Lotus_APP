import React from 'react'
import { View, Text, Image, ScrollView, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'
import stories from './datastories'
import Story from './story'

export default function Stories() {
    return (
        <View>
            <View style={styles.container}>
                <ScrollView showsHorizontalScrollIndicator={false} style={styles.stories} horizontal={true}>
                    <View style={styles.addStory}>
                        <TouchableOpacity activeOpacity={0.8}>
                            <ImageBackground imageStyle={{ resizeMode: 'cover' }} style={styles.imageBackground} source={{ uri: 'https://static2.yan.vn/YanNews/2167221/202003/xuat-hien-voi-hinh-anh-nhuan-sac-min-khien-fan-dung-ngoi-khong-yen-a7af157b.jpg' }}>
                                <View style={styles.iconWrapper}>
                                    <Icon name='plus' size={24} color='#318bfb' />
                                </View>
                            </ImageBackground>
                            <View style={styles.nameWrapper}>
                                <Text style={styles.name}>Add your story</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {stories.map((item, index) => (
                        <Story item={item} key={index} />
                    ))}
                </ScrollView>
            </View >
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        borderColor: '#ddd',
        borderWidth: 1,
        marginVertical: 10
    },
    addStory: {
        borderRadius: 20,
        overflow: 'hidden',
        marginHorizontal: 5,

    },
    imageBackground: {
        position: 'relative',
        height: 200,
        width: 125,
    },
    iconWrapper: {
        marginTop: 10,
        marginLeft: 10,
        borderRadius: 50,
        height: 40,
        width: 40,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {

    },
    nameWrapper: {
        position: 'absolute',
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
    },
    name: {
        color: 'white',
        fontWeight: 'bold',
        marginBottom: 20,
        marginLeft: 10
    },
    stories: {
        flexWrap: 'nowrap',

    }
})
