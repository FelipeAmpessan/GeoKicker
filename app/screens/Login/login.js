import React from 'react';
import {StyleSheet,View, Text, TouchableOpacity, Image, Dimensions, TextInput, ScrollView} from 'react-native';

export class Login extends React.Component {

    static navigationOptions = ({ navigation, screenProps }) => ({
        header: null
    });

    constructor(props)
    {
        super(props);
    }

    render()
    {
        return(
            <View style={{backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Image source={require('../../assets/images/bg01.jpg')} style={{position:'absolute', resizeMode:'stretch'}}/>

                <Text style={styles.inputLabel}>
                    Email
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputField} autoCaptalize={false}/>
                </View>

                <Text style={styles.inputLabel}>
                    Password
                </Text>

                <View style={styles.inputContainer}>
                    <TextInput style={styles.inputField} secureTextEntry autoCaptalize={false}/>
                </View>

                <TouchableOpacity style={styles.okButton} onPress={()=>this.props.navigation.navigate('Home')}>
                    <Text style={styles.buttonLabel}>
                        L o g i n
                    </Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputLabel:{
        fontFamily: 'Modernica-Light',
        fontSize: 25,
        color: '#686868',
        marginTop: 10,
        backgroundColor: 'transparent'
    },
    inputContainer:{
        width: '80%',
        height: 50,
        backgroundColor: '#fff',
        borderRadius: 30,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    inputField:{
        fontFamily: 'Modernica-Light',
        fontSize: 20,
        color: '#686868',
        width: '100%',
        height: '80%',
    },
    okButton:{
        width: '80%',
        height: 50,
        backgroundColor: '#53ff55',
        borderRadius: 40,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '40%'

    },
    buttonLabel:{
        fontFamily: 'Modernica-Bold',
        fontSize: 28,
        color: '#000',
    },
});
