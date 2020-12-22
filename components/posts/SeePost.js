import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'

export default function SeePost({item}) {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#FF99CC'}}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.icon}
              //onPress={callBack}
            >
              <Icon name="close" size={35} />
            </TouchableOpacity>
          </View>
        <Image style={styles.image} source={{ uri: item.imagePost }} />
        </View>
    )
}
const styles = StyleSheet.create({
    image: {
      height: "84%",
      width: "100%",
      resizeMode: 'contain',
      flexDirection: 'row', 
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
  