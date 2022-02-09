import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import images from './images';
import Entypo from 'react-native-vector-icons/Entypo';

export default ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // for password eye
  const [showPass, setShowPass] = useState(false);
// console.log
// navigation.openDrawer();
  return (
    <ScrollView
      contentContainerStyle={{
        flexGrow: 1,
        paddingVertical: 15,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        backgroundColor: 'black',
      }}>
      {/* first view  */}
      <View style={{alignItems: 'center'}}>
        <Image source={images.logo} style={{width: 150, height: 150}} />
        <Text
          style={{
            fontSize: 30,
            fontWeight: '600',
            marginTop: 10,
            color: 'white',
          }}>
          Log in
        </Text>
      </View>
      {/* Second View  */}
      <View style={{flex: 1, justifyContent: 'center'}}>
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
            Login
          </Text>
        </TouchableOpacity>

        <Text
          style={{
            color: 'white',
            alignSelf: 'center',
            marginTop: 10,
            fontSize: 15,
          }}>
          or Login with
        </Text>

        <View
          style={{
            marginTop: 30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <TouchableOpacity
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
      <View style={{marginTop: 60}}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('home')}
        >
          <Text 
          style={{color: 'white', fontSize: 15, 
          marginTop: 20 , textDecorationLine : 'underline'}}>
          Don't have an account yet?</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 15,
              marginTop: 5,
              textDecorationLine: 'underline',
            }}>
            Register
          </Text>
          <TouchableOpacity activeOpacity={0.8} style={{marginTop: 10}}>
            <Entypo name={'chevron-right'} size={20} color={'white'} />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

// By Me

// export default function Login() {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();

//   return (
//     <ScrollView>
//     <View style={{backgroundColor: 'gray'}}>
//       <StatusBar barStyle="light-content" />
//       <View style={{alignItems: 'center' ,  marginTop: 35}}>
//         <Image style={styles.logo} source={images.logo} />
//         <Text style={{color: 'white' , fontWeight : 'bold' , fontSize : 30}}>Log in</Text>
//       </View>

//       <View style={styles.container}>
//         <TextInput style={{color : 'white'}}
//           placeholder="Email or Phone Number"
//           value={email}
//           onChangeText={setEmail}
//         />
//         <TextInput style={{color : 'white'}}
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//         />
//         <Text style={{color:'white' ,
//         textAlign:'right' , marginBottom : 10}}>
//           ForgetPassword?
//         </Text>
//       </View>

//       <View>
//         <Button
//           style={styles.button}
//           // onPress={onPressMe}
//           title="Login"
//         />
//         <Text style={{textAlign : 'center' ,
//         color:'white' , margin : 10}}>
//           Or Login with
//         </Text>
//       </View>

//       <View style={{flex: 1}}>
//         <TouchableOpacity style={styles.gg}>
//           <Image source={images.googlesign} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.fb}>
//           <Image source={images.fb} />
//         </TouchableOpacity>
//       </View>

//       <View>
//         <Text style={{color: 'white'}}>Dont have an account yet?</Text>
//         <Text style={{color: 'white'}}>Register Now</Text>
//       </View>

//     </View>
//     </ScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   logo: {
//     width: 150,
//     height: 150,
//   },
//   container:{
//     flex: 0,
//     justifyContent: 'center',
//     marginHorizontal: 16,
//     marginTop: 20
//   },
//   button: {
//     // color: 'gray',
//     // backgroundColor: '#9C0F48',
//     marginTop: 10

//   },
//   gg: {
//     padding: 15,
//     borderWidth: 4,
//     backgroundColor: 'gray',
//     borderColor: 'gray',
//     width:100
//   },
//   fb: {
//     padding: 15,
//     borderWidth: 4,
//     backgroundColor: 'gray',
//     borderColor: 'gray',
//     width:100
//   },
// });
