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
import FasilScreen from '../Screen/person/Fasilitator'


import ProvinceScreen from '../Screen/provinsi/Province';
import JabarScreen from '../Screen/provinsi/list/Jabar';
import JatengScreen from '../Screen/provinsi/list/Jateng';
import BaliScreen from '../Screen/provinsi/list/Bali';
import NtbScreen from '../Screen/provinsi/list/Ntb';
import JakartaScreen from '../Screen/provinsi/list/Jakarta';
import LampungScreen from '../Screen/provinsi/list/Lampung';
import YogyakartaScreen from '../Screen/provinsi/list/Yogyakarta';
import JatimScreen from '../Screen/provinsi/list/Jatim';

export default logStack = createStackNavigator({

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
    }


},{
    initialRouteName : 'Intro',
    navigationOptions : {
        header : null
    }
})

