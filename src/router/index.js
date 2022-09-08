import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import colors from '../assets/theme/colors';
import LinearGradient from 'react-native-linear-gradient';
import { useKeyboard } from '@react-native-community/hooks';

// import Screens
import ComponentScreen from '../screens/ComponentScreen';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SplashScreen from '../screens/SplashScreen';
import FavScreen from '../screens/FavScreen';
import SettingScreen from '../screens/SettingScreen';
import NotiScreen from '../screens/NotiScreen';
import CartScreen from '../screens/CartScreen';
import RoomScreen from '../screens/RoomScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import ARObjectCamera from '../screens/ARObjectCamera';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator()
// const Tab = createBottomTabNavigator();
// export const navigationRef = createNavigationContainerRef();

const HomeTabs = () => {

    const keyboard = useKeyboard()
    console.log(keyboard.keyboardShown)

    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={TabOptions}
        >

            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={
                    {
                        headerShown: false,
                        tabBarLabel: "Trang chủ",
                        tabBarHideOnKeyboard: true,
                        tabBarIcon: ({ focused }) => {
                            return <AntDesign name="home" style={{ color: focused ? colors.tabbar : colors.activeGray, fontSize: 24 }} />
                        }
                    }
                }
            />

            <Tab.Screen
                name="Fav"
                component={FavScreen}
                options={
                    {
                        headerShown: false,
                        tabBarLabel: "Yêu thích",
                        tabBarIcon: ({ focused }) => {
                            return <AntDesign name="hearto" style={{ color: focused ? colors.tabbar : colors.activeGray, fontSize: 24 }} />
                        }
                    }
                }
            />

            <Tab.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: '',
                    tabBarIcon: () => {
                        
                        return <View style={styles.cartButton}>
                            <LinearGradient
                                colors = {[colors.gradientTabbar, colors.tabbar]}
                                style = {styles.middleButton}
                            >
                                <MaterialIcons name="shopping-cart" style={{ color: 'white', fontSize: 32 }} />
                            </LinearGradient>
                        </View>
                    },
                }}
            />

            <Tab.Screen
                name="Noti"
                component={NotiScreen}
                options={
                    {
                        headerShown: false,
                        tabBarLabel: "Thông báo",
                        tabBarIcon: ({ focused }) => {
                            return <Feather name="bell" style={{ color: focused ? colors.tabbar : colors.activeGray, fontSize: 24 }} />
                        }
                    }
                }
            />

            <Tab.Screen
                name="Setting"
                component={SettingScreen}
                options={
                    {
                        headerShown: false,
                        tabBarLabel: "Thiết lập",
                        tabBarIcon: ({ focused }) => {
                            return <AntDesign name="setting" style={{ color: focused ? colors.tabbar : colors.activeGray, fontSize: 24 }} />
                        }
                    }
                }
            />

        </Tab.Navigator>
    );
};

const AppRouter = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName='Splash'
            >
                <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false, animation: 'fade_from_bottom' }} />
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false, animation: 'fade_from_bottom' }} />
                <Stack.Screen name="HomeTabs" component={HomeTabs} options={{ headerShown: false, animation: 'fade_from_bottom' }} />
                <Stack.Screen name="Component" component={ComponentScreen} options={{ headerShown: false, animation: 'slide_from_right' }} />
                <Stack.Screen name="Room" component={RoomScreen} options={{ headerShown: false, animation: 'simple_push' }} />
                <Stack.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false, animation: 'simple_push' }} />
                <Stack.Screen name="ARObjectCamera" component={ARObjectCamera} options={{ headerShown: false, animation: 'simple_push' }} />

            </Stack.Navigator>
        </NavigationContainer>

    )
}

const TabOptions = {
    headerStyle: {
        backgroundColor: colors.primary,
    },
    headerTitleStyle: {
        color: "white",
    },
    headerShadowVisible: false,
    headerTitleAlign: 'center',
    tabBarActiveTintColor: colors.tabbar,
    tabBarInactiveTintColor: colors.activeGray,
    tabBarStyle: {
        backgroundColor: 'white',
    },
    tabBarLabelStyle: {
        fontSize: 12
    },
};

const styles = StyleSheet.create({
    cartButton: {
        position: 'absolute',
        bottom: 0,
        backgroundColor: colors.tabbar,
        height: 60,
        width: 60,
        borderRadius: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    middleButton: {
        height: 60, 
        width: 60, 
        borderRadius: 40, 
        alignItems: 'center', 
        justifyContent: 'center'
    }
})

export default AppRouter