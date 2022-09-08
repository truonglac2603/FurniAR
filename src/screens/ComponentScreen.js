import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Title from '../components/Title'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

const ComponentScreen = (props) => {

  let searchTerm = props.route.params.paramKey
  console.log(searchTerm)

  return (
    <View style = {styles.root} >
      <TouchableOpacity style = {styles.backButton}>
        <FontAwesome5 style = {styles.backIcon} name = {'chevron-circle-left'} onPress = {() => {
          props.navigation.navigate('Home')
        }}/>
      </TouchableOpacity>
      {}
      <Text numberOfLines={1} style = {styles.titleStyle}>{searchTerm}</Text>
    </View>
  )
}

export default ComponentScreen

const styles = StyleSheet.create({
  root: {
    height: 60,
    backgroundColor: '#780202',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },

  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
  },

  backIcon: {
    fontSize: 25,
    color: 'white'
  },

  titleStyle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '300',
    alignSelf: 'center',
    paddingTop: 5,
    
  }
})