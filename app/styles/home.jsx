import { StyleSheet } from 'react-native'
import { COLORS, SIZES } from 'theme'

const styles = StyleSheet.create({
  mainSection: {
    flex: 1,
    backgroundColor: COLORS.white,
  },

  header: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },

  user: {
    fontSize: SIZES.xl,
    marginLeft: 10,
    fontWeight: 'bold',
  },

  greet: {
    fontSize: SIZES.xl,
  },

  asking: {
    marginTop: 5,
    fontSize: SIZES.medium,
    color: COLORS.grey,
  },

  profile: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  input: {
    flex: 1,
    fontSize: SIZES.name,
    padding: 4,
    paddingHorizontal: 10,
    color: COLORS.dark,
  },
  sortingContainer: {
    marginTop: 40,
    flexDirection: 'row',
    paddingHorizontal: 20,
  },

  inputContainer: {
    flex: 1,
    height: 54,
    borderRadius: 30,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 15,
    width: 200,
    bottom: 10,
  },

  sortBtn: {
    width: 54,
    height: 54,
    marginLeft: 10,
    backgroundColor: COLORS.light,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
  },
  recommendationContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 4,
    marginRight: 4,
  },
  recommendationTitle: {
    fontSize: SIZES.large,
    fontWeight: 'bold',
    color: COLORS.dark,
    letterSpacing: 0.7,
  },
  viewAll: {
    fontSize: 14,
    color: COLORS.grey,
    top: 3,
    letterSpacing: 0.8,
  },

  // Modal
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    left: 100,
    bottom: 132,
  },
  modalView: {
    margin: 20,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 200,
    backgroundColor: 'transparent',
  },
})

export default styles
