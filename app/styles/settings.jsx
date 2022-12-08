import { StyleSheet } from 'react-native'

import { SIZES } from 'theme'

const styles = StyleSheet.create({
  accountText: {
    fontSize: SIZES.medium,
    fontWeight: '500',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  accountContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 40,
    top: 30,
  },
  accHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  dots: {
    top: 0,
  },

  dotsContainer: {
    borderRadius: 10,
    padding: 2,
    top: 8,
  },

  accountImg: {
    width: 60,
    height: 60,
    borderRadius: 50,
    alignSelf: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  accountTextContainer: {
    top: 26,
    marginHorizontal: 20,
  },
  accountName: {
    fontSize: SIZES.name,
  },
  accountSubName: {
    fontSize: SIZES.font,
    textAlign: 'left',
    top: 5,
  },
  settingsText: {
    fontSize: SIZES.name,
    fontSize: SIZES.medium,
    paddingHorizontal: 20,
    paddingTop: 20,
    marginBottom: 8,
    fontWeight: '500',
  },
  settingsContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  languageContainer: {
    borderRadius: 40,
    padding: 14,
  },
  language: {
    fontSize: SIZES.font,
    textAlign: 'left',
    marginBottom: 20,
    left: 80,
    top: 15,
  },
  arrow: {
    top: 2,
    borderRadius: 10,
    padding: 10,
    position: 'absolute',
    left: 220,
  },
  notificationContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  iconBell: {
    backgroundColor: '#ecfeff',
    borderRadius: 40,
    padding: 14,
  },
  darkmodeContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  onOff: {
    fontSize: SIZES.font,
    textAlign: 'left',
    marginBottom: 20,
    left: 94,
    top: 15,
  },
  helpContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  logoutContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  textSettings: {
    fontSize: SIZES.name,
    textAlign: 'center',
    marginBottom: 20,
    left: 20,
    top: 13,
  },
  darkMode: {
    backgroundColor: '#f5f3ff',
    borderRadius: 40,
    padding: 14,
  }
})

export default styles
