
import React, {Component} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,FlatList,Button} from 'react-native';
import {Content, Card,CardItem} from 'native-base'
import {Icon} from 'react-native-elements'


export default class Fasilitator extends Component {
   
   items = [
    {id:1, name: 'Lampung' }, { id:2,name: 'Jawa Barat'},
    {id:3, name: 'Jawa Tengah' }, { id:4,name: 'Yogyakarta' },
    { id:5,name: 'Jawa Timur' },{ id:6,name: 'Bali' },{ id:7,name: 'Nusa Tenggara Barat' },
    { id:8,name: 'Jakarta' },{ id:9,name: 'Sumut' },{ id:10,name: 'Sumsel' }
    
  ];
 
  xyz = ({item}) => {
   if(item.id ===1){

     return(
      <Content>
        <Card transparent>
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilLampung')}>
          <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
              <Text style={styles.instructions}>LAMPUNG</Text>
          </CardItem>
        </TouchableOpacity>
        </Card>
      </Content>
     )
   }

   if(item.id ===2){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilJabar')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>JAWA BARAT</Text>
         </CardItem>
       </TouchableOpacity>
       </Card>
     </Content>
    )
  }

  if(item.id ===3){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilJateng')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>JAWA TENGAH</Text>
         </CardItem>
       </TouchableOpacity>
       </Card>
     </Content>
    )
  }

  if(item.id ===4){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilYogyakarta')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>YOGYAKARTA</Text>
         </CardItem>
       </TouchableOpacity>
       </Card>
     </Content>
    )
  }
  if(item.id ===5){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilJatim')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>JAWA TIMUR</Text>
         </CardItem>
       </TouchableOpacity>
       </Card>
     </Content>
    )
  }

  if(item.id ===6){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilBali')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>BALI</Text>
         </CardItem>
       </TouchableOpacity>
       </Card>
     </Content>
    )
  }

  if(item.id ===7){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilNtb')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>NTB</Text>
         </CardItem>
       </TouchableOpacity>
       </Card>
     </Content>
    )
  }

  if(item.id ===8){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilJakarta')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>Jakarta</Text>
         </CardItem>
       </TouchableOpacity>
       </Card>
     </Content>
    )
  }
  if(item.id === 9){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilSumut')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>Sumatera Utara</Text>
         </CardItem>
       </TouchableOpacity>
       </Card>
     </Content>
    )
  }
  if(item.id === 10){

    return(
     <Content>
       <Card transparent>
       <TouchableOpacity  onPress={()=>this.props.navigation.navigate('FasilSumsel')}>
         <CardItem cardBody style={{borderRadius:20, backgroundColor:'#FF6C02',alignContent:'center',justifyContent:'center', height: 150, width: null, flex: 1}}> 
             <Text style={styles.instructions}>Sumatera Selatan</Text>
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
         
          </Card> 
          
        </View>
        
    
    );
  }
}   

const styles = StyleSheet.create({
  instructions: {
    fontFamily: "CaviarDreams_Bold",
    fontSize: 22,
    textAlign: "center",
    color: "#ffff",
    marginBottom: 5
  },

 contact : {
  backgroundColor:'#00242D',
  borderRadius:20,
  height:50,
  alignContent:'center',
  justifyContent:'center'
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