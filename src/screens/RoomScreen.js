import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const RoomScreen = (props) => {

  let roomType = props.route.params.RoomType

  return (
    <View>
      <Text>{roomType}</Text>
    </View>
  )
}

export default RoomScreen

const styles = StyleSheet.create({})