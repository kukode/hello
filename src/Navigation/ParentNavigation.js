import React,{Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Intro from '../Screen/Intro';
import HomeScreen from '../Screen/Home';
import QuotesScreen from '../Screen/Quotes';
import AttitudesScreen from '../Screen/Attitude';
import ProvidersScreen from '../Screen/Provider';
import FasilitatorsScreen from '../Screen/Fasilitator';
import LtsScreen from '../Screen/Lts';
import ContactsScreen from '../Screen/Contact';
import TutorialScreen from '../Screen/TutorialScreen';
import FasilScreen from '../Screen/person/Fasilitator';
import VoiceScreen from '../Screen/Voice';


import ProvinceScreen from '../Screen/provinsi/Province';
import JabarScreen from '../Screen/provinsi/list/Jabar';
import JatengScreen from '../Screen/provinsi/list/Jateng';
import BaliScreen from '../Screen/provinsi/list/Bali';
import NtbScreen from '../Screen/provinsi/list/Ntb';
import JakartaScreen from '../Screen/provinsi/list/Jakarta';
import LampungScreen from '../Screen/provinsi/list/Lampung';
import YogyakartaScreen from '../Screen/provinsi/list/Yogyakarta';
import JatimScreen from '../Screen/provinsi/list/Jatim';
import SumutScreen from '../Screen/provinsi/list/Sumut';
import SumselScreen from '../Screen/provinsi/list/Sumsel';


import FasilLampungScreen from '../Screen/person/list/Lampung';
import FasilJabarScreen from '../Screen/person/list/Jabar';
import FasilJatengScreen from '../Screen/person/list/Jateng';
import FasilYogyakartaScreen from '../Screen/person/list/Yogyakarta';
import FasilJatimScreen from '../Screen/person/list/Jatim';
import FasilBaliScreen from '../Screen/person/list/Bali';
import FasilNtbScreen from '../Screen/person/list/Ntb';
import FasilJakartaScreen from '../Screen/person/list/Jakarta';
import FasilSumutScreen from '../Screen/person/list/Sumut';
import FasilSumselScreen from '../Screen/person/list/Sumsel';



export default logStack = createStackNavigator({
    Voice : {
        
        screen : VoiceScreen
    },
    Intro : {
        
        screen : Intro
    },
    Home : {
        screen : HomeScreen
    },
    Quotes : {
        screen : QuotesScreen
    },
    Attitudes : {
        screen : AttitudesScreen
    },
    Providers : {
        screen : ProvidersScreen
    },
    Fasilitators : {
        screen : FasilitatorsScreen
    },
    Lts : {
        screen : LtsScreen
    },
    Contacts : {
        screen : ContactsScreen
    },
    Tutorial : {
        screen : TutorialScreen
    },
    Fasil : {
        screen : FasilScreen
    },
    Provinces : {
        screen : ProvinceScreen
    },
    Jabar : {
        screen : JabarScreen
    },
    Jateng : {
        screen : JatengScreen
    },
    Bali : {
        screen : BaliScreen
    },
    Ntb : {
        screen : NtbScreen
    },
    Jakarta : {
        screen : JakartaScreen
    },
    Lampung : {
        screen : LampungScreen
    },
    Yogyakarta : {
        screen : YogyakartaScreen
    },
    Jatim : {
        screen : JatimScreen
    },
    Sumut : {
        screen : SumutScreen
    },
    Sumsel : {
        screen : SumselScreen
    },



    FasilLampung : {
        screen : FasilLampungScreen
    },
    FasilJabar : {
        screen : FasilJabarScreen
    },
    FasilJateng : {
        screen : FasilJatengScreen
    },
    FasilYogyakarta : {
        screen : FasilYogyakartaScreen
    },
    FasilJatim : {
        screen : FasilJatimScreen
    },
    FasilBali : {
        screen : FasilBaliScreen
    },
    FasilNtb : {
        screen : FasilNtbScreen
    },
    FasilJakarta : {
        screen : FasilJakartaScreen
    },
    FasilSumut : {
        screen : FasilSumutScreen
    },
    FasilSumsel : {
        screen : FasilSumselScreen
    }




},{
    initialRouteName : 'Intro',
    navigationOptions : {
        header : null
    }
})

