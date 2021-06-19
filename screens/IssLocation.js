import * as React from 'react';
import {View,Text,SafeAreaView,StyleSheet,ImageBackground,StatusBar, Alert} from 'react-native';
import MapView,{Marker} from 'react-native-maps';
import axios from 'axios';
import IssLocation from './IssInfo';

export default class IssLocation extends React.Component{
    constructor(){
        super();
        this.state={
            location:{},
            isRefresh:false
            
        }
    }
    componentDidMount(){
        this.getIssLocation();
    }

    getIssLocation=()=>{
        axios.get('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response=>{this.setState({location:response.data})})
        .catch(error=>{
            Alert.alert(error.message)
        })
        
    }

    render(){
        if (Object.keys(this.state.location).length === 0) {
            return (
                <View
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center"
                    }}>
                    <Text>Loading</Text>
                </View>
            )
        } else {
        return(
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}/>
                <ImageBackground source={require('../assets/bg_image')} style={styles.backgroundImage}>
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>ISS Location</Text>
                </View>
                <View style={styles.mapContainer}>
                    <MapView style={styles.map} 
                             region={{
                                 latitude:this.state.location.latitude,
                                 longitude:this.state.location.longitude,
                                 latitudeDelta:100,
                                 longitudeDelta:100
                    }}>
                        <Marker coordinate={{
                            latitude:this.state.location.latitude,
                            longitude:this.state.location.longitude
                        }}>
                            <Image source={require('../assets/iss_icon.png')}
                            style={{width:50,height:50}}/>
                        </Marker>

                    </MapView>
                    
                </View>
                <IssInfo/>
                </ImageBackground>
            </View>
        )
      }
    }
}

const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS === "android" ? StatusBar.currentHeight:0
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
    backgroundImage:{
        flex:1,
        resizeMode:'cover' 
    },
    titleContainer:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    mapContainer:{
        flex:0.6,
        
    },
    map:{
        width:'100%',
        height:'100%'
    }
})