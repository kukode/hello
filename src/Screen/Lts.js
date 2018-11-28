import React,{Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Title,Button,List, ListItem} from 'native-base'
import {Icon} from 'react-native-elements'
import Modal from 'react-native-modalbox'


export default class Lts extends Component {
    constructor(){
        super()
        this.state = {
            isOpen : false,
            isDisabled : false,
            swipeToClose : true,
            sliderValue : 0.3
        }
    }
    onClose() {
        console.log('Modal just closed');
      }
    
      onOpen() {
        console.log('Modal just opened');
      }
    
      onClosingState(state) {
        console.log('the open/close of the swipeToClose just changed');
      }
    

    render(){

        return(
            <Container>
            <Header>
                
                    <Body>
                        <Title>List Team Teknis Lapangan Outbound</Title>
                    </Body>
                
            </Header>
            
             
            <Content>
                <Card transparent>
                    <CardItem cardBody style={styles.itemStyle}> 
                        <Icon name="person" color='#00aced'/>
                        <Text style={styles.textStyle}>Ugan</Text>
                        
                    </CardItem>
                    <CardItem cardBody style={styles.itemStyle}> 
                        <Button success onPress={()=>this.refs.modal1.open()} style={styles.btn}>
                            <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                        </Button>
                    </CardItem>
                </Card>

                <Card transparent>
                    <CardItem cardBody style={styles.itemStyle}> 
                        <Icon name="person" color='#00aced'/>
                        <Text style={styles.textStyle}>Ade Sudarna Wiharja (Burger) </Text>
                        
                    </CardItem>
                    <CardItem cardBody style={styles.itemStyle}> 
                        <Button success onPress={()=>this.refs.modal2.open()} style={styles.btn}>
                            <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                        </Button>
                    </CardItem>
                </Card>

                
            </Content>
           


            <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal1"}>
                <List>
                    <ListItem>
                        <Icon name="person" />
                        <Text style={styles.textStyleModal}>Ugan</Text>
                    </ListItem> 
                    <ListItem>
                        <Icon name="phone" />
                        <Text style={styles.textStyleModal}>0852  1720  5719</Text>
                    </ListItem>  
                   
                    <ListItem>
                        <Icon name="place" />
                        <Text style={styles.textStyleModal}>Bogor</Text>
                    </ListItem>  
                </List>    
            </Modal>

            <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal2"}>
                <List>
                    <ListItem>
                        <Icon name="person" />
                        <Text style={styles.textStyleModal}>JAde Sudarna Wiharja (Burger) </Text>
                    </ListItem> 
                    <ListItem>
                        <Icon name="phone" />
                        <Text style={styles.textStyleModal}>0812  2300  9072</Text>
                    </ListItem>  
                   
                    <ListItem>
                        <Icon name="place" />
                        <Text style={styles.textStyleModal}>Bandung</Text>
                    </ListItem>  
                </List>    
            </Modal>

           

    </Container>
        )
    }
}

const styles = StyleSheet.create({
    textStyleModal : {
        paddingLeft : 5,
        color:'#fff',
        fontFamily: 'TeachersStudent-Regular',
        fontSize:28
    },
    textStyle : {
        fontFamily: 'TeachersStudent-Regular',
        fontSize:30,
        color:'#fff',
        
    },
    itemStyle : {
        backgroundColor: '#009688',
        alignContent:'center',
        justifyContent:'center',
        height: 50
    },


  
    
      modal: {
        justifyContent: 'center',
        alignItems: 'center'
      },
    
      modal2: {
        height: 230,
        backgroundColor: "#009688"
      },
    
      modal3: {
        height: 300,
        width: 300
      },
    
      modal4: {
        height: 300
      },
    
      btn: {
        
        backgroundColor: "#8BC34A",
        color: "white",
        
      },
    
      btnModal: {
        position: "absolute",
        top: 0,
        right: 0,
        width: 50,
        height: 50,
        backgroundColor: "transparent"
      },

    
  
})