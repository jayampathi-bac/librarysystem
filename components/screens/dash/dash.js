import React ,{useState}from 'react'
import { View , Text, StyleSheet ,Button ,Modal} from 'react-native';
import Tbl from '../dash/table'
import Update from '../update/updateForm'

export default function Dash( {navigation} ){

    const [ modal , setModal] =useState(false);

   return(
       <View style={Styles.view} >
         <View style={{color: 'blue', fontSize: 30 , marginLeft :200 , marginRight :20 , marginTop :20 , marginBottom : 10}}>
                <Button  style={{color: 'yellow', fontSize: 30 , padding :12 }} color="#149F5B" title="Add a Book "  
                onPress= { () => 
                   { 
                        setModal(true);
                        Styles.view = { backgroundColor :"#E2E2E2"  }
                   }       
                   } >
                    </Button> 
         </View>
        
       <View style={Styles.container}>
            <Tbl/>
       </View>

       <Modal visible={modal} animationType='slide' transparent={true} > 
               <View style={ { flex : 1 , backgroundColor :"#E2E2E2" ,marginTop : 70} }   >
                   <View style={ { paddingRight :20 , paddingBottom : 20, margin : 10 , backgroundColor :"#ffffff" , borderRadius :10 , marginTop :100} }>
                   {/* <MaterialIcons name='close' size={24} onPress={() => setModal(false)}/> */}
                   <Text>Hello Model</Text>
                   <View style={{ marginRight :40}}>
                       <Update/>
                   </View>

                    <View style={{ width :100 , marginTop : -36 , color: "#149F5B" ,marginLeft :20}}>
                     <Button  style={{color: "#149F5B" ,fontSize: 30 , padding :12}} title="cancel " color = "#DD4F42" onPress= { () => setModal(false)} ></Button> 
                    </View>

                   </View>
               </View>
          </Modal>

       </View>
   );

}

const Styles = StyleSheet.create({
    container : {
        height : 600 ,
        backgroundColor : 'white',
      
    },
    view : {
        backgroundColor : 'white',
        flex :1
    }
    
});
