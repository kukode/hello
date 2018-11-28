import React,{Component} from 'react';
import {Text,StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Body, Title,Button,List, ListItem} from 'native-base'
import {Icon} from 'react-native-elements'
import Modal from 'react-native-modalbox'

export default class Provider extends Component {
  
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
        var BContent = <Button onPress={() => this.setState({isOpen: false})} style={[styles.btn, styles.btnModal]}>X</Button>;
        return(
            <Container>
                <Header>
                    
                        <Body>
                            <Title>List Provider Outbound</Title>
                        </Body>
                    
                </Header>
                
                 
                <Content>
                    <Card transparent>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Icon name="person" color='#00aced'/>
                            <Text style={styles.textStyle}>Agoes susilo JP</Text>
                            
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
                            <Text style={styles.textStyle}>Adventure Plus Indonesia </Text>
                            
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
                            <Text style={styles.textStyle}>Ziga Indonesia Kreatif</Text>
                            
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
                            <Text style={styles.textStyle}>G-Force</Text>
                            
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
                            <Text style={styles.textStyle}>Surya Mentari Enterprise</Text>
                            
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
                            <Text style={styles.textStyle}>Serang Adventure </Text>
                            
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
                            <Text style={styles.textStyle}>Treeutama outbound </Text>
                            
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
                            <Text style={styles.textStyle}>Kalibaru adventure </Text>
                            
                        </CardItem>
                        <CardItem cardBody style={styles.itemStyle}> 
                            <Button success onPress={()=>this.refs.modal8.open()} style={styles.btn}>
                                <Text style={{color:'#fff',marginLeft:20,marginRight:20}}>Detail</Text>
                            </Button>
                        </CardItem>
                    </Card>

                    
                    
                    
                </Content>
               


                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal1"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Agoes susilo JP</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0896  7730 3195</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="beenhere" />
                            <Text style={styles.textStyleModal}>Keep in spirit institute</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Cibinong – Bogor</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal2"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Adventure Plus Indonesia </Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0813  8274  2900</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="beenhere" />
                            <Text style={styles.textStyleModal}>Adventure Plus Indonesia (aplusindo)
                            </Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Bogor</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal3"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Ziga Indonesia Kreatif</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0813  1801  2916</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="beenhere" />
                            <Text style={styles.textStyleModal}>Ziga Indonesia Kreatif (Ziga adventure)</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Bogor</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal4"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>G-Force</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0813  1795  9718</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="beenhere" />
                            <Text style={styles.textStyleModal}>G-Force</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Bogor</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal5"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Surya Mentari Enterprise</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0812  2636  558</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="beenhere" />
                            <Text style={styles.textStyleModal}>Surya Mentari Enterprise (SME)</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Solo</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal6"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Serang Adventure </Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0822  4299  7644</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="beenhere" />
                            <Text style={styles.textStyleModal}>Serang Adventure</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Purbalingga</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal7"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Treeutama outbound </Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0813  1771 4397</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="beenhere" />
                            <Text style={styles.textStyleModal}>Treeutama outbound</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Bogor</Text>
                        </ListItem>  
                    </List>    
                </Modal>

                <Modal style={[styles.modal, styles.modal2]}  position={"center"} ref={"modal8"}>
                    <List>
                        <ListItem>
                            <Icon name="person" />
                            <Text style={styles.textStyleModal}>Kalibaru adventure</Text>
                        </ListItem> 
                        <ListItem>
                            <Icon name="phone" />
                            <Text style={styles.textStyleModal}>0812  9108  8257</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="beenhere" />
                            <Text style={styles.textStyleModal}>Kalibaru adventure</Text>
                        </ListItem>  
                        <ListItem>
                            <Icon name="place" />
                            <Text style={styles.textStyleModal}>Bogor</Text>
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
        backgroundColor: '#232e31',
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
        backgroundColor: "#3B5998"
      },
    
      modal3: {
        height: 300,
        width: 300
      },
    
      modal4: {
        height: 300
      },
    
      btn: {
        
        backgroundColor: "#3B5998",
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