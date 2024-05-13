import { Alert, Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Icon } from '@rneui/base';
import { TouchableOpacity } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../../../assets/firebaseInit';

function BottomSection(p: any){

  const stack = p.bs_stack;

  function gotoSignup(){
    stack.navigate('SignUp')

  }
  function gotoForgetPassword(){
    stack.navigate('Home1')

  }

  // function gotoForgetPassword(){
  //   stack.navigate('ForgetPassword')
  // }
    return(
      <View style={{flexDirection:'row',marginTop:80}}>
        <View style={{ height: 70, flex:1, justifyContent:'center'}}>
          <TouchableOpacity onPress={gotoSignup}>
          <Text style={{fontSize:16,fontWeight:'800', color:'#FFF',marginLeft:40}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View style={{
          height: 70, flex: 1, justifyContent: 'center', alignItems: 'baseline'
        }}>
          <TouchableOpacity onPress={gotoForgetPassword}>
          <Text style={{fontSize:16,fontWeight:'800', color:'#FFF',marginLeft:40,
          }}>Forget Password</Text>
          </TouchableOpacity>
        </View>
        </View>
  
    );
    
  }
  
  
  function SigninButton(p: any){

    const u_email = p.u_email;
    const u_password = p.u_password;


    function getUser(){
      getDocs(query(collection(db,'User'),where('email','==',u_email.toLowerCase()))).then(ds=>{
        if (ds.size ==1) {
          const dt = ds.docs[0].data();
          Alert.alert(dt.password);
          if (dt.password == u_password){
            p.sb_stack.navigate('Home')
          }else {
            Alert.alert('Message', 'Incorrect Email or Password');
          }
        }else{
          Alert.alert('Message', 'Can\'t find user!');

        }
      })
    }



    function gotoHome(){
      getUser();
      if(u_email== u_email && u_password==u_password){
        p.sb_stack.navigate('Home')
      }else{
        Alert.alert('Message','Incorrect Email or Password');
        console.log('Incorrect Email or Password');
      }
      

     }
    return(
      <View style={{flexDirection:'row',marginTop:20}}>
        <View style={{ height: 70, flex:1, justifyContent:'center'}}>
          <Text style={{fontSize:25,fontWeight:'800', color:'#FFF',marginLeft:40}}>Sign In</Text>
        </View>
        <TouchableOpacity onPress={gotoHome}>
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

function LoginField(p: any){

  const stack = p.lf_stack;

  const [userEmail,setUserEmail] = useState('');
  const [userPassword,setUserpassword] = useState('');
    return(
      <View style= {{marginTop:200}}>
        <View style={{
          backgroundColor:'white',
          borderRadius: 20, height:70,
          marginHorizontal: 30,
          justifyContent:'center',
          paddingLeft:20,
        }}>
          <TextInput placeholder='Your Email'
          placeholderTextColor={'#000000'}
          onChangeText={(v)=>setUserEmail(v)}
          style={{
            fontSize: 20,
            color: '#000000',
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
          placeholderTextColor={'#000000'}
          onChangeText={(v)=> setUserpassword(v)}
          secureTextEntry={true}
          style={{
            fontSize: 20,
            color: '#000000', 
          }}/>

        </View>
        <SigninButton u_email={userEmail} u_password={userPassword} sb_stack={stack}/>
        <BottomSection bs_stack={stack}/>
      </View>
  
    );
  
  }
  
const LoginScreen = (ls_props: any) => {

  const stack = ls_props.navigation;
  return (
<View style={sty.container}>
      <Image style={{
        width: '100%', height: '100%',
        position:'absolute'
      }} 
      source={
        require('../../../../assets/img/login.png')
      } resizeMode='cover'/>
       <Text style={{fontSize:60,color:'white',fontWeight:'600',
        marginTop:80, marginLeft:40,
      }}>
        
      </Text>
      
      <KeyboardAwareScrollView keyboardShouldPersistTaps={'never'}>

<LoginField lf_stack={stack}/>
      </KeyboardAwareScrollView>

    </View>
  )
}

export default LoginScreen

const sty = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'white',
  
    }
  })