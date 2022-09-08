import { StyleSheet, Text, TextInput, View, TouchableOpacity, Image } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather'
import React, { useState } from 'react'


const SearchBar = ({NavFunc, term}) => {

    const [size, setSize] = useState(0)
    const [text, setText] = useState('')
    


    return (
        <View style={styles.root}>
            <FontAwesome5 style={styles.oculus} name={'search'} />
            <TextInput
                placeholder='Tìm kiếm gì đó...'
                autoCapitalize='none'
                autoCorrect={false}
                style={styles.searchBar}
                value={text}
                onChangeText={(newText) => {
                    setText(newText)
                    newText != ''? setSize(20) : setSize(0)
                    return  newText = term
                }}
                onEndEditing = {NavFunc}
            />
            <TouchableOpacity style={{ marginRight: 15 }} onPress = {() => {
                setText('')
                setSize(0)
            }} >
                <Feather name={'x-circle'} style={{ fontSize: size }} />
            </TouchableOpacity>
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    
})