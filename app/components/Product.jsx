import React from "react";
import { Text, Image, View, StyleSheet, TouchableOpacity, Dimensions } from "react-native";

/* <-- dimensions --> */
const { width } = Dimensions.get('screen')
const cardWidth = width / 2 - 20

const Product = ({name, price, image, onPress}) => {
    return(
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <Image style={styles.image} source={image} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.price}>$ {price}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        width: cardWidth,
        marginHorizontal: 10,
        paddingVertical: 10,
        marginTop: 60,
        borderRadius: 15,
        elevation: 13,
        backgroundColor: COLORS.white,
        shadowColor: COLORS.dark,
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.1,
        elevation: 5,
        marginTop: 20,
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 14 / 12,
        top: 24,
    },
    infoContainer: {
        padding: 16 
    },
    name: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    price: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 8
    }
})

export default Product;