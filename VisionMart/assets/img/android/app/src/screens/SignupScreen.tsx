import { Image, StyleSheet, Text, TextInput, Touchable, View } from 'react-native'
import React from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';

function BottomSection(){
    return(
      
        <View style={{
          height: 70, flex: 2, justifyContent: 'center', alignItems: 'flex-end'
        }}>
            
          <Text style={{fontSize:16,fontWeight:'800', color:'#FFF',marginRight:40,
  
          }}>Sign In</Text>
        </View>
        
  
    );
    
  }
  
  function SignUpButton(){
    return(
      <View style={{flexDirection:'row',marginTop:20}}>
        <View style={{ height: 70, flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:25,fontWeight:'800', color:'#FFF',marginLeft:40}}>Sign Up</Text>
        </View>
        <TouchableOpacity>
        <View style={{ height:70, flex:1,
        justifyContent:'center',alignItems:'flex-end'}}>
          <View style={{width:50,height:50,
            backgroundColor:'#EBE700',marginRight:40,
            borderRadius:100,justifyContent:'center',alignItems:'center'
            }}>
              <Icon size={30} name={'arrow-forward'} type='ionicon'></Icon>
  
          </View>
        </View>
        </TouchableOpacity>
        
      </View>
  
    );
    
  }

function SignupSection(){
    return(
      <View style= {{marginTop:50}}>
        <View style={{
          backgroundColor:'white',
          borderRadius: 20, height:70,
          marginHorizontal: 30,
          justifyContent:'center',
          paddingLeft:20,
        }}>
          <TextInput placeholder='Name'
          placeholderTextColor={'#000'}
          style={{
            fontSize: 20
          }}/>
        </View>
        <View style={{
          backgroundColor:'white',
          borderRadius: 20, height:70,
          marginHorizontal: 30,
          justifyContent:'center',
          paddingLeft:20,marginTop:10,
        }}>
          <TextInput placeholder='Your Email'
          placeholderTextColor={'#000'}
          style={{
            fontSize: 20
          }}/>
        </View>
        <View style={{
          backgroundColor:'white',
          borderRadius: 20, height:70,
          marginHorizontal: 30,
          justifyContent:'center',
          paddingLeft:20,marginTop:10,
        }}>
          <TextInput placeholder='Password'
          placeholderTextColor={'#000'}
          style={{
            fontSize: 20
          }}/>
        </View>
        <View style={{
          backgroundColor:'white',
          borderRadius: 20, height:70,
          marginHorizontal: 30,
          justifyContent:'center',
          paddingLeft:20,marginTop:10,
        }}>
          <TextInput placeholder='Conferm Password'
          placeholderTextColor={'#000'}
          style={{
            fontSize: 20
          }}/>
        </View>
        <SignUpButton/>
        <BottomSection/>
      </View>
  
    );
  
  }
  
const SignupScreen = () => {
  return (
<View style={sty.container}>
      <Image style={{
        width: '100%', height: '100%',
        position:'absolute'
      }} 
      source={
        require('../../../../assets/img/Signup.png')
      } resizeMode='cover'/>
       <Text style={{fontSize:60,color:'white',fontWeight:'600',
        marginTop:80, marginLeft:40,
      }}>{'Create Account'}
        
      </Text>
      
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>

<SignupSection/>
      </KeyboardAwareScrollView>

    </View>
  )
}

export default SignupScreen

const sty = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
  
    }
  })