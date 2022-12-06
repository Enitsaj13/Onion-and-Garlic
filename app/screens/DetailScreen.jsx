/* <-- dependencies --> */
import { useContext } from 'react'
import { SafeAreaView, View, Text, Alert } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { SIZES } from 'theme'

/* <-- components --> */
import { SecondaryButton } from 'components/LandingButton'
import { BackButton } from 'components/BackButton'
import { ToastMessage } from 'components/Toast'

/* <-- styles --> */
import styles from 'styles/details'

const DetailsScreen = ({ navigation, route }) => {
  const item = route.params
  /* <-- theme state--> */
  const THEME = useContext(ThemeContext)

  return (
    <SafeAreaView style={{ backgroundColor: `${THEME.background}` }}>
      <View style={[styles.header, { backgroundColor: THEME.background }]}>
        {/* <-- invoking the back button component -->  */}
        <BackButton navigation={navigation} />

        <Text
          style={{
            fontSize: SIZES.medium,
            fontWeight: 'bold',
            color: `${THEME.text}` }}>
          {item.name}
        </Text>
        <ToastMessage />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={[styles.imageContainer, { backgroundColor: THEME.border }]}>
          <FastImage 
          resizeMode={FastImage.resizeMode.contain}
          source={item.image} style={styles.img} />
        </View>

        {/* description */}
        <View style={{ padding: SIZES.padding }}>
          <Text
            style={{
              fontSize: SIZES.medium,
              fontWeight: '600',
              marginBottom: 20,
              color: THEME.text }} >
            Description
          </Text>
          <Text style={{
              fontSize: SIZES.name,
              letterSpacing: 1,
              textAlign: 'justify',
              lineHeight: 22,
              color: `${THEME.text}` }} >
            {item.description}
          </Text>
        </View>

        <View style={[styles.details, { backgroundColor: THEME.background }]}>
          <Text style={[styles.itemIngredients, { color: THEME.text }]}>
            Ingredients:
          </Text>

          <Text style={[styles.detailsText, { color: THEME.text }]}>
            {item.ingredients}
          </Text>

    
          <View style={{ marginTop: 20, marginBottom: 20 }}>
            <SecondaryButton
              title='Add to cart'
              onPress={() => Alert.alert('Added to cart')}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DetailsScreen
