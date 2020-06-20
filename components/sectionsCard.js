import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function sectionsCard({ icon, text }) {
  return (
      <View>
        <View  style={styles.body}>
          <Ionicons name={icon} size={20} />
          <Text style={styles.Text}>{text}</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    paddingHorizontal:15,
    paddingVertical:5
  },
  Text: {
    fontFamily: 'Georgia',
    letterSpacing: -0.3,
    fontSize: 15,
    paddingLeft:30
  },

});