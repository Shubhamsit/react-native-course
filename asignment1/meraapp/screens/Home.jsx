import { ImageBackground, StyleSheet, Text, View, Button } from 'react-native'
import React from 'react'

const Home = ({ onLoginPress }) => {
    return (
        <View style={styles.view1} >
            <ImageBackground

                style={styles.image}
                source={{ uri: 'https://img.freepik.com/premium-photo/card-template-curve-gradient-abstract-background_608068-9787.jpg?w=360' }}
            >

                <View>
                    <Text style={styles.text}>Welcome to Bampaara</Text>
                </View>

                <Button
                    title='Login Here ->'
                    onPress={onLoginPress}

                />


            </ImageBackground>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({

    image: {
        width: '100%',
        minHeight: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    view1: {
        flex: 1,
        width: '100%',


    },
    text: {
        fontSize: 30,
        fontWeight: 'bolder',
        color: 'white'
    }

})