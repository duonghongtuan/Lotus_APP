import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/native'

import {
    StyleSheet,
    View,
    Text, ScrollView,
    Image, TouchableOpacity
} from 'react-native';

import Icon from 'react-native-vector-icons/AntDesign';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import IconFont5 from 'react-native-vector-icons/FontAwesome5';
export default function ListMenu() {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <View>
                <Text style={styles.subTitle}>ĐƯỢC ĐỀ XUẤT</Text>
                <View style={styles.icon}>
                    <FontIcon name="group" style={styles.iconGroup} />
                    <Text style={styles.iconText}> Group</Text>
                    <Text style={styles.textBadge}>3</Text>
                </View>
                <View style={styles.icon}>
                    <FontIcon name="video-camera" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Video</Text>
                </View>
            </View>

            <View>
                <Text style={styles.subTitle}>YÊU THÍCH</Text>
                <View style={styles.icon}>
                    <Icon name="message1" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Messenger</Text>
                    <Text style={styles.textBadge}>3</Text>
                </View>
                <View style={styles.icon}>
                    <FontIcon name="wechat" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Wechat</Text>
                </View>
                <View style={styles.icon}>
                    <FontIcon name="instagram" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Instagram</Text>
                </View>
            </View>
            <View>
                <Text style={styles.subTitle}>TRANG</Text>
                <View style={styles.icon}>
                    <Icon name="flag" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Tạo trang mới</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="plussquare" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Tạo quảng cáo</Text>
                </View>
            </View>

            <View>
                <Text style={styles.subTitle}>BẠN BÈ</Text>
                <View style={styles.icon}>
                    <Icon name="hearto" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Bạn thân</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="smileo" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Người quen</Text>
                </View>
                <View style={styles.icon}>
                    <IconFont5 name="user-friends" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Xem tất cả bạn bè</Text>
                </View>
            </View>

            <View>
                <Text style={styles.subTitle}>TRỢ GIÚP & CÀI ĐẶT</Text>
                <View style={styles.icon}>
                    <FontIcon name="language" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Ngôn ngữ</Text>
                </View>
                <View style={styles.icon}>
                    <EntypoIcon name="help" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Trung tâm trợ giúp</Text>
                </View>
                <View style={styles.icon}>
                    <Icon name="setting" style={styles.iconGroup} />
                    <Text style={styles.iconText}> Cài đặt</Text>
                </View>
                <View style={styles.icon}>
                    <FontIcon name="certificate" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Điều khoản & chính sách</Text>
                </View>
                <TouchableOpacity style={styles.icon}
                    onPress={() => navigation.navigate('Login')}
                >
                    <Icon name="logout" style={styles.iconGroup} />
                    <Text style={styles.iconText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.subTitle}></Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    subTitle: {
        fontSize: 12,
        padding: 10,
        borderWidth: 1,
        borderColor: "#dcdcdc",
    },

    icon: {
        padding: 10,
        paddingLeft: 30,
        backgroundColor: 'white',
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: "#dcdcdc"

    },

    iconGroup: {
        color: '#f1538e',
        fontSize: 24,
        paddingRight: 10,
    },

    iconText: {
        fontSize: 18,
    },

    textBadge: {
        backgroundColor: '#f1538e',
        margin: 5,
        width: 20,
        color: 'white',
        borderRadius: 5,
        textAlign: 'center',
    }
})