import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  // StatusBar,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import images from './images';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';

export default ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  // for password eye
  const [showPass, setShowPass] = useState(false);

  // google signin
  useEffect(() => {
    GoogleSignin.configure({});
  }, []);

  // google signIn
  const signIn = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log(userInfo);
    } catch (error) {
      console.log(error.message);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (f.e. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  // fb login
  const fblogin = resCallback => {
    LoginManager.logOut();
    return LoginManager.logInWithPermissions(['email', 'public_profile']).then(
      result => {
        console.log('fb result>>>>>', result);
        if (
          result.declinedPermissions &&
          result.declinedPermissions.includes('email')
        ) {
          resCallback({message: 'Email is required'});
        }
        if (result.isCancelled) {
          console.log('error');
        } else {
          const infoRequest = new GraphRequest(
            '/me?fields=email,name,picture',
            null,
            resCallback,
          );
          new GraphRequestManager().addRequest(infoRequest).start();
        }
      },
      function (error) {
        console.log('Login fail with error:' + error);
      },
    );
  };

  const onFblogin = async () => {
    try {
      await fblogin(_responseInfoCallBack);
    } catch (error) {
      console.log('error', error);
    }
  };

  const _responseInfoCallBack = async (error, result) => {
    if (error) {
      console.log('error top', error);
      return;
    } else {
      const userData = result;
      console.log('fb data ++++', userData);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: 'black',
      }}>
      {/* <StatusBar barStyle="light-content" backgroundColor="black" /> */}
      <View style={{alignItems: 'center'}}>
        <Image source={images.logo} style={{width: 150, height: 150}} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            marginTop: 10,
            color: 'white',
          }}>
          Register Now
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <TextInput
          placeholder="Full Name"
          placeholderTextColor={'white'}
          value={name}
          onChangeText={setName}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            fontSize: 18,
            fontStyle: 'italic',
            color: 'white',
          }}
        />
        <TextInput
          placeholder="Email or Phone Number"
          placeholderTextColor={'white'}
          value={email}
          onChangeText={setEmail}
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            fontSize: 18,
            fontStyle: 'italic',
            color: 'white',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            marginTop: 20,
          }}>
          <TextInput
            secureTextEntry={!showPass}
            placeholder="Password"
            placeholderTextColor={'white'}
            value={password}
            onChangeText={setPassword}
            style={{
              flex: 1,
              fontSize: 18,
              color: 'white',
              fontStyle: 'italic',
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setShowPass(!showPass)}>
            <Entypo
              name={showPass ? 'eye-with-line' : 'eye'}
              size={20}
              color={'white'}
            />
          </TouchableOpacity>
        </View>

        {/* button */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={{
            backgroundColor: 'pink',
            alignSelf: 'center',
            marginTop: 20,
            paddingVertical: 15,
            paddingHorizontal: 25,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: 'white',
            }}>
            Register
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 15,
          }}>
          or Register with
        </Text>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
            onPress={signIn}
            activeOpacity={0.8}
            style={{
              backgroundColor: '#444444',
              width: 70,
              height: 60,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={images.googlesign} style={{width: 40, height: 40}} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onFblogin}
            activeOpacity={0.8}
            style={{
              backgroundColor: '#444444',
              marginLeft: 10,
              width: 70,
              height: 60,
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image source={images.fb} style={{width: 40, height: 40}} />
          </TouchableOpacity>
        </View>
      </View>

      {/* Last View  */}
      <View>
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('login')}
        >
          <Text 
          style={{color: 'white', fontSize: 15, 
          marginTop: 20 , textDecorationLine : 'underline'}}>
          Already hava an Account?</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              marginTop: 5,
              textDecorationLine: 'underline',
            }}>
            Login
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={{marginTop: 10}}>
            <Entypo name={'chevron-right'} size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};
