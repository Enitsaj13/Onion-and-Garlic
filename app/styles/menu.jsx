import { StyleSheet } from 'react-native'
import { COLORS } from 'theme'
import { Dimensions } from 'react-native'

/* <-- dimensions --> */
const { width } = Dimensions.get('screen')
const cardWidth = width / 2 - 20

const style = StyleSheet.create({
  categoriesListContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flex: 1,
    alignItems: 'space-between',
    justifyContent: 'space-between',
  },
  categoryBtn: {
    height: 40,
    width: 100,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
    textAlign: 'center',
  },

  card: {
    padding: 10,
    width: cardWidth,
    marginHorizontal: 10,
    paddingVertical: 10,
    marginTop: 60,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: COLORS.white,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    elevation: 5,
    marginTop: 20,
  },

  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 14 / 12,
    top: 24,
  },

  /* <-- category --> */
  categoryContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    top: 45,
  },
  listTab: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  btnTab: {
    padding: 8,
    justifyContent: 'center',
    width: 86,
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: 1,
    backgroundColor: 'transparent',
  },

  btnTabActive: {
    backgroundColor: COLORS.primary,
  },
})

export default style
