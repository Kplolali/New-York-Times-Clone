import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Account({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.leadText}>{"Let's make your account\nIt'll give you access to more in\nour app:"}</Text>
                </View>
                <View>
                    <View>
                        <Text style={{paddingBottom:10,fontFamily: 'Georgia'}}>Unlock more stories each month</Text>
                    </View>
                    <View>
                        <Text style={{paddingBottom:10,fontFamily: 'Georgia'}}>Read saved stories offline</Text>
                    </View>
                    <View>
                        <Text style={{paddingBottom:10,fontFamily: 'Georgia'}}>Engage in lively discussions</Text>
                    </View>
                    <View>
                        <Text style={{paddingBottom:10,fontFamily: 'Georgia'}}>Follow your Favourite topics</Text>
                    </View>
                </View>
            </View>
            
            <View>
                <TouchableOpacity  style={styles.btnfree} onPress={()=>{
                    navigation.navigate('Subscription')}}>
                    <Text style={styles.freeAccount}>Create a free Account</Text>
                </TouchableOpacity>
                <TouchableOpacity  style={styles.btnAccount} onPress={()=>{
                    navigation.navigate('Subscription')}}>
                    <Text style={{fontFamily: 'Georgia', paddingTop:10}}>Continue without an account</Text>
                </TouchableOpacity>
            </View>

            
        </View>
    )
};
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
        paddingBottom:30
    },
    freeAccount:{
        color:"white",
        paddingVertical:15,
        textAlign:'center',
        paddingHorizontal:15,
        fontFamily: 'Georgia'
    },
    leadText:{
        fontSize:20,
        fontWeight:"bold",
        paddingBottom:30,
        fontFamily: 'Georgia'
    }
  });
