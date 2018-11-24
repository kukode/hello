
import React, {Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList,Image,Button} from 'react-native';
import {Content, Card,CardItem} from 'native-base'



export default class Home extends Component {
   
   items = [
    {id:1, name: 'Quotes',image:require('../assets/img/quote.png') }, { id:2,name: 'Attitude',image:require('../assets/img/attitude.png') },
    {id:3, name: 'Provider',image:require('../assets/img/provider.png') }, { id:4,name: 'Fasilitator',image:require('../assets/img/fasilitator.png') },
    
  ];
 
  xyz = ({item}) => {
   if(item.id ===1){

     return(
      <Content>
        <Card>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Quotes')}>
          <CardItem cardBody>
                <Image source={item.image} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
        </TouchableOpacity>
        </Card>
      </Content>
     )
   }
   else if(item.id === 2){
    return(
      <Content>
        <Card>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Attitudes')}>
          <CardItem cardBody>
                <Image source={item.image} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
        </TouchableOpacity>
        </Card>
      </Content>
      
    )
   }
   else if(item.id === 3){
    return(
      <Content>
        <Card>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Attitudes')}>
          <CardItem cardBody>
                <Image source={item.image} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
        </TouchableOpacity>
        </Card>
      </Content>
      

      
    )
   }
   else if(item.id === 4){
    return(

      <Content>
        <Card>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Fasilitators')}>
          <CardItem cardBody>
                <Image source={item.image} style={{height: 200, width: null, flex: 1}}/>
          </CardItem>
        </TouchableOpacity>
        </Card>
      </Content>
      
     
    )
   }

  }
  render() {
    
   
    return (
      <View style={styles.MainContainer}>
          <FlatList
          
          data={this.items} 
          
          renderItem={this.xyz}
          keyExtractor={id=>'id'}
          numColumns={1}
          />
          <Button color="#2CCCE4" title='Contact Us' onPress={()=>this.props.navigation.navigate('Contacts')}/>
        </View>
        
    
    );
  }
}   

const styles = StyleSheet.create({
 
  MainContainer :{
   
  justifyContent: 'center',
  flex:1,
  backgroundColor:'#004b87'
  
   
  },
   
  GridViewBlockStyle: {
   
    
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 10,
    
   
  },

  GridViewBlockContact: {
   
    
    flex:1,
    alignItems: 'center',
    height: 100,
    margin: 5,
    width:'100%'
   
  },
  GridViewInsideTextItemStyle: {
   
     color: '#444',
     padding: 10,
     fontSize: 18,
     justifyContent: 'center',
     alignItems: "center"
     
   },
   image : {
     
     height : 100
   },
  
   
  });