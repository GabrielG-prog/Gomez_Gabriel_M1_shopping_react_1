import React from "react";
import { useDispatch } from "react-redux";
import { deleteProductCart } from "../redux/actions/cartAction";
import { View, Text, Image, Button, SafeAreaView, StyleSheet } from "react-native";

const Cart = ({product}) => {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Button
                    title="Supprimer"
                    onPress={() => dispatch(deleteProductCart(product.id))}
                    color="#BB2D3B"
                />
            </View>

            <Image
                source={{ uri: product.image }}
            />
            <Text style={styles.title}>{product.category}</Text>
            <Text style={styles.title}>{product.title}</Text>
            <Text style={styles.title}>{product.description}</Text>
            <Text style={styles.title}>{product.price}</Text>
            
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
    },

    title: {
        textAlign: 'center',
        marginVertical: 8,
    },
  });

export default Cart;