import React, {useEffect, useState, useContext} from "react";
import {View, Image, Text, Button, FlatList, StyleSheet} from "react-native";
import {CartContext} from "hooks/CartContext";

function Cart({navigation}){
    const {items, getItemsCount, getTotalPrice} = useContext(CartContext);

    function Totals(){
        let [total, setTotal] = useState(0);
        useEffect(() => {
            setTotal(getTotalPrice())
        })
        return(
            <View style={styles.cartLineTotal}>
                <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
                <Text style={styles.mainTotal}>$ {total}</Text>
            </View>
        )
    }

    function renderItem({item}){
        return(
            <>
                <View style={styles.cartLine}>
                    <Image style={styles.image} source={item.product.image} />
                    <Text style={styles.lineLeft}>{item.product.name} x {item.qty} <Text style={styles.productTotal}>${item.totalPrice}</Text></Text>
                </View>
            </>
        )
    }

    return(
        <FlatList
            style={styles.itemsList}
            contentContainerStyle={styles.itemsListContainer}
            data={items}
            renderItem={renderItem}
            keyExtractor={(item) => item.product.id.toString()}
            ListFooterComponent={Totals}
        />
    )

}



export default Cart;