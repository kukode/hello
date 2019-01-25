
import React, {Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList,Button} from 'react-native';
import {Content, Card,CardItem} from 'native-base'
import {Icon} from 'react-native-elements'


export default class Home extends Component {
   
   items = [
    {id:1, name: 'Quotes' }, { id:2,name: 'Attitude'},
    {id:3, name: 'Provider' }, { id:4,name: 'Fasilitator' },
    { id:5,name: 'LTS' },{ id:6,name: 'hello' },
    
  ];
 
  xyz = ({item}) => {
   if(item.id ===1){

     return(
      <Content>
        <Card transparent>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Quotes')}>
          <CardItem cardBody style={{borderRadius:20, backgroundColor:'#00FD40',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
              <Text style={styles.instructions}>QUOTE</Text>
          </CardItem>
        </TouchableOpacity>
        </Card>
      </Content>
     )
   }
   else if(item.id === 2){
    return(
      <Content>
        <Card transparent>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Attitudes')}>
          <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FD0404',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}>
                <Text style={styles.instructions}>ATTITUDE</Text>
          </CardItem>
        </TouchableOpacity>
        </Card>
      </Content>
      
    )
   }
   else if(item.id === 3){
    return(
      <Content>
        <Card transparent>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Provinces')}>
            <CardItem cardBody style={{borderRadius:20, backgroundColor:'#0457FD',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}>
                  <Text style={styles.instructions}>PROVIDER</Text>
            </CardItem>
        </TouchableOpacity>
        </Card>
      </Content>
      

      
    )
   }
   else if(item.id === 4){
    return(

      <Content>
        <Card transparent>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Fasil')}>
          <CardItem cardBody style={{borderRadius:20, backgroundColor:'#C15100',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}>
                <Text style={styles.instructions}>FASILITATOR</Text>
          </CardItem> 
        </TouchableOpacity>
        </Card>
      </Content>
      
    )
   }
   else if(item.id === 5){
    return(

      <Content>
        <Card transparent>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Lts')}>
          <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FD04DF',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}>
                <Text style={styles.instructions}>LTS</Text>
          </CardItem> 
        </TouchableOpacity>
        </Card>
      </Content>
      
    )
   }
   else if(item.id === 6){
    return(

      <Content>
        <Card transparent>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Voice')}>
          <CardItem cardBody style={{borderRadius:20, backgroundColor:'#0131C2',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}>
                <Text style={styles.instructions}>LEGEND VOICE</Text>
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
          <Card transparent>
          <TouchableOpacity
            style={styles.contact}
            onPress={()=>this.props.navigation.navigate('Contacts')}
            >
            
              <Text style={{textAlign:'center',color:'#fff',fontFamily:'CaviarDreams_Bold'}}>ABOUT US</Text>
          </TouchableOpacity>
          </Card> 
          
        </View>
        
    
    );
  }
}   

const styles = StyleSheet.create({
  instructions: {
    fontFamily: "CaviarDreams_Bold",
    fontSize: 24,
    textAlign: "center",
    color: "#ffff",
    marginBottom: 5
  },

 contact : {
  backgroundColor:'#00242D',
  borderRadius:20,
  height:50,
  alignContent:'center',
  justifyContent:'center',
  
 },
  MainContainer :{
   
  justifyContent: 'center',
  flex:1
  
   
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

 
   
  });