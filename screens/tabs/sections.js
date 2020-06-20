import React from 'react';
import { StyleSheet,  View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
//import  screens
import SectionsCard from '../../components/sectionsCard'

export default function Section({navigation}){
    return(
        <View style={styles.container}>
            <View style={styles.SectionView}>
                <Text style={styles.Section}>Sections</Text>
                <Ionicons name='ios-search' size={23}/>
            </View>
            
            <ScrollView  style={{paddingTop:5}}>
            <TouchableOpacity>
                    <SectionsCard 
                        icon= 'md-stats'
                        text = "Most Popular"
                    />
                </TouchableOpacity>
            <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-megaphone'
                        text = "Opinion"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-globe'
                        text = "World"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'md-trending-up'
                        text = "Business"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'md-tennisball'
                        text = "Sports"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-color-palette'
                        text = "Arts"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-image'
                        text = "Pictures"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-book'
                        text = "Magazine"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'md-journal'
                        text = "Books"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-videocam'
                        text = "Video"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-list-box'
                        text = "Reader Center"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-open'
                        text = "Times Insider"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-glasses'
                        text = "Style"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'md-restaurant'
                        text = "Cooking"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-options'
                        text = "Technology"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-pulse'
                        text = "Health"
                    />
                </TouchableOpacity>
               
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-partly-sunny'
                        text = "Climate and the Environment"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-airplane'
                        text = "Travel"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'md-business'
                        text = "Real Estates"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-qr-scanner'
                        text = "Lens"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-rose'
                        text = "Obituaries"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-restaurant'
                        text = "Food"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-bulb'
                        text = "The Lerning Network"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'md-calendar'
                        text = "Sunday Review"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-car'
                        text = "AutoMobile"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-bookmark'
                        text = "Saved for Later"
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <SectionsCard 
                        icon= 'ios-clock'
                        text = "Recently Viewed"
                    />
                </TouchableOpacity>
            </ScrollView>
        </View>
        
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingVertical:35,
      paddingHorizontal:10
    },
    Section:{
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Georgia',
        paddingHorizontal:"30%"
    },
    SectionView:{
        flexDirection:'row',
        justifyContent:"space-between",
        padding:15
    }
  });