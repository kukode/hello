
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
    image : require('../assets/2.jpeg'),
    imageStyle : styles.image,
    backgroundColor : '#febe29'
  },
  {
    key : 'slidethree',
    title : 'Title 3',
    text : 'Description title three',
    image : require('../assets/3.jpeg'),
    imageStyle : styles.image,
    backgroundColor : '#22bcb5'
  },
]

export default class App extends Component {

    static navigationOptions = {
        header : null
    }

  _navigateScreen = () => {
    this.props.navigation.navigate('Home')
  }

  state = {
    showRealApp: false
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
  }

  render() {
   
    // return(
      
        
    //     <AppIntroSlider 
    //     slides={slides} 
    //     onDone={this._navigateScreen}
    //     doneLabel="Finish"
    //     showPrevButton="true"
        
    //     />
      
        
      
    // )  
    
    
      if (this.state.showRealApp) {
        return <Intro />;
      } else {
        return <AppIntroSlider slides={slides} onDone={this._onDone}/>;
      }
     
       
      
    
  }
}

