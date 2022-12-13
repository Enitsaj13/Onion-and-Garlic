import { useContext } from 'react'

const CartContext = React.createContext({
  cart: [],
  addToCart: (item) => {},
  removeFromCart: (item) => {}
});

const ParentComponent = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter(i => i !== item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      <ChildComponent />
    </CartContext.Provider>
  );
};


const ChildComponent = () => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  const handleRemoveFromCart = (item) => {
    removeFromCart(item);
  };

  return (
    <View>
      {cart.map((item, index) => (
        <Text key={index}>{item.name}</Text>
      ))}
      <Button onPress={() => handleAddToCart(item)} title="Add to Cart" />
      <Button onPress={() => handleRemoveFromCart(item)} title="Remove from Cart" />
    </View>
  );
};


export default ParentComponent;

