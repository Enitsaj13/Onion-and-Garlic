/* <-- dependencies --> */
import { useContext, useMemo, memo } from 'react'
import { SafeAreaView, View, Text, FlatList } from 'react-native'

/* <-- constants --> */
import { CAROUSELData } from 'constants'

import { SIZES, COLORS } from 'theme'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- component --> */
import FavoriteItem from 'components/FavoriteItem'
import { PrimaryButton } from 'components/LandingButton'

/* <-- styles --> */
import styles from 'styles/favorite'

const FaveScreen = ({ navigation }) => {
  /* <-- theme state--> */
  const THEME = useContext(ThemeContext)

  /* <-- useCallback to prevent re-rendering --> */
  const renderItem = useMemo(() => ({ item }) => <FavoriteItem item={item}
  navigation={navigation} />, [])

  return (
    <SafeAreaView style={{ backgroundColor: THEME.background, flex: 1 }}>
      <View style={styles.header}>

        <Text style={[styles.favBack, { color: `${THEME.text}` }]}>
          My Favorites
        </Text>
      </View>

      <FlatList
        updateCellsBatchingPeriod={10}
        maxToRenderPerBatch={10}
        initialNumToRender={4}
        data={CAROUSELData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={{ paddingBottom: 80 }}
      />


       {/* total */}
       {/* <View style={{
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: 30, 
          marginLeft: 50,
        }}>
          <Text style={{
            fontSize: SIZES.medium,
            color: `${THEME.textMoney}`,
            marginBottom: 10,
            marginTop: 10,
          }}>
            Item total: ₱ 1,670
          </Text>

          <Text
          style={{
            fontSize: SIZES.medium,
            color: `${THEME.textMoney}`,
          }}>
          
            Delivery: ₱ 120
          </Text>

          <Text
          style={{
            fontSize: SIZES.medium,
            color: `${THEME.text}`,
            marginTop: 30,

          }}>
            Total: ₱ 1,790
          </Text>


        </View>

      <View style={{
          marginHorizontal: 20,
          
      }}>
        <PrimaryButton title="Checkout" 
        onPress={() => navigation.navigate('Feedback')}
        />
       
      </View> */}
    </SafeAreaView>
  )
}

export default memo(FaveScreen)


