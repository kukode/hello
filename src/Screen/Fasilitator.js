import React,{Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Title,Button,List, ListItem} from 'native-base'
import {Icon} from 'react-native-elements'
import Modal from 'react-native-modalbox'

export default class Fasilitator extends Component {

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
                            <Title>List Fasilitator Outbound</Title>
                        </Body>
                    
                </Header>
                
                 
                <Content>
                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}>Agik nugroho</Text>
                            
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
                            <Text style={styles.textStyle}>Joko Dwi HN </Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal2.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}>Waris styo</Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal3.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}>Vonkq arif rizal</Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal4.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}>Rani rismariana</Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal5.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}>Nandar kuswara</Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal6.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}>Agus purnomo ( Abel )</Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal7.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}>Hermawan Rusdiyana</Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal8.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}> Agus mussodiq</Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal9.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>


                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}> Egon ahmad gosasih</Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal10.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    
            

               
                
                </Content>
               


                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal1"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Agik nugroho</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0857  7891  5811</Text>
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
                            <Text style={styles.textStyleModal}>Joko Dwi HN </Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0821  3379  7716</Text>
                        </ListItem>  
                       
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Purbalingga</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal3"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Waris styo</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0815  4241  9818</Text>
                        </ListItem>  
                        
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Purbalingga</Text>
                        </ListItem>  
                    </List>    
                </Modal>


                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal4"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Vonkq arif rizal</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0856 8554 430</Text>
                        </ListItem>  
                        
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Jakarta</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal5"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Rani rismariana</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0822 1727 1740</Text>
                        </ListItem>  
                        
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Bogor</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                 <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal6"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Nandar kuswara</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0857 7691 2517</Text>
                        </ListItem>  
                        
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Bogor</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal7"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Agus purnomo (Abel)</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0858 8168  4834</Text>
                        </ListItem>  
                        
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Jakarta</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal8"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Hermawan Rusdiyana</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0821  1122  7677</Text>
                        </ListItem>  
                        
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Bogor</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal9"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Agus mussodiq</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0821  8382  0834</Text>
                        </ListItem>  
                        
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Lampung</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal10"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Egon ahmad gosasih</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0818 0853  0873</Text>
                        </ListItem>  
                        
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Jakarta</Text>
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
        backgroundColor: '#0060FF',
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
        backgroundColor: "#0060FF"
      },
    
      modal3: {
        height: 300,
        width: 300
      },
    
      modal4: {
        height: 300
      },
    
      btn: {
        
        backgroundColor: "#23C000",
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