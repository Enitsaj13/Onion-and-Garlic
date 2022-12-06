/* <-- dependencies --> */
import { useContext, memo } from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- styles --> */
import styles from 'styles/favorite-list'

const FavoriteList = ({ item, navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  return (
    <View style={[styles.faveScreen, { backgroundColor: `${THEME.card}` }]}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate('DetailsScreen', item)}
      >
        <FastImage 
         onProgress={e => console.log(e.nativeEvent)}
         priority={FastImage.priority.normal}
         resizeMode={FastImage.resizeMode.contain}
        source={item.image} style={styles.img} />
      </TouchableOpacity>
      <View style={styles.favNameContainer}>
        <Text style={[styles.favName, { color: `${THEME.text}` }]}>
          {item.name}
        </Text>
        <View style={styles.favVersionContainer}>
          <Text style={styles.favVersion}>{item.time}</Text>
          <Text style={styles.favVersion}>{item.capacity}</Text>
        </View>
      </View>
    </View>
  )
}

export default memo(FavoriteList)
