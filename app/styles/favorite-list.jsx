import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from 'theme'
import { Dimensions } from 'react-native'

/* <-- dimensions --> */
const { width } = Dimensions.get('screen')
const cardWidth = width / 2 - 20

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  faveScreen: {
    padding: 10,
    paddingBottom: 40, 
    paddingHorizontal: 10,
    marginHorizontal: 2,
    width: cardWidth,
    marginBottom: 30,
    marginHorizontal: 10,
    borderRadius: 15,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    elevation: 5,
  },

  btnMinus: {
    top: 3,
  },
  img: {
    width: '100%',
    height: undefined,
    aspectRatio: 14 / 12,
  },
  favName: {
    fontSize: SIZES.name,
  },
  favNameContainer: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
    marginTop: 10,
  },
  favVersionContainer: {
    marginTop: 15,
  },

  favVersion: {
    fontSize: SIZES.font,
    color: COLORS.grey,
  },
  favBack: {
    fontSize: SIZES.medium,
    paddingLeft: 10,
  },
})

export default style
