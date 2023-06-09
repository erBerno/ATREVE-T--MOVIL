import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenList from './ScreenList';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

const Stack = createStackNavigator();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      'SortsMillGoudy-Regular': require('./assets/fonts/SortsMillGoudy-Regular.ttf'),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        // Aquí cargamos las fuentes
        loadFonts();
      } catch (error) {
        console.error(error);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  useEffect(() => {
    if (appIsReady && fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady, fontsLoaded]);

  if (!appIsReady || !fontsLoaded) {
    return null; // o alguna pantalla de carga personalizada
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

function Navigation() {  
  return (
    <Stack.Navigator>
      {ScreenList.map((screen, index) => (
        <Stack.Screen key={index} name={screen.name} component={screen.component} options={{headerShown: false}} /> 
      ))}      
    </Stack.Navigator>
  );
}
