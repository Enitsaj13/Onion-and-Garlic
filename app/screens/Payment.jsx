/* <-- dependencies --> */
import { useContext, useState, useEffect } from 'react';
import {
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'
import FastImage from 'react-native-fast-image';
import RadioButtonRN from 'radio-buttons-react-native';

/* <-- theme --> */
import ThemeContext from 'theme/ThemeContext'

/* <-- component --> */
import { BackButton } from 'components/BackButton';

/* <-- styles --> */
import styles from 'styles/cart'


const Cart = ({ navigation }) => {

  /* <-- theme state--> */
  const THEME = useContext(ThemeContext)

  const data = [
    {
      id: 1,
      label: 'Normal (₱150)'
     },
  ];

  const payment = [
    {
      id: 1,
      label: 'Cash on Delivery'
    },
    {
      id: 2,
      label: 'Credit Card'
    },
  ];

 
  const [cart, setCart] = useState([
    {
      id: 'PID000101',
      name: 'Lechon',
      company: '5 servings',
      img: require('assets/images/dishes/lechon.png'),
      quantity: 1,
      price: 140,
      perPrice: 140,
    },
    {
      id: 'PID000106',
      name: 'Sinigang',
      company: '4 servings',
      img: require('assets/images/dishes/sinigang.png'),
      quantity: 1,
      price: 150,
      perPrice: 150,
    },
  ]);
  const [shippingMethod, setShippingMethod] = useState('Normal');

  useEffect(() => {
    StatusBar.setBarStyle('light-content', true);
  }, []);

  return (
    <SafeAreaView style={[styles.container, {backgroundColor: `${THEME.background}`}]}>
        <View style={[styles.cartContainer, {backgroundColor: `${THEME.background}`}]}>
        <View>
          <View style={styles.cartTitleView}>
            <View style={styles.btnContainer}>
              <BackButton navigation={navigation} />
            </View>
            <Icon name='shopping-cart' size={30} color={`${THEME.text}`} />
            <Text style={[styles.cartTitle, {color: `${THEME.text}`}]}>My Cart</Text>
          </View>

          {cart.length > 0 ? (
            <View>
              {cart
                .sort((a, b) => a.name > b.name)
                .map((product, id) => (
                  <View key={id} style={[styles.productView, {backgroundColor: `${THEME.card}`}]}>
                    <FastImage
                      resizeMode={FastImage.resizeMode.contain}
                      style={styles.productImage}
                      source={product.img}
                    />
                    <View style={styles.productMiddleView}>
                      <Text style={[styles.productTitle, {color: `${THEME.text}`}]}>{product.name}</Text>
                      <Text style={[styles.productCompanyTitle, {color: `${THEME.text}`}]}>
                        {product.company}
                      </Text>
                    </View>
                    <View style={styles.productRightView}>
                      <Text
                        style={[styles.productPriceText, {color: `${THEME.text}`}]}
                      >{`₱${product.price}`}</Text>
                      <View style={styles.productItemCounterView}>
                        <TouchableOpacity
                          onPress={() => {
                            if (product.quantity === 1) {
                              return Alert.alert(
                                `Remove ${product.name}?`,
                                '',
                                [
                                  { text: 'Cancel' },
                                  {
                                    text: 'Remove',
                                    style: 'destructive',
                                    onPress: () => {
                                      const newCart = cart.filter(
                                        (p) => p.id !== product.id
                                      );
                                      setCart(newCart);
                                    },
                                  },
                                ]
                              );
                            }
                            const newProd = {
                              ...product,
                              quantity: product.quantity - 1,
                              price: product.price - product.perPrice,
                            };
                            const restProds = cart.filter(
                              (p) => p.id !== product.id
                            );
                            setCart([...restProds, newProd]);
                          }}
                        >
                          <Icon
                            style={styles.toggleCounterButton}
                            name='minus-circle'
                            size={20}
                            color={`${THEME.placeholder}`}
                          />
                        </TouchableOpacity>
                        <Text style={[styles.counterValue, {color: `${THEME.text}`}]}>
                          {product.quantity}
                        </Text>
                        <TouchableOpacity
                          onPress={() => {
                            const newProd = {
                              ...product,
                              quantity: product.quantity + 1,
                              price: product.price + product.perPrice,
                            };
                            const restProds = cart.filter(
                              (p) => p.id !== product.id
                            );
                            setCart([...restProds, newProd]);
                          }}
                        >
                          <Icon
                            style={styles.toggleCounterButton}
                            name='plus-circle'
                            size={20}
                            color={`${THEME.text}`}
                          />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                ))}
              {/* <View style={[styles.couponInputView, 
                {backgroundColor: `${THEME.border}`, borderColor: `${THEME.card}`}]}>
                <TextInput
                  placeholder='Coupon Code'
                  placeholderTextColor={`${THEME.placeholder}`}
                  style={styles.couponInput}
                />
                <TouchableOpacity style={styles.couponButton}>
                  <Text style={styles.couponButtonText}>Apply Coupon</Text>
                </TouchableOpacity>
              </View> */}
              <View style={[styles.subtotalView, {borderBottomColor: `${THEME.text}`}]}>
                <Text style={[styles.subtotalText, {color: `${THEME.text}`}]}>Itemtotal -</Text>
                <Text style={[styles.subtotalPrice, {color: `${THEME.text}`}]}>
                    ₱{cart.reduce((acc, val) => val.price + acc, 0)}
                </Text>
              </View>
              <View style={[styles.shippingView, {borderBottomColor: `${THEME.text}`}]}>
                <Text style={[styles.shippingText, {color: `${THEME.text}`}]}>Shipping</Text>
                <View style={styles.shippingItemsView}>

                    <RadioButtonRN
                      data={data}
                      initial={0}
                      circleSize={16}
                      boxStyle={{backgroundColor: `${THEME.card}`}}
                      onPress={() => {
                        setShippingMethod('Normal');
                      }}
                      textStyle={{color: `${THEME.text}`}}
                      selectedBtn={ShippingMethod => {
                        setShippingMethod(ShippingMethod);
                      }}
                      icon={
                        <Icon
                          name="check-circle"
                          size={22}
                          color="#2c9dd1"
                        />
                      }
                    />




                    {/* <TouchableOpacity
                      style={[styles.shippingItem, {color: `${THEME.text}`}]}
                      onPress={() => {
                        setShippingMethod('Normal');
                      }}
                    >
                      <Text style={[styles.shippingItemText, {color: `${THEME.text}`}]}>Normal (Free)</Text>
                      <Radio selected={shippingMethod === 'Normal'} />
                    </TouchableOpacity>
                    <TouchableOpacity
                      style={styles.shippingItem}
                      onPress={() => {
                        setShippingMethod('Express');
                      }}
                    >
                      <Text style={[styles.shippingItemText, {color: `${THEME.text}`}]}>Express (₱60)</Text>
                      
                      <Radio selected={shippingMethod === 'Express'} />
                    </TouchableOpacity> */}
                </View>
              </View>
              {/* payment */}
              <View style={{
                padding: 10,
              }}>
                <Text style={[styles.paymentText, {color: `${THEME.text}`}]}>Payment</Text>
              </View>
                <RadioButtonRN
                      data={payment}
                      initial={0}
                      circleSize={16}
                      boxStyle={{backgroundColor: `${THEME.card}`}}
                      textStyle={{color: `${THEME.text}`}}
                      icon={
                        <Icon
                          name="check-circle"
                          size={22}
                          color="#2c9dd1"
                        />
                      }
                    />


              <View style={[styles.totalView, {borderBottomColor: `${THEME.text}`}]}>
                <Text style={[styles.totalText, {color: `${THEME.text}`}]}>Total -</Text>
                {shippingMethod === 'Normal' ? (
                  <Text style={[styles.totalPrice, {color: `${THEME.text}`}]}>
                      ₱{cart.reduce((acc, val) => val.price + acc, 0)}
                  </Text>
                ) : (
                  <Text style={[styles.totalPrice, {color: `${THEME.text}`}]}>
                      ₱{cart.reduce((acc, val) => val.price + acc, 0) + 150}
                  </Text>
                )}
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('Checkout')} style={styles.checkoutButton}>
                <Text style={styles.checkoutButtonText}>
                  Proceed to Checkout
                </Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={styles.emptyCartView}>
              <Text style={[styles.emptyCartViewText, {color: `${THEME.text}`}]}>Your cart is empty.</Text>
            </View>
          )}

          <View style={{ height: 100 }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Cart
