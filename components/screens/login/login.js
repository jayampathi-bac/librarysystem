import React from 'react';
import { View, StyleSheet ,Button} from 'react-native';
import Header from './header'
import Input from './input'

export default function Login ({ navigation }){
    return(
        <View style={styels.container}>
   
        <Header/>
        
        <View style={styels.content}>
          <View style={styels.list}>
           <Input navigation={navigation}/>
          </View>
        </View>

        </View>


    );

}

const styels = StyleSheet.create ({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
      },
      content :{
        flex :1,
         padding : 10,
       },
       
      list : {
        flex : 1,
        marginTop :20,
       }
});