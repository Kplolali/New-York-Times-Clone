import React from 'react';
import { StyleSheet,  View, Text, ScrollView } from 'react-native';


export default function today({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.tabBarView}>
                <Text style={styles.tabBar}>THE  NEW  YORK  TIMES </Text>
            </View>
            <ScrollView></ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    tabBar:{
        fontSize:24,
        fontWeight:'bold',
        fontFamily:'Chomsky',
    },
    tabBarView:{
        justifyContent:"center",
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:35
    },
  });