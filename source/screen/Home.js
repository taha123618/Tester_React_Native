import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import DropdownComponent from './Dropdown';

export default function Home({navigation}) {
  // for status Bar
  useEffect(() => {
    const unsubscribe = navigation?.addListener?.('focus', () => {
      Platform.OS === 'android' && StatusBar.setTranslucent(true);
      StatusBar.setBarStyle('light-content');
      //   StatusBar.setBackgroundColor('black')
    });
    return unsubscribe;
  }, [navigation]);
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: 'orange',
      }}>
      <View>
        <Text style={{textAlign: 'center', marginTop: 20, color: 'black'}}>
          Home Screen{' '}
        </Text>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate('register')}>
          <Text
            style={{
              textAlign: 'center',
              textDecorationLine: 'underline',
              marginTop: 20,
            }}>
            Home
          </Text>
        </TouchableOpacity>
        <DropdownComponent />
      </View>
    </ScrollView>
  );
}
