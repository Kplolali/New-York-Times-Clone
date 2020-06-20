import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator} from '@react-navigation/stack'
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

//import blank tabs
import Account from './screens/blanks/account';
import Subscription from './screens/blanks/subscription'

//import screens with bottom tab
import forYou from './screens/tabs/forYou';
import Sections from './screens/tabs/sections';
import today from './screens/tabs/today'

// import components
import TabBarIcon from './components/tabBarIcon'

const bottomTab = createBottomTabNavigator();

const Main = ()=>{
  return(
    <bottomTab.Navigator
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#ccc',
      }}
    >
      <bottomTab.Screen name="Today" component={today}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="md-home"/>
            )
        }}
      />
      <bottomTab.Screen name="For You" component={forYou}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="md-star"/>
            )
        }}
      />
      <bottomTab.Screen name="Sections" component={Sections}
        options={{
          tabBarIcon: ({focused})=> (
            <TabBarIcon focused ={focused} name="ios-grid"/>
            )
        }}
      />
    </bottomTab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  async function loadResourceAsync() {
    await Promise.all([
   
      Font.loadAsync({
        // fonts used
        'Georgia': require('./assets/fonts/Georgia-Regular-font.ttf'),
        'Chomsky': require('./assets/fonts/Chomsky.otf'),
      }),
    ]);
  }

  function handleLoadingError(error) {
    // show error
    console.log(error);
  }

  function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourceAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Account" component={Account} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="Subscription" component={Subscription} 
        options={{headerShown: false}}
        />
        <Stack.Screen name="today" component={Main} 
          options={{
            headerShown: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
