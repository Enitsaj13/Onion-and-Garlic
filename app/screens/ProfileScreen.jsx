/* <-- dependencies --> */
import { useContext } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'


/* <-- auth --> */
import auth from '@react-native-firebase/auth';

/* <-- components --> */
import FavoriteList from 'components/FavoriteList'

/* <-- constants --> */
import { CAROUSELData } from 'constants'

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'
import { COLORS, SIZES } from 'theme'

/* <-- styles --> */
import styles from 'styles/profile'

const ProfileScreen = ({ navigation }) => {

  /* <-- theme state --> */
  const THEME = useContext(ThemeContext)

  /* <-- user --> */
  const user = auth().currentUser

  return (
    <SafeAreaView style={{ backgroundColor: THEME.background, flex: 1 }}>

      <View style={[styles.header, { backgroundColor: THEME.background }]}>

        <Text style={[styles.headerText, { color: THEME.text }]}>Profile</Text>

        <TouchableOpacity 
        activeOpacity={0.8} onPress={() => navigation.navigate('Settings')}>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            borderRadius: 10,
            left: 10,

          }}>
          <Icon name='dots-three-vertical' size={18} 
          color={THEME.text} />
          </View>
           
        </TouchableOpacity>
        
      </View>

      <View

        style={[styles.profileContainer, { backgroundColor: THEME.card }]}>
        <TouchableOpacity activeOpacity={0.8}>
          <Image
            source={require('assets/images/user/profile.jpeg')}
            style={styles.profileImg}
          />
        </TouchableOpacity>
        <View style={{ marginLeft: 20 }}>

          <Text style={[styles.profileName, { color: THEME.text }]}>
            {/* display the user name */}
            {user?.displayName || 'OnionGarlic User'}
          </Text>
          <Text style={[styles.profileText, { color: THEME.text }]}>
            {/* display the user email */}
            {user?.email || 'oniongarlic@example.com'}
          </Text>
        </View>

      </View>

      <View style={styles.favoriteContainer}>

        <Text style={[ styles.headerText, { color: THEME.text, fontSize: SIZES.medium }]}>
          My Favorites
        </Text>
        <Pressable onPress={() => navigation.navigate('FavoriteScreen')}>
          <Text style={[styles.viewText, { color: THEME.text }]}>View all</Text>
        </Pressable>

      </View>

      <View style={styles.profileCard}>

        <FlatList
          data={CAROUSELData}
          renderItem={({ item }) => (
            <FavoriteList item={item} navigation={navigation} />
          )}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 80 }}
          numColumns={2}
        />

      </View>

    </SafeAreaView>
  )
}

export default ProfileScreen
