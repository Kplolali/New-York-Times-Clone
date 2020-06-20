import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function forYouCard({ image, text, image1, text1 }) {
  return (
      <View>
        <View  style={styles.body}>
            <View   style={{borderWidth:1, borderRadius:5, borderColor:"#e3e3e3"}}>
                <View style={{paddingBottom:10}}>
                    <Image style={styles.image} source={image} />
                    <Text style={styles.Text}>{text}</Text>
                    
                    
                </View>
                <View style={{alignItems:'center', paddingBottom:10}}>
                    <TouchableOpacity style={{flexDirection:'row', backgroundColor:"#5b81cd", padding:8, borderRadius:3}}>
                            <Ionicons name='ios-star' color='white' size={12} style={{paddingTop:3}}/>
                            <Text style={styles.follow}>FOLLOW</Text>
                    </TouchableOpacity>
                </View>
              </View>
              <View  style={{borderWidth:1, borderRadius:5, borderColor:"#e3e3e3"}}>
                  <View style={{paddingBottom:10}}>
                      <Image style={styles.image} source={image1} />
                      <Text style={styles.Text}>{text1}</Text>
                  </View>
                  <View style={{alignItems:'center', paddingBottom:10}}>
                      <TouchableOpacity style={{flexDirection:'row', backgroundColor:"#5b81cd", padding:8, borderRadius:3}}>
                              <Ionicons name='ios-star' color='white' size={12} style={{paddingTop:3}}/>
                              <Text style={styles.follow}>FOLLOW</Text>
                      </TouchableOpacity>
                  </View>
              </View>
            
            
        </View>
      </View>
  );  
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    paddingHorizontal:15,
    paddingVertical:5,
    flexWrap:'wrap',
    justifyContent:'space-between'
  },
  Text: {
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    fontSize: 15,
    position:'absolute',
    bottom:10,
    left:10, 
    color:"white"
  },
  image:{
      width:150,
      height: 160,
  },
  follow:{
    paddingLeft:5, 
    fontSize:12, 
    paddingBottom:3,
    textAlign:'center'
  }

});