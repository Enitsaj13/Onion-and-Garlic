/* <-- dependencies --> */
import { useContext } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

/* <-- styles --> */
import styles from 'styles/menu'

/* <-- constants --> */
import { CATEGORYData } from 'constants'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { COLORS, SIZES } from 'theme'

const CustomTab = ({ category, setCategoryFilter }) => {
  /* <-- state theme --> */
  const THEME = useContext(ThemeContext)

  return (
    <View style={styles.listTab}>
      {CATEGORYData.map((item) => (
        <TouchableOpacity
          // style={[
          //   styles.btnTab,
          //   category === item.category && styles.btnTabActive,
          // ]}
          style={[
            styles.btnTab,
            category === item.category && {
              backgroundColor: THEME.background,
              borderBottomColor: COLORS.primary,
              borderBottomWidth: 2.5
            },
          ]}


          key={item.id}
          onPress={() => setCategoryFilter(item.category)}
        >
          <Text
            style={{
              color: `${category === item.category ? THEME.text : THEME.tab}`,
              fontSize: SIZES.font,
            }}
          >
            {item.category}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default CustomTab
