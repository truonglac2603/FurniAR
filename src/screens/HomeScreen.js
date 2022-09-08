import { StyleSheet, Text, View, SafeAreaView, StatusBar, TextInput, TouchableOpacity, FlatList, Image, BackHandler, Alert, Dimensions, ActivityIndicator, ScrollView, Modal, Button } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather'
import Swiper from 'react-native-swiper';




// Import Component
import Title from '../components/Title'
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import colors from '../assets/theme/colors'
import TabViewCategories from '../components/TabView'
import Product from '../components/Product';
import Banner from '../components/Banner';
import { SlideInUp } from 'react-native-reanimated';
import Divider from '../components/Divider';


const HomeScreen = (props) => {

  const ref = useRef()
  const navigation = useNavigation()
  const json = require('../assets/data/data.json')
  const bannerData = json.rs.Banner
  const tabsData = json.rs.Tabs



  // Handle hardware back button pressed
  // const onBackPress = () => {
  //   console.log("lmao")
  // }
  // useEffect(() => {
  //   BackHandler.addEventListener('hardwareBackPress', onBackPress)
  // }, [])


  const [size, setSize] = useState(0)
  const [text, setText] = useState('')
  const [tabSelected, setTabSelected] = useState(0)
  const [refresh, setRefresh] = useState(false)
  const [productID, setProductID] = useState()
  const [visible, setVisible] = useState(false)
  const [tabsVisible, setTabsVisible] = useState(false)

  const tabsDataFilter = (tabSelected) => {
    const allProductData = json.rs.Product
    if (tabSelected == 0) {
      return allProductData
    } else {
      return undefined
    }
  }

  return (
    <SafeAreaView
      style={styles.container}
    >
      <StatusBar backgroundColor={'#780202'} />
      <View style={styles.header}>
        <Title />

        {/* Search Bar */}
        <View style={styles.root}>
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
                ? props.navigation.navigate('Component', {
                  paramKey: text
                })
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
        <View style={{ height: 20 }} />
      </View>

      {tabsVisible
        ? <View>
          <TabViewCategories
            style={{ backgroundColor: 'white' }}
            items={tabsData}
            tabSelected={tabSelected}
            setTabSelected={setTabSelected}
          />
        </View>
        : <View />
      }


      {/* Body */}
      <ScrollView
        scrollEnabled={true}
        ref={ref}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        style={styles.body}
        onScroll={(event) => {
          if (event.nativeEvent.contentOffset.y >= 305) {
            // console.log("Lmao")
            // ref.current.scrollTo({x:0, y: 275, animated: false})
            setTabsVisible(true)
          }
          else {
            setTabsVisible(false)
          }
        }}
        scrollEventThrottle={16}
      >

        <View style={{ height: 20 }} />
        <View>
          {/* Explore text */}
          <View style={{ marginStart: 20 }}>
            <Text style={{ fontSize: 30, fontWeight: '600', color: colors.primary }}>
              Khám phá
            </Text>
          </View>

          {/* Banners */}
          <View style={{ height: 170, marginHorizontal: 20 }}>
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
              {bannerData.map(element => {
                return (
                  <View key={element.ID} style={styles.slide1}>
                    <Banner imageUrl={element.ImageURL} title={element.Title} onPress={() => {
                      console.log(element.ID)
                      navigation.navigate('Room', {
                        RoomType: element.Title
                      })
                    }} />
                  </View>
                )
              })}
            </Swiper>
          </View>
        </View>

        {/* <View style={{ height: 15, width: "100%",  backgroundColor: 'white',  }} />
        <View style={{ height: 15, backgroundColor: colors.fadedGray}} /> */}

        <Divider type={1}/>

        {/* Products */}
        <TabViewCategories
          style={{ backgroundColor: 'white' }}
          items={tabsData}
          tabSelected={tabSelected}
          setTabSelected={setTabSelected}
        />


        <Product
          data={tabsDataFilter(tabSelected)}
          refresh={refresh}
          setRefresh={setRefresh}
          productID={productID}
          setProductID={setProductID}
          onLongPress={() => {
            setVisible(!visible)
            console.log("LmaoLongPressed")
          }}
        />
        <View style={{ height: 20 }} />
      </ScrollView>

      <Modal
        transparent={true}
        avoidKeyboard
        style={styles.modal}
        visible={visible}
        onRequestClose={() => setVisible(false)}
        onBackdropPress={() => setVisible(false)}
        onBackButtonPress={() => setVisible(false)}
        propagateSwipe
        swipeThreshold={100}
        swipeDirection={'up'}
        animationType={'slide'}
        onSwipeComplete={() => {
          setVisible(true);
        }}

      >
        <View style={styles.productDetailModal}>
          <TouchableOpacity style={styles.backButton} onPress={() => setVisible(false)} />
        </View>
        <TouchableOpacity style={styles.closeModalOnPress} onPress={() => setVisible(false)}>
          <Text></Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1
  },

  header: {
    backgroundColor: '#780202',
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

  xButton: {
    marginRight: 10,
  },

  banner: {
    height: 120,
    width: "30%",
    borderRadius: 10
  },

  bannerArea: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 10,
    marginTop: 10
  },

  wrapper: {
    borderRadius: 10,
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold'
  },

  modal: {
    position: 'absolute',
    bottom: 0
  },

  productDetailModal: {
    height: 360,
    width: "100%",
    backgroundColor: 'white',
    position: 'absolute',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,
    borderColor: colors.tabbar
  },

  closeModalOnPress: {
    flex: 1
  },

  backButton: {
    height: 5,
    backgroundColor: colors.tabbar,
    marginTop: 20,
    marginHorizontal: 140,
    borderRadius: 20
  }

})