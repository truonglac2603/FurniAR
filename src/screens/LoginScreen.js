import { Alert, Image, Keyboard, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View, TouchableHighlight } from 'react-native'
import colors from '../assets/theme/colors'
import React, { useState } from 'react'
import Feather from 'react-native-vector-icons/Feather'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
const json = require('../assets/data/data.json')

const AuthData = json.rs.Authentication


//import component
import Title from '../components/Title'
import { useNavigation } from '@react-navigation/native'

var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
var number = /01234567890/

const LoginScreen = (props) => {

  const navigation = useNavigation()

  const [signUp, setSignUp] = useState('login')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [checkUsername, setCheckUserName] = useState()
  const [passwordHidden, setPasswordHidden] = useState(true)
  const [eyeButton, setEyeButton] = useState('eye')
  const [confirmPass, setConfirmPass] = useState()
  const [checkPassMatch, setCheckPassMatch] = useState()
  const [checkPassSecurity, setCheckPassSecurity] = useState()
  const [securityLevel, setSecurityLevel] = useState('red')

  const [userID, setUserID] = useState()
  const [loginFailed, setLoginFailed] = useState(false)

  const welcome = "Chào mừng!"
  const login = "Đăng nhập"
  const signup = "Đăng ký"
  const subTitleLogin = "Mời bạn nhập thông tin đăng nhập"
  const subTitleSignUp = "Mời bạn nhập đầy đủ thông tin cá nhân"

  return (
    <View style={styles.root}>
      <StatusBar backgroundColor={colors.primary} />

      {/* Header */}
      <View style={styles.header}>
        <View style={{ height: 20 }} />
        <Title />
        <View style={{ height: 25 }} />
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.welcome}>{welcome}</Text>
        </View>
      </View>

      {/* Body */}
      {/* Login */}
      {signUp === 'login' ? (
        <View style={styles.body}>
          {/* Title */}
          <View style={styles.bodyHeader}>
            <Text style={styles.bodyTitle}>{login}</Text>
            <Text style={styles.subBodyTitle}>{subTitleLogin}</Text>
          </View>

          {/* Input */}
          <View style={{ height: 10 }} />

          {/* Username */}
          <View style={{ marginHorizontal: 20, height: 50 }}>
            <View style = {{position: 'absolute', left: 15, top: 15}}>
              <FontAwesome name = "user" style = {styles.hidePassButton}/>
            </View>
            <TextInput
              style={styles.inputArea}
              placeholder="Tên đăng nhập"
              value={username}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => {
                setUsername(text)
              }}
              onEndEditing={() => {
                if (username.length == 0) setCheckUserName("Tên đăng nhập không được bỏ trống!")
                else if (username.length <= 4) setCheckUserName("Tên đăng nhập quá ngắn!")
                else setCheckUserName("")

              }}
            />
          </View>

          {/* Check username */}
          <View style={{ height: 14, marginHorizontal: 30 }}>
            <Text style={{ fontSize: 10, color: 'red', fontWeight: '500' }}>{checkUsername}</Text>
          </View>

          <View style={{ height: 5 }} />

          {/* Password */}
          <View style={{ marginHorizontal: 20, height: 50, flexDirection: 'row' }}>
            <View style = {{position: 'absolute', left: 15, top: 15}}>
              <FontAwesome name = "lock" style = {styles.hidePassButton}/>
            </View>
            <TextInput
              style={styles.inputArea}
              placeholder="Mật khẩu"
              value={password}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={passwordHidden}
              onChangeText={(text) => {
                setPassword(text)

              }}
              onEndEditing={() => {
                console.log(`Password: ${password}`)
              }}
            />
            <TouchableHighlight underlayColor={'transparent'} style={styles.hidePasswordStyle} onPress={() => {
              eyeButton === "eye-off" ? setEyeButton("eye") : setEyeButton("eye-off")
              passwordHidden == true ? setPasswordHidden(false) : setPasswordHidden(true)
            }}>
              <Feather name={eyeButton} style={styles.hidePassButton} />
            </TouchableHighlight>
          </View>
          <View style={{ alignItems: 'flex-end', marginEnd: 20 }}>
            <TouchableOpacity onPress={() => { 
              console.log("Chuyển màn hình quên mật khẩu")  
              Keyboard.dismiss()
            }}>
              <Text style={{ fontSize: 13, color: colors.secondary }}>Quên mật khẩu</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: 50 }} />

          {/* Login Button */}
          <View style={{ height: "30%", alignItems: 'center', justifyContent: 'space-evenly' }}>
            <TouchableHighlight underlayColor={colors.secondary} style={styles.loginButton} onPress = {() => {
              // for(let i = 0; i< AuthData.length; i++){
              //   // setLoginFailed(false)
              //   if(username == AuthData[i].Username && password == AuthData[i].Password){
              //     // setLoginFailed(false)
              //     navigation.replace('HomeTabs')
              //     Keyboard.dismiss()
              //     setUserID(AuthData[i].UID)
              //     break
              //   }else {
              //     // setLoginFailed(true)
              //     if (i === AuthData.length - 1){
              //       Alert.alert("Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin")
              //     }
              //   }
              // }
              // console.log(loginFailed)

                  navigation.replace('HomeTabs')
                  Keyboard.dismiss()
                  // setUserID(AuthData[i].UID)

            }}>
              <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }} >Đăng nhập</Text>
            </TouchableHighlight>
            
            <TouchableOpacity  style={styles.facebookButton} onPress = {() => {
              navigation.replace('HomeTabs')
              Keyboard.dismiss()
            }}>
              <Image style={{ height: 30, width: 30, position: 'absolute', left: 10 }} source={require('../assets/images/facebook_logo.png')} />
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Đăng nhập với Facebook</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.googleButton} onPress = {() => {
              navigation.replace('HomeTabs')
              Keyboard.dismiss()
            }}>
              <Image style={{ height: 30, width: 30, position: 'absolute', left: 10 }} source={require('../assets/images/google_logo.png')} />
              <Text style={{ fontSize: 14, fontWeight: '600', color: colors.primary }}>Đăng nhập với Google</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: "12%" }} />

          {/* Change SignUp screen */}
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ color: colors.primary, fontSize: 14 }}>Chưa có tài khoản? </Text>
            <TouchableOpacity onPress={() => {
              setSignUp('signup')
              Keyboard.dismiss()
            }}>
              <Text style={{ fontSize: 14, textDecorationLine: 'underline', fontWeight: '500', color: colors.secondary }}>Đăng kí ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}

      {/* Sign up */}
      {signUp === 'signup' ? (
        <View style={styles.body}>
          <View style={styles.bodyHeader}>
            <Text style={styles.bodyTitle}>{signup}</Text>
            <Text style={styles.subBodyTitle}>{subTitleSignUp}</Text>
          </View>

          {/* Input */}
          <View style={{ height: 0 }} />

          {/* Username */}
          <View style={{ marginHorizontal: 20, height: 50 }}>
            <View style = {{position: 'absolute', left: 15, top: 15}}>
              <FontAwesome name = "user" style = {styles.hidePassButton}/>
            </View>
            <TextInput
              style={styles.inputArea}
              placeholder="Tên đăng nhập"
              value={username}
              autoCapitalize='none'
              autoCorrect={false}
              keyboardType='email-address'
              onChangeText={(text) => {
                setUsername(text)
              }}
              onEndEditing={() => {
                console.log(`Username: ${username}`)
                if (username.length == 0) setCheckUserName("Tên đăng nhập không được bỏ trống!")
                else if (username.length <= 4) setCheckUserName("Tên đăng nhập quá ngắn!")
                else setCheckUserName("")

              }}
            />
          </View>

          {/* Check username */}
          <View style={{ height: 14, marginHorizontal: 30 }}>
            <Text style={{ fontSize: 10, color: 'red', fontWeight: '500' }}>{checkUsername}</Text>
          </View>

          <View style={{ height: 5 }} />

          {/* Password */}
          <View style={{ marginHorizontal: 20, height: 50, flexDirection: 'row' }}>
            <View style = {{position: 'absolute', left: 15, top: 15}}>
              <FontAwesome name = "lock" style = {styles.hidePassButton}/>
            </View>
            <TextInput
              style={styles.inputArea}
              placeholder="Mật khẩu"
              value={password}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={passwordHidden}
              onChangeText={(text) => {
                setPassword(text)

              }}
              onEndEditing={() => {
                console.log(`Password: ${password}`)
                if (password.length <= 4) {
                  setCheckPassSecurity("Mật khẩu quá ngắn!")
                  setSecurityLevel('red')
                } else if (4 < password.length && password.length < 6) {
                  setCheckPassSecurity("Mức độ bảo mật: Kém")
                  setSecurityLevel('red')
                } else if (password.length >= 6) {
                  if (
                    password.includes("0") ||
                    password.includes("1") ||
                    password.includes("2") ||
                    password.includes("3") ||
                    password.includes("4") ||
                    password.includes("5") ||
                    password.includes("6") ||
                    password.includes("7") ||
                    password.includes("8") ||
                    password.includes("9")
                    ){
                    setCheckPassSecurity("Mức độ bảo mật: Cao")
                    setSecurityLevel('green')
                  } else {
                    setCheckPassSecurity("Mức độ bảo mật: Trung bình")
                    setSecurityLevel('#d2db25')
                  }
                } else {
                  return
                }
              }}
            />
            <TouchableOpacity style={styles.hidePasswordStyle} onPress={() => {
              eyeButton === "eye-off" ? setEyeButton("eye") : setEyeButton("eye-off")
              passwordHidden == true ? setPasswordHidden(false) : setPasswordHidden(true)
            }}>
              <Feather name={eyeButton} style={styles.hidePassButton} />
            </TouchableOpacity>
          </View>

          {/* Check password security*/}
          <View style={{ height: 14, marginHorizontal: 30 }}>
            <Text style={{ fontSize: 10, color: securityLevel, fontWeight: '500' }}>{checkPassSecurity}</Text>
          </View>

          <View style={{ height: 6 }} />

          <View style={{ marginHorizontal: 20, height: 50 }}>
            <View style = {{position: 'absolute', left: 15, top: 15}}>
              <FontAwesome name = "lock" style = {styles.hidePassButton}/>
            </View>
            <TextInput
              style={styles.inputArea}
              placeholder="Xác nhận mật khẩu"
              value={confirmPass}
              autoCapitalize='none'
              autoCorrect={false}
              secureTextEntry={passwordHidden}
              onChangeText={(text) => {
                setConfirmPass(text)
              }}
              onEndEditing={() => {
                confirmPass !== password ? setCheckPassMatch("Mật khẩu không trùng khớp!") : setCheckPassMatch("")
              }}
            />
            <TouchableOpacity style={styles.hidePasswordStyle} onPress={() => {
              eyeButton === "eye-off" ? setEyeButton("eye") : setEyeButton("eye-off")
              passwordHidden == true ? setPasswordHidden(false) : setPasswordHidden(true)
            }}>
              <Feather name={eyeButton} style={styles.hidePassButton} />
            </TouchableOpacity>
          </View>



          {/* Check confirm password */}
          <View style={{ height: 14, marginHorizontal: 30 }}>
            <Text style={{ fontSize: 10, color: 'red', fontWeight: '500' }}>{checkPassMatch}</Text>
          </View>

          <View style={{ height: 35 }} />

          {/* Login Button */}
          <View style={{ height: "30%", alignItems: 'center', justifyContent: 'space-evenly' }}>
            <TouchableOpacity style={styles.loginButton} onPress={() => {
              navigation.replace('HomeTabs')
              Keyboard.dismiss()
            }}>
              <Text style={{ fontSize: 18, fontWeight: '600', color: 'white' }}>Đăng ký</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.facebookButton} onPress={() => {
              navigation.replace('HomeTabs')
              Keyboard.dismiss()
            }}>
              <Image style={{ height: 30, width: 30, position: 'absolute', left: 10 }} source={require('../assets/images/facebook_logo.png')} />
              <Text style={{ fontSize: 14, fontWeight: '600', color: 'white' }}>Đăng ký với Facebook</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.googleButton} onPress={() => {
              navigation.replace('HomeTabs')
              Keyboard.dismiss()
            }}>
              <Image style={{ height: 30, width: 30, position: 'absolute', left: 10 }} source={require('../assets/images/google_logo.png')} />
              <Text style={{ fontSize: 14, fontWeight: '600', color: colors.primary }}>Đăng ký với Google</Text>
            </TouchableOpacity>
          </View>

          <View style={{ height: "5%" }} />

          {/* Change SignUp screen */}
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            <Text style={{ color: colors.primary, fontSize: 14 }}>Đã có tài khoản? </Text>
            <TouchableOpacity onPress={() => {
              setSignUp('login')
            }}>
              <Text style={{ fontSize: 14, textDecorationLine: 'underline', fontWeight: '500', color: colors.secondary }}>Đăng nhập ngay</Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : null}
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.primary
  },

  header: {
    flex: 25,
    backgroundColor: colors.primary,
    width: '100%',
  },

  body: {
    flex: 75,
    backgroundColor: 'white',
    width: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20
  },

  welcome: {
    color: 'white',
    fontSize: 40,
    fontWeight: '700',

  },

  bodyHeader: {
    marginTop: 25,
    marginHorizontal: 20,
    marginBottom: 30
  },

  bodyTitle: {
    color: colors.secondary,
    fontSize: 26,
    fontWeight: '500'
  },

  inputTitle: {
    color: colors.secondary,
    fontSize: 14
  },

  inputArea: {
    width: '100%',
    borderRadius: 15,
    borderWidth: 2,
    borderColor: colors.secondary,
    paddingHorizontal: 10,
    color: colors.secondary,
    fontSize: 15,
    fontWeight: '500',
    paddingLeft: 40,
    paddingRight: 60
  },

  subBodyTitle: {
    color: colors.secondary,
    fontSize: 14,
    fontWeight: '500'
  },

  hidePasswordStyle: {
    height: 50,
    width: 50,
    position: 'absolute',
    right: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  hidePassButton: {
    fontSize: 20,
    color: colors.secondary
  },

  loginButton: {
    height: 50,
    width: "80%",
    backgroundColor: colors.primary,
    borderRadius: 8,
    borderColor: colors.secondary,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  facebookButton: {
    height: 50,
    width: "80%",
    backgroundColor: colors.facebook,
    borderRadius: 8,
    borderColor: colors.secondary,
    borderWidth: 0,
    alignItems: 'center',
    justifyContent: 'center'
  },

  googleButton: {
    height: 50,
    width: "80%",
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: colors.secondary,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})