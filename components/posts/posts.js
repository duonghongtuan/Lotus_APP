import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import Octicon from 'react-native-vector-icons/Octicons'
import Feather from 'react-native-vector-icons/Feather'

export default function Item({ item }) {
  const [like, setLike] = useState(true)
  const [color, setColor] = useState('#777777')
  const onChange = () => {
    setLike(!like)
    if (like === true) {
      setColor("#0000FF")
    } else {
      setColor('#777777')
    }
  }
  return (
    <View>
      <View style={styles.user}>
        <View style={{flex: 4, flexDirection: 'row'}}>
          <View style={styles.avatar}>
            <Image style={styles.imageAvater} source={{ uri: item.avatar }} />
          </View>
          <Text style={styles.username}>
            {item.username}
          </Text>
        </View>
        <TouchableOpacity style={styles.edit}>
          <Feather name="more-horizontal" size={30} />
        </TouchableOpacity>
      </View>
      <View >
        <Text style={styles.post}>{item.post}</Text>
      </View>
      {item.imagePost ?
        <View style={styles.image}>
          <Image style={styles.imagePost} source={{ uri: item.imagePost }} />
        </View>
        : null
      }
      <View style={styles.total}>
        <Icon style={styles.icon} name="like2" size={30} color="#f1538e" />
        <Text style={{ fontSize: 18 }}>{item.totalLike}</Text>
        <Text style={{ fontSize: 18, marginLeft: 200 }}>0 bình luận</Text>
      </View>
      <View style={styles.postBottom}>
        <TouchableOpacity onPress={onChange}>
          <View style={styles.like}>
            <Icon style={styles.icon} name="like1" size={30} style={{ color: color }} />
            <Text style={{ fontSize: 17, marginLeft: 10, color: color }}>Thích</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity  >
          <View style={styles.like}>
            <Octicon style={styles.icon} name="comment" size={30} />
            <Text style={{ fontSize: 17, marginLeft: 10, color: "#777777" }}>Bình luận</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  user: {
    marginTop: 10,
    flex: 2,
    flexDirection: "row"
  },
  username: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    marginLeft: 10,
  },
  imageAvater: {
    marginLeft: 10,
    width: 50,
    height: 50,
    borderRadius: 25
  },
  avatar: {
    alignItems: "center",
    justifyContent: "center"
  },
  edit: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",

  },
  post: {
    padding: 20,
    fontSize: 17
  },
  imagePost: {
    height: 200
  },
  total: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 20,
    borderTopWidth: 1,
    borderTopColor: '#BBBBBB',
    marginTop: 5,
  },
  postBottom: {
    flexDirection: 'row',
    marginTop: 5,
    padding: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#BBBBBB',
    borderBottomColor: '#BBBBBB'
  },
  like: {
    flexDirection: 'row',
    alignItems: 'center',
    width: "80%",
    justifyContent: 'center',
  }
});