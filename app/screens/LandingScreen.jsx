/* <-- dependencies --> */
import { useContext, useState } from 'react'
import { Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


/* <-- components --> */
import { PrimaryButton } from 'components/LandingButton'

/* <-- theme--> */
import ThemeContext from 'theme/ThemeContext'

/* <-- styles --> */
import styles from 'styles/landings'





const LandingScreen = ({ navigation, item }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  /* <-- press login --> */
  const Press = () => {
    navigation.navigate('Login')
  }

  /* <-- slider state --> */
  const [showRealApp, setShowRealApp] = useState(false)


  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: THEME.background }}>
      <View style={{ height: 300 }}>
        <Image
          style={styles.landingImage}
          source={require('assets/images/landing/logo1.png')}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={[styles.landingTitle, { color: THEME.text }]}>
            Onion and Garlic
          </Text>
          <Text style={[styles.landingSubtitle, { color: THEME.text }]}>
            We provide the best delivery service for your Filipino food cravings.
            {/* We ensure the best quality of our food from every detail to its retail. */}
            {/* We offer impresive quality taste, serve hot at your door step and best
            service to fulfill your expectations. */}
          </Text>
        </View>
        <View style={styles.indicatorContainer}>
          <View s={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.indicator} />
          <View style={styles.currentIndicator} />
        </View>
        <PrimaryButton onPress={Press} title='Get Started' />
      </View>
    </SafeAreaView>
  )
}

export default LandingScreen
