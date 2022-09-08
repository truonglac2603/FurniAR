import { SafeAreaView, StyleSheet, Text, Touchable, TouchableHighlight, View, ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Swiper from 'react-native-swiper';
import colors from '../assets/theme/colors';
import Banner from '../components/Banner';
import Divider from '../components/Divider';
import Feather from 'react-native-vector-icons/Feather'
import { useNavigation } from '@react-navigation/native';


const ProductDetailScreen = (props) => {
  const navigation = useNavigation()

  let productID = props.route.params.ProductID
  const json = require('../assets/data/data.json')
  const productData = json.rs.Product
  
  const productMatched = (ID) => {
    let PDetail = []
    productData.map((element) => {
      if(element.PID == ID){
        // console.log("Lmao")
        PDetail = element
      }
    })
    return PDetail
  }

  const productDetail = productMatched(productID)

  return (
    <SafeAreaView style = {styles.root}>

      {/* Header */}
      <View style = {styles.header}>
        <TouchableHighlight style = {styles.backButton}>
          <FontAwesome5 style = {styles.backIcon} name = {'chevron-circle-left'} onPress = {() => {
            props.navigation.navigate('Home')
          }}/>
        </TouchableHighlight>
        <Text style = {styles.headerTitle}>Thông tin sản phẩm</Text>
      </View>

      {/* Carousel */}
      <View style={styles.carousel}>
        <Swiper
          style={styles.wrapper}
          showsButtons={false}
          autoplay={true}
          onIndexChanged={(index) => {
            // console.log(index)
          }}
          loadMinimalLoader={
            <ActivityIndicator size={"small"} color={colors.tabbar} />
          }
          activeDotColor={"white"}
          paginationStyle={{ position: 'absolute', bottom: 5 }}
        >
          {productDetail.Images.map(element => {
            return (
              <View key = {element} style = {styles.slide1}>
                <Banner imageUrl={element}/>
              </View>
            )
          })}
        </Swiper>
      </View>

      {/* Divider */}
      <Divider type={0}/>

      <ScrollView>
        {/* Product Title */}
        <View style={{ marginTop: 10, marginLeft: 10 }}>
          <Text style={styles.productTitle}>{productDetail.ProductName}</Text>
        </View>

        {/* Product Descriptions */}
        <View style={{ marginTop: 10, marginHorizontal: 10, }}>
          <Text style={{ color: 'black', fontWeight: '600', fontSize: 16 }}>Mô tả</Text>
          <Text style={styles.productDescriptions}>{productDetail.Description}</Text>
        </View>

        {/*  */}
      </ScrollView>

      {/* Buttons */}
      <View style = {styles.buttonArea}>
          <TouchableOpacity style = {styles.buyButton}>
            <Text style = {styles.buttonTitle}>Thêm vào giỏ</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {styles.ARbutton} onPress={() => {
            navigation.navigate('ARObjectCamera')
          }}>
            <Feather name='eye' style = {styles.icon}/>
            <Text>  </Text>
            <Text style = {styles.ARtitle}>AR</Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: 'white'
  },

  header: {
    height: 60,
    backgroundColor: '#780202',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

  },

  headerTitle: {
    color: 'white',
    fontSize: 22,
    fontWeight: '300',
    alignSelf: 'center',
    paddingTop: 5,
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

  productTitle: {
    fontSize: 26,
    fontWeight: '700',
    color: colors.primary,
  },

  carousel:{ 
    height: 250, 
    marginHorizontal: 10, 
    marginTop: 10 ,
  },

  wrapper: {
    borderRadius: 10,
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  productDescriptions: {
    color : colors.dGrey,
    textAlign: 'justify',
  },

  buttonArea: {
    height: 60, 
    width: "100%", 
    position: 'absolute', 
    bottom: 0, 
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },

  buyButton: {
    height: "90%",
    width: '65%',
    backgroundColor: colors.tabbar,
    marginHorizontal: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },

  ARbutton: {
    height: "90%",
    width: "25%",
    backgroundColor: colors.tabbar,
    marginHorizontal: 5,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },

  buttonTitle: {
    color: 'white',
    fontSize: 17,
    fontWeight: '500'
  },

  icon: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700'
  },

  ARtitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  }

})