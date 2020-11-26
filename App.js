import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import Main from './assets/Main';

const getFonts = () => {
  return Font.loadAsync({
    'CarterOne-Regular': require('./assets/fonts/CarterOne-Regular.ttf')
  })
}
export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);
  if (fontsLoaded) {
    return (
      <Main />
    );
  }
  else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}