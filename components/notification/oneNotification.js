import React, { Component } from 'react';
import {
    List,
    ListItem,
    Left,
    Body,
    Right,
    Thumbnail,
    Text
} from 'native-base';
import avatar from '../images/logo.png';
export default class OneNotification extends Component {
    render() {
        return (
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={avatar} />
                    </Left>
                    <Body>
                        <Text>Lotus vừa bình luận vào bài viết của bạn</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>3:43 pm</Text>
                    </Right>
                </ListItem>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={avatar} />
                    </Left>
                    <Body>
                        <Text>Lotus vừa bình luận vào bài viết của bạn</Text>
                        <Text note>Doing what you like will always keep you happy . .</Text>
                    </Body>
                    <Right>
                        <Text note>6:00 pm</Text>
                    </Right>
                </ListItem>
            </List>
        );
    }
}