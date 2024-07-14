import { View, Text,StyleSheet,TouchableOpacity} from 'react-native'
import React from 'react'

const SquareButton = ({ btnObj}) => {

    const { bgColor, text, width, height, logo,textColor,borderWidth,borderColor } = btnObj;
  return (
    <View style={[styles.mainContainer, {width:width,height:height}]}>




    <TouchableOpacity onPress={() => { }} style={[styles.btnContainer,{backgroundColor:bgColor,borderWidth:borderWidth, borderColor:borderColor}]}>
      <View>
        <Text style={[styles.btnText,{color:textColor}]}>{logo} {text}</Text>
      </View>
    </TouchableOpacity>


  </View>
  )
}

export default SquareButton



const styles = StyleSheet.create({
    mainContainer: {
      flexDirection: 'row',
 
   
  
  
    },
    btnText: {
      fontSize: 15,
      fontWeight: "500",
    },
    btnContainer: {
      padding:0,
      borderRadius: 0,
     borderColor:'green',

      width: '95%',
      height: '95%',
      elevation: 3,
      shadowColor: "#000000",
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 2,
      justifyContent: 'center',
      alignItems: 'center',
  
  
    }
  })