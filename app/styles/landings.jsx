import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from 'theme'

const styles = StyleSheet.create({
  textContainer: {
    flex: 1,
    paddingHorizontal: 50,
    justifyContent: 'space-between',
    paddingBottom: 40,
  },
  titleContainer: {
    top: 80
  },
  indicatorContainer: {
    height: 50,
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
  },
  currentIndicator: {
    height: 12,
    width: 30,
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    marginHorizontal: 5,
  },
  indicator: {
    height: 12,
    width: 12,
    borderRadius: 6,
    backgroundColor: COLORS.grey,
    marginHorizontal: 5,
  },
  landingImage: {
    width: '100%',
    resizeMode: 'contain',
    height: '100%',
    marginTop: 50
  },
  landingTitle: {
    fontSize: SIZES.xxl,
    color: COLORS.dark,
    textAlign: 'center',
    fontWeight: '900',
  },
  landingSubtitle: {
    marginTop: 20,
    fontSize: SIZES.medium,
    textAlign: 'center',
    color: COLORS.grey,
  },
  
})

export default styles
