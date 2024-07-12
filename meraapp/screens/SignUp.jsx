import { StyleSheet, Text, View,Image, TextInput,Button } from 'react-native'
import React from 'react'

const Login = ({onLoginPress}) => {
  return (
    <View style={styles.view1}>

        <View style={styles.view2}>

            <View style={styles.imageContainer}>
                 <Image  style={styles.image}source={{uri:'https://img.freepik.com/premium-vector/profile-security-flat-style-design-vector-illustration-stock-illustration_357500-781.jpg?w=900'} }
                 
                 />
            
            </View>

            <View>

            <TextInput
                placeholder='Username'
                keyboardType="default" 
                style={styles.inputBox}
                
                />

                <TextInput
                placeholder='Email'
                keyboardType="email-address" 
                style={styles.inputBox}
                
                />

                 <TextInput
                placeholder='Password'
                secureTextEntry={true} 
                style={styles.inputBox}
                
                />



<View style={styles.btnContainer}>
                <Button
                title='Signup'
                style={styles.button}
                
                />
</View>
<View style={styles.btnContainer}>
                <Button
                title='Login'
                color='orange'
                onPress={onLoginPress}
                />


                <View/>

                

</View>
               



            </View>



        </View>

     
    </View>
  )
}

export default Login

const styles = StyleSheet.create({

    view1:{
        backgroundColor:'white',
        width:'100%',
        minHeight:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
    view2:{
        backgroundColor:'white',
        width:'80%',
        minHeight:'80%',

    },
    image:{
        width:'98%',
        height:'50%',
        // position:'absolute',
        top:100
        
     
    },
    imageContainer:{
        // backgroundColor:'blue'

    },
    inputBox:{
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20,
        borderRadius: 5,

    },
    btnContainer:{
    
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      
        marginTop:20,

    
    },
    btn:{
        marginBottom:5,

    }
})