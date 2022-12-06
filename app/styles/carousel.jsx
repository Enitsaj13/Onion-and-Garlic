import { StyleSheet } from 'react-native'

import { COLORS, SIZES } from 'theme'

const styles = StyleSheet.create({
  imageContainer: {
    borderRadius: 18,
    overflow: 'hidden',
    height: 450,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 15 / 14,
    left: 80,
    top: 30,
  },
  titleContainer: {
    position: 'absolute',
    bottom: 200,
    height: 110,
    width: 240,
    marginHorizontal: 18,
    backgroundColor: COLORS.dark,
    opacity: 0.5,
    borderRadius: 20,
    padding: 8,
  },

  title: {
    color: COLORS.white,
    fontSize: SIZES.xl,
    letterSpacing: 0.8,
    top: 12,
    left: 4,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    bottom: 50,
    height: 50,
    width: 240,
    marginHorizontal: 40,
    opacity: 0.5,
    bottom: 110,
    right: 34,
  },
  textInfo: {
    fontSize: SIZES.font,
    letterSpacing: 0.8,
    left: 6,
  },
  icon: {
    left: 15,
  },
})

export default styles
