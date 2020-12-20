import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, Image, Modal } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import Octicon from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import IconFont from 'react-native-vector-icons/FontAwesome'
import { useNavigation } from '@react-navigation/native'

export default function Item({ item }) {
  const navigation = useNavigation()
  const [like, setLike] = useState(true)
  const [color, setColor] = useState('#777777')
  const [modal, setModal] = useState(false)
  const onChange = () => {
    setLike(!like)
    if (like === true) {
      setColor("#0000FF")
    } else {
      setColor('#777777')
    }
  }
  const goProfile = () => {
    navigation.navigate('Profile', {
      name: item.username
    })
  }
  const goCommet=()=>{
    navigation.navigate('CommentPost',{
      avatar: item.avatar,
      name: item.username,
      id: item.id
    })
  }
  return (
    <View>

      <Modal
        transparent={true}
        visible={modal}
      >
        <View style={styles.modal}>
          <TouchableOpacity
            style={{ alignItems: 'center' }}
            onPress={() => (
              setModal(!modal)
            )}
          >
            <Ionicons name="chevron-down" size={30} color="#f1538e" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listModal}
          >
            <View style={styles.iconModal}>
              <IconFont name="bookmark-o" size={30} />
            </View>
            <View style={styles.text00}>
              <Text style={styles.text01}>Lưu bài viết</Text>
              <Text style={styles.text02}>Thêm vào danh sách mục đã lưu</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listModal}
          >
            <View style={styles.iconModal}>
              <Icon name="staro" size={30} />
            </View>
            <View style={styles.text00}>
              <Text style={styles.text01}>Thêm vào mục yêu thích</Text>
              <Text style={styles.text02}>Ưu tiên bài viết trong bảng tin</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listModal}
          >
            <View style={styles.iconModal}>
              <Icon name="closesquareo" size={30} />
            </View>
            <View style={styles.text00}>
              <Text style={styles.text01}>Ẩn bài viết</Text>
              <Text style={styles.text02}>Ẩn bớt các bài viết tương tự</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listModal}
          >
            <View style={styles.iconModal}>
              <Ionicons name="md-notifications-outline" size={30} />
            </View>
            <View style={styles.text00}>
              <Text style={styles.text01}>Bật thông báo cho bài viết này</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>

      <View style={styles.user}>
        <TouchableOpacity
        style={{flex: 2}}
          onPress={goProfile}>
          <View style={{flexDirection: 'row' }}>
            <View style={styles.avatar}>
              <Image style={styles.imageAvater} source={{ uri: item.avatar }} />
            </View>
            <Text style={styles.username}>
              {item.username}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.edit}
          onPress={() => (setModal(!modal))}
        >
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
        <Text style={{ fontSize: 18, marginLeft: 200 }}>{item.comments?item.comments.length: "0"} bình luận</Text>
      </View>
      <View style={styles.postBottom}>
        <TouchableOpacity onPress={onChange}>
          <View style={styles.like}>
            <Icon style={styles.icon} name="like1" size={30} style={{ color: color }} />
            <Text style={{ fontSize: 17, marginLeft: 10, color: color }}>Thích</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={goCommet}
        >
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
    alignItems: 'flex-end',
    justifyContent: "center",
    marginRight: 20

  },
  post: {
    padding: 20,
    fontSize: 17
  },
  imagePost: {
    height: 300
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
  },
  modal: {
    marginTop: 400,
    padding: 20,
    backgroundColor: '#F8F8FF',
    height: "68%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30
  },
  listModal: {
    flexDirection: "row",
    alignItems: 'center',
    borderBottomColor: "#DDDDDD",
    borderBottomWidth: 2,
    padding: 3
  },
  iconModal: {
    flex: 1,
  },
  text00: {
    flex: 8,
    marginLeft: 20
  },
  text01: {
    fontSize: 20,
  }
});