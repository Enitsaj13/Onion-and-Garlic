/* <-- dependencies --> */
import { useContext } from 'react'
import { View, SafeAreaView, Text, ScrollView } from 'react-native'
import YouTubePlayer from 'react-native-youtube-iframe'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

/* <-- component --> */
import { BackButton } from 'components/BackButton'

/* <-- styles --> */
import styles from 'styles/details'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { SIZES } from 'theme'

const Video = ({ navigation, route }) => {
  /* <-- theme state--> */
  const THEME = useContext(ThemeContext)

  const item = route.params
  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: THEME.background,
        }}
      >
        <View style={[styles.header, { backgroundColor: THEME.background }]}>
          {/* <-- invoking the back button component -->  */}
          <BackButton navigation={navigation} />

          <Text style={{ fontSize: SIZES.medium, color: `${THEME.text}` }}>
            Video
          </Text>
          <Icon name='dots-vertical' size={25} color={`${THEME.text}`} />
        </View>
        <View style={{ paddingTop: 20, paddingHorizontal: 20, borderRadius: 10}}>
          <YouTubePlayer height={300} play={true} videoId={item.video} />
        </View>

        <View style={{ flex: 1, paddingHorizontal: 20, bottom: 60 }}>
          <Text
            style={{
              fontSize: SIZES.large,
              color: `${THEME.text}`,
              textAlign: 'center',
              marginBottom: 20 }} >
            How to Cook {item.name}
          </Text>
          
          <ScrollView showsVerticalScrollIndicator={true}>
            <Text
              style={{
                fontSize: SIZES.name,
                color: `${THEME.text}`,
                textAlign: 'justify',
                letterSpacing: 0.8,
              }}
            >
              {item.instructions}
            </Text>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  )
}
export default Video
