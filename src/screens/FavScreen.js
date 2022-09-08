import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Title from '../components/Title'
import colors from '../assets/theme/colors'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Feather from 'react-native-vector-icons/Feather'

const FavScreen = () => {

  const [text, setText] = useState('')
  const [size, setSize] = useState(0)

  return (
    <View style={styles.container}>

      {/* Header */}
      <Title />

      {/* Search Bar */}
      <View style={styles.root}>
        <View>

        </View>
        <FontAwesome5 style={styles.oculus} name={'search'} />
        <TextInput
          placeholder='Tìm kiếm gì đó...'
          autoCapitalize='none'
          autoCorrect={false}
          style={styles.searchBar}
          value={text}
          onChangeText={(text) => {
            setText(text)
            text != '' ? setSize(20) : setSize(0)
          }}
          onEndEditing={() => {
            text != ''
              ? console.log("LmaoClicked")
              : null
          }}
        />
        <TouchableOpacity style={{ marginRight: 15 }} onPress={() => {
          setText('')
          setSize(0)
        }} >
          <Feather name={'x-circle'} style={{ fontSize: size }} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default FavScreen

const styles = StyleSheet.create({
  container: {
    height: 160,
    backgroundColor: colors.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },

  root: {
    flexDirection: 'row',
    marginTop: 10,
    marginHorizontal: 20,
    borderWidth: 2,
    borderRadius: 15,
    height: 50,
    backgroundColor: 'white',
    alignItems: 'center',
    borderColor: '#690700'
  },

  searchBar: {
    margin: 10,
    borderRadius: 15,
    height: 40,
    flex: 1,
  },

  oculus: {
    fontSize: 20,
    paddingStart: 10,
    color: '#690700'
  },
})