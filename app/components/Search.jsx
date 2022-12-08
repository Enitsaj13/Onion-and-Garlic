/* <-- dependencies --> */
import { useContext } from 'react'
import { View, TextInput, TouchableOpacity, Text } from 'react-native'
import Icon from 'react-native-vector-icons/EvilIcons'
import IconBadge from 'react-native-icon-badge';

/* <-- theme and cart context --> */
import ThemeContext from 'theme/ThemeContext'
import { CartContext } from "hooks/CartContext";


/* <-- styles --> */
import styles from 'styles/home'

const Header = ({ onSearch, navigation }) => {
  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  /* <-- items context --> */
  const { getItemsCount } = useContext(CartContext);

  return (
    <>
      <View style={styles.sortingContainer}>
        <View
          style={[styles.inputContainer, { backgroundColor: THEME.border }]}
        >
        <Icon name='search' size={30} color={`${THEME.placeholder}`} />

          <TextInput
            style={[styles.input, { color: THEME.text }]}
            placeholder='Search'
            placeholderTextColor={`${THEME.placeholder}`}
            onChangeText={
              (value) =>
                onSearch(
                  value.replace(/[\s.,/#!$%^&*;:{}=\-_`~()]/g, '')
                ) /* <-- remove all unnecessary type like white spaces --> */
            }
          />
        </View>

        <IconBadge
          MainElement={
            <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('Payment')}
          >
            <View style={{ opacity: 0, flex: 1 }} />
  
            <View style={[styles.sortBtn, { backgroundColor: THEME.border }]}>
              <Icon name='cart' size={30} 
              color={THEME.text} />
            </View>
          </TouchableOpacity>
          }
          BadgeElement={
            <Text style={{color:'#FFFFFF'}}>{
              getItemsCount()
            }</Text>
          }
          IconBadgeStyle={
            {width:20,
            height:20,
            position: 'absolute',
            top: -12,
            backgroundColor: 'red'}
          }
          />

       
      </View>
    </>
  )
}

export default Header
