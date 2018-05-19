import React from 'react';
import {StyleSheet,View, Text, TouchableOpacity, Image, Dimensions, TextInput, ScrollView} from 'react-native';

export class Home extends React.Component {

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
            <View style={{backgroundColor: '#64ffd3', flex: 1, alignItems: 'center', justifyContent: 'center'}}>

                <TouchableOpacity style={styles.okButton} onPress={()=>this.props.navigation.navigate('StreetView')}>
                    <Text style={styles.buttonLabel}>
                        P L A Y
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.okButton} onPress={()=>this.props.navigation.navigate('Ranking')}>
                    <Text style={styles.buttonLabel}>
                        R A N K I N G
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    okButton:{
        width: '80%',
        height: 50,
        backgroundColor: '#48464b',
        borderRadius: 40,
        marginVertical: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonLabel:{
        fontFamily: 'Modernica-Bold',
        fontSize: 20,
        color: '#FFF',
    },
});