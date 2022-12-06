import { View, Image, Text } from 'react-native';

const images = [
    {
      id: "0",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqg_OBzcVDnKHv1d3hyVk_WlCo43pzit4CJQ&usqp=CAU",
      name: "icecream",
    },
    {
      id: "1",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT85O96gPiso_j2gaS0cePTBY4mCR3pumV6tw&usqp=CAU",
      name: "biscuit",
    },
    {
      id: "2",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSicQWeRoxxLEr1RLIp8dJtw-NQvSE4xtlhwA&usqp=CAU",
      name: "chocolate",
    },
  ];

const App = () => {
    return (
        <>
        <View style={{ height: 1, borderColor: "gray", borderWidth: 2 }} />
        <Text>CART ITEMS ADDED: </Text>
        {cart.map((item) => (
          <View style={{margin:10}}>
            <Image style={{ width: 100, height: 100, borderRadius: 8 }} source={{uri:item.image}}/>
            <Text>{item.name}</Text>
          </View>
        ))}
        </>
    );
    }

export default App;