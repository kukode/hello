import React,{Component} from 'react';
import {View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text,Body,Title, Row } from 'native-base'
import axios from 'axios'
import FAB from 'react-native-fab';
import {Icon} from 'react-native-elements';




export default class Jabar extends Component {
    constructor(){
        super()
        this.state = {
            data : [],
        }
    }
    
    loadData() {
        axios.get('http://hellohai.herokuapp.com/fasilitator/jabar')
        .then(result => {
            const qoute = result.data 
            this.setState({data : qoute})
            alert('Sukses Refresh Data')
        })
    }

    componentDidMount(){
        this.loadData()
    }

    render(){

        return(
            <Container>
                <Header>
                    
                    <Body>
                        <Title>List fasilitator Jawa Barat</Title>
                    </Body>
                
                </Header>
                <Content>
                {this.state.data.map(item=>
                    <Card key={item.id} >
                        <CardItem>
                        <Body>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Icon name="person" />
                                <Text style={{fontFamily: 'TeachersStudent-Regular',fontSize:22}}>
                                {item.name}
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Icon name="place" />    
                                <Text style={{fontFamily: 'TeachersStudent-Regular',fontSize:22}}>
                                    {item.place}
                                </Text>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                                <Icon name="phone" />        
                                <Text style={{fontFamily: 'TeachersStudent-Regular',fontSize:22}}>
                                    {item.phone}
                                </Text>
                            </View>
                        </Body>
                        </CardItem>
                        
                    </Card>
                    )}
                </Content>

                <FAB 
                buttonColor="aqua" 
                iconTextColor="#fff" 
                onClickAction={() => {this.loadData()}} 
                visible={true} 
                iconTextComponent={<Icon name="autorenew"/>} 
                />
        </Container>
        )
    }
}
console.disableYellowBox = true