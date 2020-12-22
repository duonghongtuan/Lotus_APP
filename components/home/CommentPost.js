import React, { useState, useEffect } from "react";
import {
    StyleSheet, View, Text, TouchableOpacity,
    Image, Modal,
    SafeAreaView,
    TextInput, ScrollView
} from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import Octicon from 'react-native-vector-icons/Octicons'
import Ionicons from 'react-native-vector-icons/Ionicons'
import IconFont from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Comments from "./Comments";

export default function CommentPost({ route }) {
    const navigation = useNavigation()
    const [like, setLike] = useState(true)
    const [color, setColor] = useState('#777777')
    const [modal, setModal] = useState(false)
    const [item, setItem] = useState([{}])
    const [text, setText] = useState('')
    const [array, setArray] = useState([])
    const [index, setIndex] = useState(null)

    async function fetchData() {
        let DATA = await AsyncStorage.getItem('DATA')
        var tempData = JSON.parse(DATA);
        setArray(tempData)
        var data = []
        const id = route.params.id
        for (var index = 0; index < tempData.length; index++) {
            if (tempData[index].id == id) {
                data.push(tempData[index]);
                setIndex(index)
            }
        }
        setItem(data)
        console.log(item)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const onChange = () => {
        setLike(!like)
        if (like === true) {
            setColor("#0000FF")
        } else {
            setColor('#777777')
        }
    }

    const comment = async () => {
        let id = await AsyncStorage.getItem('id')
        let array1 = [{ id: id, comment: text }]
        let array2 = array[index].comments
        let comments = array2.concat(array1)
        array[index].comments = comments
        await AsyncStorage.setItem('DATA', JSON.stringify(array))
        fetchData()
    }
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <ScrollView>
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

                    <View >
                        <Text style={styles.post}>{item[0].post}</Text>
                    </View>
                    {item[0].imagePost ?
                        <View style={styles.image}>
                            <Image style={styles.imagePost} source={{ uri: item[0].imagePost }} />
                        </View>
                        : null
                    }
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
                    <View style={styles.total}>
                        <Icon style={styles.icon} name="like2" size={30} color="#f1538e" />
                        <Text style={{ fontSize: 18, marginLeft: 10 }}>{item[0].totalLike}</Text>
                        {/* <Text style={{ fontSize: 18, marginLeft: 200 }}>0 bình luận</Text> */}
                    </View>
                </View>
                <View style={styles.comment}>
                    <View>
                        {item[0].comments ?
                            item[0].comments.map((item, index) => (
                                <Comments item={item} key={index} />
                            ))
                            : null}
                    </View>
                </View>
            </ScrollView>
            <View style={styles.addcomment}>
                <Ionicons name="image-outline" size={30} color="green" />
                <View style={styles.write}>
                    <TextInput
                        placeholder="Viết bình luận"
                        multiline={true}
                        style={styles.textinput}
                        clearTextOnFocus={true}
                        onChangeText={text => {
                            setText(text)
                        }}
                    />
                    <Feather style={styles.icon} name="smile" size={30} />
                </View>
                <TouchableOpacity
                    onPress={comment}
                >
                    <Ionicons name="send" size={30} color="#f1538e" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
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
        alignItems: 'flex-end',
        justifyContent: "center",
        marginRight: 20

    },
    post: {
        padding: 20,
        fontSize: 17
    },
    imagePost: {
        height: 400,
        resizeMode: "contain",
    },
    total: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
        marginTop: 5,
        marginBottom: 10
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
    },
    write: {
        fontSize: 18,
        height: 45,
        borderRadius: 20,
        backgroundColor: '#CFCFCF',
        marginLeft: 10,
        flexDirection: 'row',
        alignItems: 'center',
        width: "75%",
        marginRight: 10
    },
    textinput: {
        fontSize: 18,
        height: 45,
        width: "80%",
        borderRadius: 20,
        marginLeft: 10,
    },
    addcomment: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    }

});