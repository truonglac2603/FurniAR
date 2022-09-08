import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../assets/theme/colors'

const Divider = ({ type }) => {
    if (type == 1) {
        return (
            <View style={{ height: 45, backgroundColor: colors.fadedGray }}>
                <View style={{ height: 15, backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
                <View style={{ height: 20, backgroundColor: colors.fadedGray }} />
                <View style={{ height: 10, backgroundColor: 'white', borderTopRightRadius: 15, borderTopLeftRadius: 15 }} />
            </View>
        )
    } else {
        return (
            <View style={{ height: 35, backgroundColor: colors.fadedGray }}>
                <View style={{ height: 15, backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }} />
                <View style={{ height: 10, backgroundColor: colors.fadedGray }} />
                <View style={{ height: 10, backgroundColor: 'white', borderTopRightRadius: 15, borderTopLeftRadius: 15 }} />
            </View>
        )
    }
}

export default Divider

const styles = StyleSheet.create({
})