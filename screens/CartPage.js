import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from "react-native";
import { addProductOrder } from "../redux/actions/orderAction";
import Cart from '../components/Cart';
import Order from "../models/orderModel";

const CartPage = () => {
    const dispatch = useDispatch();
    const productsCart = useSelector((state) => state.cartReducer);

    const sum = (product) => {
        return product.reduce((a, b) => a + (b["price"] || 0), 0);
      }

    const renderProduct = ({ item }) => (
      <View style={styles.item}>
        <Cart product={item} />
      </View>
    );

    const handleAddOrder = () => {
        const productOrder = new Order(
          productsCart,
          Math.round(sum(productsCart) * 100) / 100
        )
        dispatch(addProductOrder(productOrder));
      } 

      const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <View>
            <Text style={styles.title}>Total d'article: {productsCart.length}</Text>
            <Separator />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={productsCart}
                    renderItem={renderProduct}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
            <Separator />
            <Button
                title="Acheter"
                onPress={() => handleAddOrder()}
                color="#157347"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#CFCFD5',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    title: {
      fontSize: 32,
    },
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default CartPage;