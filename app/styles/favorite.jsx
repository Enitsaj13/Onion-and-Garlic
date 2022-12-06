import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from 'theme'

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  faveScreen: {
    elevation: 15,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
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
    height: 100,
    width: 100,
  },
  favName: {
    fontSize: SIZES.name,
  },
  favNameContainer: {
    height: 100,
    marginLeft: 10,
    paddingVertical: 20,
    flex: 1,
    top: 10,
  },
  favBack: {
    fontSize: SIZES.large,
    fontWeight: '600',
    paddingLeft: 10,
  },
})

export default style
