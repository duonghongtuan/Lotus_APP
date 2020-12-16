import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import Swiper from 'react-native-swiper'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import Story from './story'
import stories from './datastories'


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
  // const Story = ({ data }) => {
  //   return (
  //     <View style={styles.slide1}>
  //       <Image style={styles.image} source={{ uri: data.avatar }} />
  //     </View>
  //   )
  // }
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
        <View style={styles.slide1} key ={index}>
          <Image style={styles.image} source={{ uri: item.image}} />
        </View>
      ))}
      {/* <View style={styles.slide1}>
        <Image style={styles.image} source={{ uri: 'https://static2.yan.vn/YanNews/2167221/202003/xuat-hien-voi-hinh-anh-nhuan-sac-min-khien-fan-dung-ngoi-khong-yen-a7af157b.jpg' }} />
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>Beautiful</Text>
        <Button onPress={callBack} title='ok' />
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>And simple</Text>
        <Button onPress={callBack} title='ok' />
      </View> */}
    </Swiper>
  )
}
const styles = StyleSheet.create({
  wrapper: {},
  image: {
    width: "100%",
    height: 500,
    resizeMode: 'cover'
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9'
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  }
})
