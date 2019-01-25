
import React, {Component} from 'react';
import { StyleSheet,View,Text} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
  text : {
    color: '#444',
    fontSize:18,
    fontFamily: 'CaviarDreams_Bold'
  },
  title: {
   color:'#444'
  },
  
    mainContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    styleBtn : {
      color:'#444'
    } 
  
})

const slides = [
  
  {
    key: 'somethun',
    title: 'Elenor Roosevelt',
    text: 'Orang yang kehilangan uang, kehilangan banyak, Kehilangan teman, kehilangan lebih banyak, Kehilangan iman, kehilangan semua',
    titleStyle : styles.title,
    textStyle : styles.text,
    backgroundColor: '#00fdff',
    image:require('../assets/img/slide.png')
  },
  {
    key: 'somethun1',
    title: ' Imam Syafi I',
    image:require('../assets/img/slide.png'),
    text: 'Jangan menyampaikan pendapat pada orang yang tidak menginginkannya. Pendapatmu tak akan berguna, dan kau pun tak akan mendapat manfaat',
    titleStyle : styles.title,
    textStyle : styles.text,
    backgroundColor: '#00fdff'
  },
  
]

export default class Intro extends Component {

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
    
    return(
      
      <View style={styles.mainContent}>  
        <AppIntroSlider 
        slides={slides} 
        
        onDone={this._navigateScreen}
        doneLabel="Finish"
        showPrevButton="true"
        buttonTextStyle={styles.styleBtn}
        />
      </View>
        
      
    )  
    
    
      // if (this.state.showRealApp) {
      //   return <Intro />;
      // } else {
      //   return <AppIntroSlider slides={slides} onDone={this._navigateScreen}/>;
      // }
     
       
      
    
  }
}

