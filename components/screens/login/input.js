import React ,{useState} from 'react'
import { View,TextInput,Button,StyleSheet} from 'react-native'

export default function Input ( {navigation} ) {
    
    const [text ,setText] = useState('');

    const set = (val) => {
        setText( ()=> val)
    }

    return (
        <View style ={styels.container}>
            <TextInput  style={styels.input}
            placeholder='User Name'
            // onChangeText ={ (val) => set(val)}
            />
             <TextInput  style={styels.input}
            placeholder='Password'
            // onChangeText ={ (val) => set(val)}
            />
            <View style={styels.button}>
            <Button  title="Login " color='coral' onPress= { () => navigation.navigate('Dash')} ></Button> 
            
            <View style={styels.btn}>
                <View style={{color: 'blue', fontSize: 30 , marginRight :30}}>
                <Button  style={{color: 'blue', fontSize: 30 , padding :12}} title="Login With Gmail "  onPress= { () => navigation.navigate('Update')} ></Button> 
                </View>
               <Button  title="Login FaceBook" color='coral' onPress= { () => console.log('hello')} ></Button> 
            </View>
            
            </View>
           
        </View>
    )
}

const styels = StyleSheet.create ({
      container : {
          marginTop :8,
          padding :20
      },
      input : {
          marginBottom :10,
          padding :16,
          width : 340,
          marginTop : 20,
          borderWidth :1,
          borderRadius : 10,
          borderColor : '#bbb',
          borderStyle : 'dashed',
          flexDirection : 'row'
         
          },

      button : {
          paddingTop : 40,
        },
        btn : {
            padding :16,
            marginTop : 20,
            borderWidth :1,
            borderRadius : 10,
            borderColor : '#bbb',
            // borderStyle : 'dashed',
            flexDirection : 'row',
           
        }
})