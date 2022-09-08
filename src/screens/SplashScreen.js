import { ImageBackground, StatusBar, StyleSheet, Text, View, Image} from 'react-native'
import React, { useState } from 'react'

const SplashScreen = (props) => {
  const [hidden, setIsHidden] = useState(true)

  setTimeout(() => {
    props.navigation.replace('Login')
    setIsHidden(false)
  }, 2000);

  return (
    <View style = {styles.root}>
      <StatusBar  hidden = {false} backgroundColor = {'#780202'}/>
      <Image style = {styles.title} source={require('../assets/White_logo.png')} />
      <Image style = {styles.tagLine} source = {require('../assets/images/Tagline.png')} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#780202'
  },

  title : {
    height: 80,
    width: 300
  },
  tagLine: {
    hieght: 5,
    width: 300
  }
})