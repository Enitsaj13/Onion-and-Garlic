/* <-- dependencies --> */
import { useContext, useState, memo } from 'react'
import { View, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SIZES, COLORS } from 'theme'
import FastImage from 'react-native-fast-image'

import { SwipeListView } from 'react-native-swipe-list-view'

/* <-- constants --> */
import { CAROUSELData } from 'constants'

import MinusIcon from 'react-native-vector-icons/Ionicons'
import AddIcon from 'react-native-vector-icons/MaterialIcons'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- styles --> */
import styles from 'styles/favorite'

const FavoriteItem = ({ item, navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  /* <-- state --> */
  const [quantity, setQuantity] = useState(1)

  const handleAdd = () => {
    setQuantity(quantity + 1)
  }

  const handleMinus = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }
  

  return (
    <>
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
       <Text 
       style={{
        fontSize: SIZES.medium,
        fontWeight: 'bold',
        color: `${THEME.text}`
      }}>
          {item.price}
       </Text>



       {/* add and minus for cart */}

        {/* <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 100,
          marginTop: 10,
          // backgroundColor: `${THEME.background}`,
          // borderWidth: 0.2,
          borderColor: COLORS.grey,
          borderRadius: 20,
          padding: 7,
          position: 'absolute',
          right: 0,
          bottom: 10


        }}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: `${THEME.background}`,
              borderWidth: 0.2,
              borderColor: COLORS.grey,
              borderRadius: 20,
              padding: 4,
            }}  
            onPress={handleMinus}
          >
            <MinusIcon name="remove" size={16} color={COLORS.grey} />
          </TouchableOpacity>
          <Text 
          style={[styles.cartText, { color: `${THEME.text}` }]}>
            {quantity}
            </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              backgroundColor: `${THEME.background}`,
              borderWidth: 0.2,
              borderColor: COLORS.grey,
              borderRadius: 20,
              padding: 4,
            }}
            onPress={handleAdd}
          >
            <AddIcon name="add" size={16} color={THEME.text} />
          </TouchableOpacity>

          </View> */}
      </View>

    </View>

    </>
  )
}

export default memo(FavoriteItem)
