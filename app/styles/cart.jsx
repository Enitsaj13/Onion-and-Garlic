import { StyleSheet } from 'react-native'
import { SIZES, COLORS } from 'theme'


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  btnContainer: {
    marginRight: 10 
  },
  cartContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: SIZES.padding,
  },
  cartTitleView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  cartTitle: {
    fontSize: SIZES.xl,
    fontWeight: '700',
    marginLeft: 10,
  },
  productView: {
    display: 'flex',
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 8,
    borderRadius: 10,
    shadowColor: COLORS.dark,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 1,
    elevation: 5,
    marginTop: 14,
  },
  productImage: {
    width: 60,
    height: 60,
    alignSelf: 'center',
  },
  productMiddleView: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  productTitle: {
    fontSize: SIZES.name,
    fontWeight: '600',
  },
  productCompanyTitle: {
    fontSize: SIZES.font,
    fontWeight: '300',
  },
  productRightView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  productItemCounterView: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 4,
  },
  counterValue: {
    fontSize: SIZES.name,
    fontWeight: '600',
  },
  productPriceText: {
    alignSelf: 'flex-end',
    paddingRight: 10,
    fontSize: SIZES.name,
    fontWeight: '600',
  },
  toggleCounterButton: {
    paddingHorizontal: 10,
  },
  // couponInputView: {
  //   width: '100%',
  //   height: 50,
  //   borderWidth: 1,
  //   marginTop: 20,
  //   display: 'flex',
  //   flexDirection: 'row',
  //   borderRadius: 12,
  //   shadowColor: COLORS.dark,
  //   shadowOffset: {
  //     width: 0,
  //     height: 1,
  //   },
  //   shadowOpacity: 0.1,
  //   elevation: 5,
    
  // },
  // couponInput: {
  //   flex: 1,
  //   fontSize: SIZES.name,
  //   paddingHorizontal: 10,
  // },
  // couponButton: {
  //   backgroundColor: COLORS.primary,
  //   paddingHorizontal: 12,
  //   justifyContent: 'center',
  //   borderBottomEndRadius: 10,
  //   borderTopEndRadius: 10,
  // },
  // couponButtonText: {
  //   color: '#fff',
  //   fontSize: SIZES.name,
  // },
  subtotalView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 0.2,
  },
  subtotalText: {
    fontSize: SIZES.name,
    fontWeight: '600',
  },
  subtotalPrice: {
    fontSize: SIZES.name,
    fontWeight: '300',
  },
  shippingView: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 0.2,
  },
  shippingItemsView: {
    marginVertical: 10    
  },
  shippingText: {
    fontSize: SIZES.name,
    fontWeight: '600',
  },
  shippingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  shippingItemText: {
    fontSize: 16,
    paddingVertical: 4,
    fontWeight: '300',
  },
  totalView: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 20,
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 0.2,
  },
  totalText: {
    fontSize: SIZES.name,
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: SIZES.name,
    fontWeight: '300',
  },
  checkoutButton: {
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    alignItems: 'center',
    borderRadius: 20,
    marginTop: 20,
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '700',
  },
  emptyCartView: {
    flex: 1,
    marginTop: 140,
  },
  emptyCartViewText: {
    fontSize: 20,
    fontWeight: '300',
    alignSelf: 'center',
  },
  // payment
  paymentText: {
    fontSize: SIZES.name,
    fontWeight: '600',
    marginTop: 5,
  },
});

export default styles