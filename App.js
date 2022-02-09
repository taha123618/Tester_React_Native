import React, {useEffect} from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import NavBar from './source/screen/NavBar';

const App = () => {
  
  // for splash screen
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  
  return (
    <View style={{flex : 1}}>
     <NavBar />
    </View>
  );
};

export default App;
