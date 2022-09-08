import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style = {styles.root}>
        <Image style = {styles.logo} source={require('../assets/White_logo.png')}></Image>
    </View>
  )
}

export default Title

const styles = StyleSheet.create({
    root: {
        // height: 300,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        height: 80,
        width: 200
    }
})