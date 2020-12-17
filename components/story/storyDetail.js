import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import Story from './story'
import stories from './datastories'
import { ImageBackground, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'


export default function StoryDetail({ route }) {
  const navigation = useNavigation()
  const [data, setData] = useState([{}])
  useEffect(() => {
    let opj = route.params.data

    setData(opj)
    console.log(data)
  }, [])
  const callBack = (index) => {
    // let position = index.nativeEvent.position
    // console.log("index", index)
    // if(position===2){
    //   navigation.navigate('MainTab')
    // }
    navigation.navigate('MainTab')
  }
  return (
    <Swiper style={styles.wrapper}
      showsButtons={true}
      autoplay={true}
      loop={false}
      // onMomentumScrollEnd={callBack}
      index={0}
      showsPagination={false}
    >
      {stories.map((item, index) => (
        <View style={styles.slide1} key={index}>
          <View style={styles.header}>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
              <Image style={styles.avatar} source={{ uri: item.avatar }} />
              <Text style={styles.username}>{item.username}</Text>
            </View>
            <TouchableOpacity style={styles.icon}
              onPress={callBack}
            >
              <Icon name="close" size={35} />
            </TouchableOpacity>
          </View>
          <Image style={styles.image} source={{ uri: item.image }} />
        </View>
      ))}
    </Swiper>
  )
}
const styles = StyleSheet.create({
  wrapper: {},
  image: {
    height: "84%",
    width: "100%",
    resizeMode: 'cover',
    flexDirection: 'row', 
  },
  slide1: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#f1538e',
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginLeft: 10
  },
  username: {
    fontSize: 25,
    marginLeft: 20
  },
  icon: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 10
  }
})
