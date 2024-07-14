import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import RoundedButton from './button/RoundedButton';
import SquareButton from './button/SquareButton';

export default function App() {
btnObj={
  bgColor:'#66FF00',
  textColor:'black',
  width:200,
  height:40,
  text:'Login Sucess',
  logo:'☑️'
}

btnObj2={
  bgColor:'white',
  textColor:'red',
  width:200,
  height:50,
  text:'Danger Button',
  logo:'⚠️',
  borderColor:'red',
  borderWidth:2,
}


  return (
    <View style={styles.container}>
   <RoundedButton btnObj={btnObj} />
   {/* <SquareButton btnObj={btnObj2}/> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
