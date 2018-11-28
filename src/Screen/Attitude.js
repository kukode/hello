import React,{Component} from 'react';
import {Image} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base'


export default class Attitude extends Component {
    items = 
    {
        image : require('../assets/img/under.png')
    }


    render(){

        return(
            <Container>
            <Content>
                <Card>
                    <CardItem cardBody> 
                        <Image source={this.items.image} style={{height: 300, width: null, flex: 1}}/>
                    </CardItem>
                </Card>
            </Content>
        </Container>
        )
    }
}