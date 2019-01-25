import React,{Component} from 'react';
import {View,Button,ToastAndroid,Text,StyleSheet} from 'react-native';



var Sound  = require('react-native-sound')
export default class Contact extends Component {
   
    hello = () => {
        sound = new Sound('hello.mpeg',Sound.MAIN_BUNDLE,(error)=>{
          if(error){
            ToastAndroid.show('error init player',ToastAndroid.SHORT)
          }
        })
      }
      hai = () => {
        sound2 = new Sound('hai.mpeg',Sound.MAIN_BUNDLE,(error)=>{
          if(error){
            ToastAndroid.show('error init player',ToastAndroid.SHORT)
          }
        })
      }
      
      hellohai = () => {
        sound3 = new Sound('hellohai.mpeg',Sound.MAIN_BUNDLE,(error)=>{
          if(error){
            ToastAndroid.show('error init player',ToastAndroid.SHORT)
          }
        })
      }
      
      
      componentWillMount(){
        this.hello()
        this.hai()
        this.hellohai()
      }
      
      onPressPlayHello() {
        if(sound!=null){
          sound.play((success)=>{
            if(!success){
              ToastAndroid.show('error playing',ToastAndroid.SHORT)
            }
          });
        } 
      }
      
      onPressPlayHai() {
        if(sound2!=null){
          sound2.play((success)=>{
            if(!success){
              ToastAndroid.show('error playing',ToastAndroid.SHORT)
            }
          });
        } 
      }
      
      onPressPlayHelloHai() {
        if(sound3!=null){
          sound3.play((success)=>{
            if(!success){
              ToastAndroid.show('error playing',ToastAndroid.SHORT)
            }
          });
        } 
      }
    render(){
      
        return(
           <View style={{backgroundColor:'#cddc39',flex:1}}>
               <Text style={styles.textStyle}>Apabila Anda merasa berani tekan nomor 1</Text>
               <Button style={styles.btnStyle}
                title='1'
                onPress={()=>this.onPressPlayHello()}
                />
                <Text style={styles.textStyle}>Apabila Anda merasa lebih berani tekan nomor 2</Text>
                <Button style={styles.btnStyle}
                title='2'
                onPress={()=>this.onPressPlayHai()}
                />
                <Text style={styles.textStyle}>Apabila Anda merasa paling berani tekan nomor 3</Text>
                <Button style={styles.btnStyle}
                title='3'
                onPress={()=>this.onPressPlayHelloHai()}
                />
           </View>
        )
    }
}

const styles = StyleSheet.create({
   
    textStyle : {
        fontSize: 24,
        textAlign:'center',
        marginBottom:30,
        marginTop:20
    },
    btnStyle : {
        height:100
    }
})