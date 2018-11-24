import React,{Component} from 'react';
import {Container,Content, Button,Text,Card,CardItem} from 'native-base';
import {Linking} from 'react-native';



export default class Contact extends Component {


    render(){
      const uri = 'https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser'
        return(
            <Container>
                <Content>
                <Card>
                    <CardItem>  
                        <Text>Email : </Text>
                    </CardItem>
                    <CardItem>
                        <Text>Phone : </Text>
                    </CardItem>
                    <CardItem>
                        <Text>WhatsApp : </Text>
                    </CardItem>
                    <CardItem>
                        <Text>Website : </Text>
                    </CardItem>
                </Card>
                <Button block danger
                onPress={()=>Linking.openURL('https://play.google.com/store/apps/details?id=org.qluein.android&hl=in')}
                >
                <Text> Update Apps </Text></Button>
                </Content>
            </Container>
        )
    }
}

