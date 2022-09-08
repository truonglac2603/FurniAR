import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Keyboard, ScrollView, RefreshControl, TouchableHighlight, Modal, Dimensions} from 'react-native'
import React, { useRef } from 'react'
import colors from '../assets/theme/colors'
import formatMoney from '../utils/formatMoney'
import { useNavigation } from '@react-navigation/native'
import Grid from 'react-native-grid-component'

const Product = ({data, refresh, setRefresh, productID, setProductID, onLongPress }) => {

  const ref = useRef()
  const navigation = useNavigation()

  const numColumns = data!=undefined?Math.ceil(data.length / 2):null
  
  return (
    data!=undefined
    ?<Grid 
      scrollable={false}
      keyExtractor={(element) => element.PID}
      renderPlaceHolder={i=> {
        <View style={styles.item} key={i} />;
      }}
      numColumns={2}
      data={data}
      renderItem={(item) => {
        return(
          <TouchableHighlight 
            underlayColor={'transparent'} 
            onPress={() => {
              setProductID(item.PID)
              navigation.navigate('ProductDetail', {
                ProductID: item.PID
              })
          }}
            onLongPress={onLongPress}
            
          >
            <View style = {styles.productArea}>
              <Image style = {styles.imageView} source={{uri:item.Image}}/>
              <View style = {styles.line}/>
              <Text numberOfLines={1} style = {styles.title}>{item.ProductName}</Text>
              <Text style = {styles.price}>{formatMoney(item.Price)}</Text>
            </View>
          </TouchableHighlight>
        )
      }}
      
    />
    :<View style = {styles.nonToShow}>
      <Text>Không có dữ liệu để hiển thị</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({
  imageButton: {
    marginLeft: 20
  },

  imageView: {
    height: "80%",
    width: "100%",
    resizeMode: 'stretch',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8
  },

  title: {
    marginTop: 5,
    marginStart: 5,
    fontSize: 13,
    color: colors.primary
  },

  productArea: {
    // backgroundColor: 'red',
    height: 225,
    width: 170,
    borderRadius: 10,
    margin: 5,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: colors.tabbar,
    alignItems: 'center'
  },

  price: {
    marginStart: 5,
    fontSize: 13,
    color: colors.primary,
    fontWeight: '700',
  },

  nonToShow: {
    height: 500,
    alignItems: 'center',
    justifyContent: 'center'
  },

  line: {
    height: 2,
    marginTop: 1,
    width: "85%",
    backgroundColor: colors.tabbar,
    borderRadius: 25
  }
})