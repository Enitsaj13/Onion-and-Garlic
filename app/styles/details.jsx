import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from 'theme'

const style = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    backgroundColor: COLORS.white,
  },
  details: {
    paddingHorizontal: SIZES.padding,
    paddingTop: 20,
    paddingBottom: 60,
    backgroundColor: COLORS.white,
    marginBottom: 20,
  },
  iconContainer: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.white,
    borderWidth: 1,
    padding: 6,
    borderRadius: 10,
    bottom: 2,
    width: 40,
  },
  detailsText: {
    marginTop: 10,
    lineHeight: 25,
    fontSize: SIZES.name,
    color: COLORS.dark,
  },

  itemInstructions: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    marginBottom: 20,
    marginTop: 25,
  },

  itemIngredients: {
    fontSize: SIZES.medium,
    color: COLORS.dark,
    marginBottom: 20,
    fontWeight: '600',
  },

  heart: {
    fontSize: 24,
    color: COLORS.primary,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    paddingHorizontal: 25,
    shadowColor: COLORS.font,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,


  },
  img: {
    height: 240,
    width: 300,
  },
})

export default style
