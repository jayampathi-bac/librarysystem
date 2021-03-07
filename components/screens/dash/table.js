import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Alert, Modal , Button } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { MaterialIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { TextInput } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

 
export default class TableCompnent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Head', 'Head2', 'Head3', 'Head4'],
      tableData: [
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['a', 'b', 'c', 'd']
      ],
      show : false
    }
  }

  _alertIndex(index) {
    Alert.alert(`This is row ${index + 1}`);
  }
 
  render() {
    const state = this.state;
    const element = (data, index) => (
    
  <View style={{ flexDirection : 'row'}}>
    <TouchableOpacity onPress={() => { this.setState( { show : true} )  }}>
        <View style={{ marginRight : 5}}>
        <Entypo name="export" size={24} color="black" />
        </View>
    </TouchableOpacity>

    <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={{ marginLeft : 15}}>
        <MaterialIcons name="delete" size={24} color="black" />
        </View>
     </TouchableOpacity>

     <Modal visible={this.state.show} transparent={true}>
       <View style={{ flex : 1.2, justifyContent: 'center',
                 alignItems: 'center'}}>
      
     <TouchableOpacity onPress = { () => this.setState({show : false}) } >
      <AntDesign name="closecircle" size={24} color="black" />
     </TouchableOpacity>
      <View style={{backgroundColor : '#DDDDDD' ,flex :0.55 , width : 350 ,justifyContent: 'center' ,alignItems: 'center', borderRadius : 15}}>
               
             <TextInput style={styles.input} placeholder='User Name'/>
             <TextInput style={styles.input} placeholder='User Name'/>
             <TextInput style={styles.input} placeholder='User Name'/>
           
         </View>
         <View style={{ marginLeft : 180 , marginTop : -20}}>
              <Button  title="Update Book" color='coral' onPress= { () => console.log('hello')} ></Button> 
           </View> 
       </View>
     </Modal>

     </View> 
    );
 
    return (
      <View style={styles.container}>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 3 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 43, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 ,margin:2},
  btnText: { textAlign: 'center', color: '#fff' },
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

});