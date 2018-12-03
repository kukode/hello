import React,{Component} from 'react';
import {Container,Content, Button,Text,Card,CardItem} from 'native-base';
import {Linking,StyleSheet} from 'react-native';



export default class Contact extends Component {


    render(){
      const uri = 'https://stackoverflow.com/questions/35531679/react-native-open-links-in-browser'
        return(
            <Container>
                <Content>
                <Card>
                    <CardItem style={styles.backCard}>  
                        <Text style={styles.textStyle}>Name : Agus Susilo JP </Text>
                    </CardItem>
                    <CardItem style={styles.backCard}>  
                        <Text style={styles.textStyle}>Email : keepinspirit25@gmail.com</Text>
                    </CardItem>
                    <CardItem style={styles.backCard}>
                        <Text style={styles.textStyle}>Phone : 0896-7730-3195</Text>
                    </CardItem>
                    <CardItem style={styles.backCard}>
                        <Text style={styles.textStyle}>WhatsApp : 0896-7730-3195</Text>
                    </CardItem>
                    <CardItem style={styles.backCard}>
                        <Text style={styles.textStyle}>Website : http://outbounditu.com/</Text>
                    </CardItem>
                </Card>

                {/* <Button block primary
                onPress={()=>this.props.navigation.navigate('Tutorial')}
                style={{marginBottom:10}}>
                
                <Text> Tutorial Aplikasi </Text>
                </Button> */}
                <Button block danger
                onPress={()=>Linking.openURL('https://play.google.com/store/apps/details?id=com.hello.dev.bogor')}
                >
                <Text> Check Update Hello </Text>
                </Button>
                
                </Content>
            </Container>
        )
    }
}

const styles = StyleSheet.create({
    textStyle: {
      fontFamily: "CaviarDreams_Bold",
      fontSize: 18,
      color: "#fff",
      marginBottom: 5,
     
    },
    backCard : {
        backgroundColor : '#00242d'
    }

})