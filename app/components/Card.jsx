/* <-- dependencies --> */
import { useContext, useState, useEffect } from 'react'
import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import AddIcon from 'react-native-vector-icons/Ionicons'
import FastImage from 'react-native-fast-image'
import { CartContext } from "hooks/CartContext";

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { COLORS, SIZES } from 'theme'

/* <-- styles --> */
import styles from 'styles/menu'

const Card = ({ food, navigation }) => {

   /* <-- badge state --> */
   const [badge, setBadge] = useState(0)

   const badgeCount = () => {
     setBadge(badge + 1)
   }
  
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)
  return (
    <View style={[styles.card, { backgroundColor: THEME.card }]}>
      <View style={{ alignItems: 'center', top: -40 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('DetailsScreen', food)}
        >
          <FastImage 
          onProgress={e => console.log(e.nativeEvent)}
          priority={FastImage.priority.normal}
          resizeMode={FastImage.resizeMode.contain}
          source={food.image}
          style={styles.image} />
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: -20, marginLeft: 10, flex: 1, paddingBottom: 10 }}>
        <Text 
        style={{ fontSize: SIZES.medium, fontWeight: '600',  color: `${THEME.text}`}}>
          {food.name}
        </Text>
        <View style={{ marginTop: 15 }}>
          <Text 
          style={{ fontSize: SIZES.font, color: COLORS.grey }}>
            {food.time}
          </Text>
          <Text 
          style={{ fontSize: SIZES.font, color: COLORS.grey }}>
            {food.capacity}
          </Text>
        </View>

        <View style={{ flexDirection: 'row', marginTop: 15 }}>
          <Text
            style={{
              fontSize: SIZES.name,
              color: `${THEME.text}`
            }}
          >
            ₱
          </Text>
          <Text
            style={{
              fontSize: SIZES.large,
              color: `${THEME.text}`
            }}
          >
            {food.price}
          </Text>
          <TouchableOpacity 
          onPress={() => badgeCount()}
          style={{ 
            backgroundColor: COLORS.primary,
            borderRadius: 50,
            height: 30,
            width: 30,
            marginLeft: 70
          }}>
            <AddIcon
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              marginTop: 4,
              marginLeft: 2,

            }}
            name="add" size={20} color={COLORS.white} />
            </TouchableOpacity>
            </View>
      </View>
    </View>
  )
}

export default Card








