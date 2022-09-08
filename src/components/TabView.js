import { StyleSheet, Text, View, ScrollView, TouchableOpacity, TouchableHighlight } from 'react-native'
import React, {useState, useRef} from 'react'
import colors from '../assets/theme/colors'

const TabViewCategories = ({items, tabSelected, setTabSelected}) => {
  
  const ref = useRef()
  const tabsPosition = [0,0,0,0,42,80,132,188,257,337,392,447,560,560,560]
  

  return (
    <View style={{ overflow: 'hidden', paddingBottom: 5 }}>
      <ScrollView 
        ref={ref}
        showsHorizontalScrollIndicator={false} 
        contentContainerStyle = {
          {
            justifyContent: 'space-evenly', 
            alignItems: 'center'
          }
        } 
        
        horizontal 
        style = {styles.root}
        scrollEventThrottle={16}
        
      >
        {items.map((item) => {
          return (
            <View key={item.ID}>
              <TouchableHighlight underlayColor={'transparent'} style = {styles.tags} onPress = {() => {
                setTabSelected(item.Status)
                ref.current.scrollTo({x: tabsPosition[item.Status], y: 0, animated: true})
              }}>
                <Text style = {tabSelected==item.Status? styles.active:styles.inactive}>{item.TagName}</Text>
              </TouchableHighlight> 
              {tabSelected==item.Status 
                ?<View style = {{backgroundColor: colors.tabbar, height: 3, borderRadius: 10}}></View>
                :<View style = {{backgroundColor: 'transparent', height: 3}}></View>
              }
            </View>
          )
        })}
        
      </ScrollView>

      <View style = {{backgroundColor: colors.lightGreyColor, height: 1, marginHorizontal: 10}}/>
    </View>
    
  )
}

export default TabViewCategories

const styles = StyleSheet.create({
  root: {
    height: 35,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity:  0.4,
    shadowRadius: 3,
    elevation: 5,
  },

  tags: {
    marginHorizontal: 10
  },

  active: {
    color : colors.tabbar
  },

  inactive: {
    color: colors.gray
  }
})