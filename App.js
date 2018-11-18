
import React, {Component} from 'react';
import { StyleSheet,View} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
  


const styles = StyleSheet.create({
  image : {
    width : 320,
    height: 320
  }
});


const slides = [
  
  {
    key : 'slidetwo',
    title : 'Title 2',
    text : 'Description title two',
    image : require('./src/assets/2.jpg'),
    imageStyle : styles.image,
    backgroundColor : '#febe29'
  },
  {
    key : 'slidethree',
    title : 'Title 3',
    text : 'Description title three',
    image : require('./src/assets/3.jpg'),
    imageStyle : styles.image,
    backgroundColor : '#22bcb5'
  },
]

export default class App extends Component {

  _navigateScreen = () => {
    this.props.navigation.navigate('Home')
  }

  

  render() {
   
    return(
      
        
        <AppIntroSlider 
        slides={slides} 
        onDone={this._navigateScreen}
        doneLabel="Finish"
        showPrevButton="true"
        
        />
      
        
      
    )   
       
      
    
  }
}

