import React, { Component } from 'react'
import { Text, StyleSheet, View, Dimensions,TouchableOpacity, } from 'react-native'

export default class App extends Component {
  state= { 
    number: 0
  }

  onAdd = () =>{ 
    this.setState({
      number: this.state.number + 1 
    })
  };
  onReset= ()=> {
    this.setState({
      number: 0
    })
  }
  render() {
    return (
    <View style={styles.container}> 
    
    <View style={styles.numberTextWrapper}> 
    <Text style={styles.numberText}> {this.state.number} </Text>
    </View>
    <View style={{flexDirection:'row', alignItems:'center'}}>
    <TouchableOpacity 
    onPress={()=>this.onReset()}
    style={styles.resetButton}> 

    </TouchableOpacity> 
    <Text style= {styles.resetTextStyle}>Reset</Text>
    </View> 
    <TouchableOpacity 
    onPress={()=> this.onAdd()}
    style={styles.addButton}> 
        <Text style={styles.text}>TAP</Text>
    </TouchableOpacity>
    </View>
    )
  }
}
const {width,height}= Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height:height, 
    width:width,
    backgroundColor: 'white',
  }, 
  numberTextWrapper:{
    height: height*0.15,
    width: width*0.95,
    alignSelf: 'center', 
    backgroundColor: 'gray',
    marginTop: width*0.1, 
    borderRadius: 8, 
    justifyContent:'center'

  },
  addButton:{
    height: width*0.8,
    width: width*0.8, 
    borderRadius: width*0.8/2, 
    backgroundColor: '#ADD8E6',
    alignSelf: 'center',
    justifyContent:'center', 
    alignItems:'center' 
    
  },
  resetButton:{
    height: width*0.1,
    width: width*0.1, 
    borderRadius: width*0.1/2, 
    backgroundColor: 'tomato', 
    marginTop: width*0.05,
    marginLeft: width*0.05
     
  },
  numberText:{
    color:'white', 
    fontSize: 42, 
    fontWeight: 'bold' 
  },
  resetTextStyle:{
    marginTop: width*0.05,
    marginLeft: width*0.005,
    color: 'black', 
    fontSize: 22, 
    fontWeight: 'bold'
  },
  text:{
    color:'#322342', 
    fontWeight:'bold', 
    fontSize:height*0.1
  }
})
