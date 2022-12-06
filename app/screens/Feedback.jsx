/* <-- dependencies --> */
import { useContext } from 'react'
import { SafeAreaView, View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'

import { SIZES, COLORS } from 'theme'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- component --> */
import { BackButton } from 'components/BackButton'

/* <-- styles --> */
import styles from 'styles/favorite'

const Feedback = ({ navigation }) => {
  /* <-- theme state--> */
  const THEME = useContext(ThemeContext)


  const Feedback = () => {
    Alert.alert('Thank you for your feedback!')
    navigation.navigate('BottomNavigator')
    }


  return (
    <SafeAreaView style={{ backgroundColor: THEME.background, flex: 1 }}>
      <View style={styles.header}>
        {/* <-- invoking the back button component -->  */}
        <BackButton navigation={navigation} />
        {/* <---------------------------------------->  */}
     </View>

     <View>
        
        <View style={{
            position: 'absolute',
            left: 70,
            top: 16,
        }}>
        <Icon name="checkmark-circle" size={30} color={COLORS.blue} />
        </View>

        <Text
        style={{
            fontSize: SIZES.large,
            fontWeight: 'bold',
            color: `${THEME.text}`,
            textAlign: 'center',
            marginTop: 20,
            
        }} >
            
        
            Order Completed
        </Text>
        <Text
        style={{
            fontSize: SIZES.font,
            color: `${THEME.text}`,
            textAlign: 'center',
            marginTop: 20,
        }}
        >
            Please give us your feedback!
        </Text>
     </View>

     

     {/* <Image source={require('assets/images/user/celebration.webp')} style={{
            width: 340,
            height: 140,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 60,
     }} />

     <Image source={require('assets/images/user/jia.jpeg')} style={{
            width: 140,
            height: 140,
            borderRadius: 10,
            alignSelf: 'center',
            position: 'absolute',
            top: 275,
            
        }} /> */}

     <TextInput 
        style={{
            width: 300,
            height: 160,
            backgroundColor: `${THEME.border}`,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 60,
            padding: 20,
            paddingTop: 10,
            color: `${THEME.text}`,

        }}
        placeholder="Write your feedback here..."
        placeholderTextColor={`${THEME.text}`}
        multiline={true}
        numberOfLines={4}
        />

        <TouchableOpacity 
        style={{
            width: 300,
            height: 50,
            backgroundColor: COLORS.blue,
            borderRadius: 10,
            alignSelf: 'center',
            marginTop: 40,
            justifyContent: 'center',
            alignItems: 'center',
        }}

        onPress={Feedback}
        >
            <Text
            style={{
                fontSize: SIZES.name,
                color: COLORS.white,
            }}
            >
                Send Feedback
            </Text>


        </TouchableOpacity>

            <View
            style={{
                flexDirection: 'row',
                alignSelf: 'center',
                position: 'absolute',
                bottom: 40,
            }}
            
            >
        <Text
            style={{
                fontSize: SIZES.font,
                color: `${THEME.text}`,
                textAlign: 'center',
            }}
            >
                Don't want to give feedback? 
            </Text>

            <TouchableOpacity
        onPress={() => navigation.navigate('BottomNavigator')}
            
            >
                <Text
                style={{
                    fontSize: SIZES.font,
                    color: COLORS.blue,
                    textAlign: 'center',
                    paddingHorizontal: 5,
                    fontWeight: 'bold',
                }}
                >
                    Skip
                </Text>
            </TouchableOpacity>


            </View>

 


    </SafeAreaView>
  )
}

export default Feedback
