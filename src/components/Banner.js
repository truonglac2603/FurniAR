import { StyleSheet, Text, TouchableOpacity, View, Image, TouchableHighlight} from 'react-native'
import React from 'react'

const Banner = ({imageUrl, title, onPress}) => {

  return (
    <TouchableHighlight style = {styles.banner} onPress ={onPress} >
      <View>
        <Image source={{uri: imageUrl}} style = {styles.image} />
        <Text style = {styles.title}>{title}</Text>
      </View>
    </TouchableHighlight>
  )
}

export default Banner

const styles = StyleSheet.create({
    banner: {
        height: "100%",  
        width: "100%", 
        borderRadius: 10,
    },
    image: {
        height: "100%",
        width: "100%",
        borderRadius: 10,
    },
    title: {
      color: 'white',
      fontSize: 14,
      position: 'absolute',
      top: 10,
      right: 10,
      fontWeight: '200',
      fontSize: 22
    }
})