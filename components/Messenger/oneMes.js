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
import moment from 'moment';
import avatarCat3 from '../images/avatar-cat-1.jpg';

export default class OneMes extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <List>
                <ListItem avatar>
                    <Left>
                        <Thumbnail source={avatarCat3} />
                    </Left>

                    <Body>
                        <Text>{this.props.name}</Text>
                        <Text note>{this.props.mess}</Text>
                    </Body>

                    <Right>
                        <Text note>{moment(this.props.time).format('LT')}</Text>
                    </Right>
                </ListItem>
            </List>
        );
    }
}