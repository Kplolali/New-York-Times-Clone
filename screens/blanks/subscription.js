import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Subscription({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <View style={{padding:30}}>
                    <Text style={{fontWeight:'bold', fontSize:20, textAlign:'center',fontFamily: 'Georgia'}}>Support our journalists</Text>
                    <Text style={{textAlign:'center',fontFamily: 'Georgia', paddingTop:10}}>{"Over half of our business is powered by\n subscriptions. They help us break the stories\n that change the world."}
                    </Text>
                </View>
            </View>
            
            <View>
                <TouchableOpacity  style={styles.btnfree} onPress={()=>{
                    navigation.navigate('today')}}>
                    <Text  style={styles.freeAccount}>See subscription options</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnAccount}onPress={()=>{
                    navigation.navigate('today')}}>
                    <Text style={{fontFamily: 'Georgia', paddingTop:10}}>Continue without subscribing</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnfree: {
        marginTop:10,
        backgroundColor:"black",
    },
    btnAccount:{
        marginTop:10,
        paddingBottom:30,
    },
    freeAccount:{
        color:"white",
        paddingVertical:15,
        textAlign:'center',
        paddingHorizontal:15,
        fontFamily: 'Georgia'
    },
  });