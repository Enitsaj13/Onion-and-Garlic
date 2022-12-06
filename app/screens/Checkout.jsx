/* <-- dependencies --> */
import { useContext } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { SIZES, FONTS, COLORS } from 'theme'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- component --> */
import { BackButton } from 'components/BackButton'

/* <-- styles --> */
import styles from 'styles/favorite'

const FaveScreen = ({ navigation }) => {
  /* <-- theme state--> */
  const THEME = useContext(ThemeContext)

  return (
    <SafeAreaView style={{ backgroundColor: THEME.background, flex: 1 }}>
      <View style={styles.header}>
        {/* <-- invoking the back button component -->  */}
        <BackButton navigation={navigation} />
        {/* <---------------------------------------->  */}
     </View>
     
        {/* card */}
        <View style={{
            backgroundColor: `${THEME.border}`,
            width: 300,
            height: 390,
            borderRadius: 10,
            borderWidth: 1,
            borderColor: `${THEME.border}`,
            marginTop: 20,
            alignSelf: 'center',
            
            }}>
        
        <View
        style={{ 
            alignSelf: 'center',
            top: -50,
            backgroundColor: COLORS.greenLight,
            borderRadius: 60,
            padding: 6,
            
            }} >
        
        <Icon name="checkmark-circle" size={100} 
        style={{ 
            color: COLORS.green,
            alignSelf: 'center',
            left: 3,
        
        }} />

        </View>

        <View style={{
            top: -40,
            alignSelf: 'center',
            }}>
            <Text style={{
                fontSize: SIZES.name,
                color: `${THEME.text}`,
                textAlign: 'center',
                marginBottom: 10,
                }}>Great!</Text>
            <Text style={{
                fontSize: SIZES.large,
                color: `${THEME.text}`,
                }}>Payment Success</Text>
            </View>


        <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 20,
           
        }}>

        <Text
        style={{
            fontSize: SIZES.name,
            color: `${THEME.text}`,
            top: -30,
            left: 10
        }}>
            Payment Method
        </Text>

        <Text
        style={{
            fontSize: SIZES.name,
            color: `${THEME.text}`,
            top: -30,
            right: 10 }}
        > Credit Card
        </Text>
  
        </View>

        <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
           
        }}>

        <Text
        style={{
            fontSize: SIZES.name,
            color: `${THEME.text}`,
            top: -30,
            left: 10
        }}>
            Total Item
        </Text>

        <Text
        style={{
            fontSize: SIZES.name,
            color: `${THEME.text}`,
            top: -30,
            right: 10 }}
        > ₱ 290.00
        </Text>
  
        </View>

        <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 20,
           
        }}>

        <Text
        style={{
            fontSize: SIZES.name,
            color: `${THEME.text}`,
            top: -30,
            left: 10
        }}>
            Delivery Fee
        </Text>

        <Text
        style={{
            fontSize: SIZES.name,
            color: `${THEME.text}`,
            top: -30,
            right: 10 }}
        > ₱ 150.00
        </Text>
  
        </View>

        <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 20,
            marginVertical: 40,
           
        }}>
        <Text
        style={{
            fontSize: SIZES.name,
            color: `${THEME.text}`,
            top: -30,
            left: 10
        }}>
            Total Pay :
        </Text>

        <Text
        style={{
            fontSize: SIZES.name,
            color: `${THEME.text}`,
            top: -30,
            right: 10 }}
        > ₱ 440.00
        </Text>

        </View>

        </View>


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
                Thank you for your purchase!
            </Text>

            <TouchableOpacity
        onPress={() => navigation.navigate('Feedback')}
            
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
                   Give Feedback
                </Text>
            </TouchableOpacity>


            </View>


    </SafeAreaView>
  )
}

export default FaveScreen
