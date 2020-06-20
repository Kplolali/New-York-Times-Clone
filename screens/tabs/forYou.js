import React from 'react';
import { StyleSheet,  View, Text, ScrollView} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ForYouCard from '../../components/forYouCard'


export default function forYou({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.tabBarView}>
                <Text style={styles.tabBar}>For You</Text>
                <Ionicons name='ios-settings' size={23}/>
            </View>
            <ScrollView>
            <View style={{flexDirection:'row', paddingTop:35}}>
                <Text style={styles.header}>What are you interested in?</Text>
                <Text style={{fontFamily:'Georgia', fontSize:18}}> We'll</Text>
            </View>
            <View  style={{borderBottomWidth:1, paddingBottom:20}}>
                <Text style={{fontFamily:'Georgia', fontSize:18, paddingTop:3}}>update this section regularly with</Text>
                <Text style={{fontFamily:'Georgia', fontSize:18, paddingTop:3}}>stories for you.</Text>
            </View>
            <View  style={{borderBottomWidth:1, paddingBottom:20}}>
                <Text style={styles.column}>
                    COLUMNS AND FEATURES
                </Text>
                <ForYouCard 
                image={require('../../assets/images/food.jpg')}
                text="What To cook"
                image1={require('../../assets/images/sketch.jpg')}
                text1="Modern Love"
                />
                <ForYouCard 
                image={require('../../assets/images/places.jpg')}
                text={"The 52 Places\n Traveler"}
                image1={require('../../assets/images/books.jpg')}
                text1="Books To Read"
                />
            </View>
            <View  style={{borderBottomWidth:1, paddingBottom:20}}>
                <Text style={styles.column}>
                    THE ISSUES
                </Text>
                <ForYouCard 
                image={require('../../assets/images/climate.jpg')}
                text="Climate Change"
                image1={require('../../assets/images/whitehouse.jpg')}
                text1="The Trump White House"
                />
                <ForYouCard 
                image={require('../../assets/images/race.jpg')}
                text={"Race in America"}
                image1={require('../../assets/images/election.jpg')}
                text1="2020 Election"
                />
            </View>
            <View>
                <Text style={styles.column}>
                    AROUND THE WORLD
                </Text>
                <ForYouCard 
                image={require('../../assets/images/food.jpg')}
                text="China"
                image1={require('../../assets/images/sketch.jpg')}
                text1="India"
                />
                <ForYouCard 
                image={require('../../assets/images/whitehouse.jpg')}
                text="U.S.A"
                image1={require('../../assets/images/places.jpg')}
                text1="Only In New York City"
                />
            </View>
            
            
            </ScrollView>
            
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent:'flex-start',
      paddingHorizontal:30,
      paddingVertical:50
    },
    header: {
        fontWeight:"bold",
        fontFamily:'Georgia',
        fontSize:18,
    },
    column:{  
        fontWeight:"500",
        fontFamily:'Georgia',
        fontSize:12, 
        paddingTop:10
    },
    body: {
        flexDirection: 'row',
        paddingHorizontal:15,
        paddingVertical:5,
        flexWrap:'wrap',
        justifyContent:"space-between"
      },
    Text: {
        fontFamily: 'Georgia',
        letterSpacing: -0.3,
        fontSize: 15,
        paddingLeft:5,
      },
      image:{
          width:"40%",
          height: 50,
      },
    follow:{
        paddingLeft:10, 
        fontSize:12, 
        paddingTop:3,
        textAlign:'center'
      },
    tabBar:{
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Georgia',
        paddingHorizontal:"30%"
    },
    tabBarView:{
        flexDirection:'row',
        justifyContent:"space-between",
        padding:15
    }
  });