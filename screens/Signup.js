



import React, { Component, useState } from 'react';

import { View, 
  Text
   ,
   StyleSheet,
    TextInput, 
    Touchable, 
    TouchableOpacity, StatusBar} from 'react-native'


const  userInfo = {username:'1',password:'1'}
export class Signup extends Component {
  static navigationOptions={
    header:null
  }
  constructor(props){
    super(props);
    this.state={
      username:'',
      password:'',
      email:'',
      mobile:'',
      address:'',

    }
  }

  _login = async() =>{
   
      this.props.navigation.navigate('Main',{username:this.state.username})
   
    } 

  

render() {
    return (
      <View style={styles.cont}>
        <StatusBar 
        backgroundColor="#1e90ff"
        barStyle="light-content"
        />
      <Text style={styles.welcome}>Register</Text>
      
    
      <TextInput 
      placeholder="Username"
     style={styles.input}
      onChangeText={(username) => this.setState({username})}
      value={this.state.username}
      />

      
      <TextInput 
      placeholder="Name"
      style={styles.input}

      onChangeText={(name) => this.setState({name})}
      value={this.state.name}
      />
      
      
      <TextInput 
      placeholder="Password"
      style={styles.input}
secureTextEntry
      onChangeText={(password) => this.setState({password})}
      value={this.state.password}
      />
    
    
    
     <TextInput 
      placeholder="Address"
      style={styles.input}
       onChangeText={(address) => this.setState({address})}
      value={this.state.address}
      />
          
          
     <TextInput 
      placeholder="Mobile"
       style={styles.input}
 onChangeText={(mobile) => this.setState({mobile})}
 keyboardType = 'numeric'
      value={this.state.mobile}
      />
     
      
      <View style={styles.button}>

        <TouchableOpacity
     onPress={()=>alert('Registration Successfull')}
        >
          <Text>Signup</Text>
        </TouchableOpacity>

      </View>


      <View style={styles.button1}>
        <TouchableOpacity
    onPress={()=>this._login()}
        >
          <Text>Login</Text>
        </TouchableOpacity>


      </View>
    </View>
    )
  }
  

}



const styles =StyleSheet.create({
  cont:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  
    backgroundColor:'#1e90ff'
  
  },
  welcome:{
    fontSize:30,
    textAlign:'center',
    margin:10,
    color:'#fff'
   ,  fontFamily: "Dancing Script"
  },
  input:{
  width:'90%',
  padding:15,
  marginBottom:10
  ,backgroundColor:'white'
  },
  button:{
    width:'90%',
    backgroundColor:'#f44336',
    padding: 15,
    textAlign: 'center'
  },
  button1:{
    width:'90%',
    backgroundColor:'#4CAF50',
    color:'white',
    padding: 15,
    textAlign: 'center'
  },
  
  
  });
export default Signup;
