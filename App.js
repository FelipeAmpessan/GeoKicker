import React from 'react';
import {StackNavigator} from 'react-navigation';
import {MainRoutes} from './app/config/navigation';
import { Font, Asset } from 'expo';
import firebase from 'firebase';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';


const GeoKick = StackNavigator({
    ...MainRoutes
}, {
    transitionConfig: () => {
        return {screenInterpolator: CardStackStyleInterpolator.forFade}
    },
});


export default class App extends React.Component{
    state = {
        fontLoaded: false,
        realm: null,
        loggedIn: false,
    };


    componentWillMount(){
        // firebase.initializeApp({
        //     apiKey: 'AIzaSyDYWSV9A5tCPbSMjVHwuLRFrPuOS6dWZvk',
        //     authDomain: 'neural-mantra-92417.firebaseapp.com',
        //     databaseURL: 'https://neural-mantra-92417.firebaseio.com',
        //     projectId: 'neural-mantra-92417',
        //     storageBucket: 'neural-mantra-92417.appspot.com',
        //     messagingSenderId: '271175075009'
        // });
        //
        // firebase.auth().onAuthStateChanged((user) =>{
        //     if (user){
        //         this.setState({loggedIn:true});
        //     }else {
        //         this.setState({loggedIn:false});
        //     }
        // });
        // console.log(this.state.loggedIn);
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Modernica-Light': require('./app/assets/fonts/modernica-light.ttf'),
            'Modernica-Bold': require('./app/assets/fonts/modernica-bold.ttf'),
            'Modernica-LightOblique': require('./app/assets/fonts/modernica-lightOblique.ttf'),
            'fontawesome': require('./app/assets/fonts/fontawesome.ttf'),

        });
        Expo.ScreenOrientation.allow(Expo.ScreenOrientation.Orientation.PORTRAIT);

        this.setState({ fontLoaded: true });
    }


    render(){
        return(
            this.state.fontLoaded ?
                <GeoKick/> : null
        );
    }
}
