import React ,{Component}from 'react'
import { View , Modal , Text} from "react-native";




export default class TableCompnent extends Component {

   
     constructor( {x} ){
        super();
        this.state ={
            show : x
        }
       }

    render(){
        return(
            <Modal visible={this.state.show} transparent ={true}>
               <View style={{ flex: 1 , margin : 20}}>
                   <Text>Hello Model</Text>
               </View>
            </Modal>
        );
    }


}

