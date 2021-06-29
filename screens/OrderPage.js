import React, { useState } from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from "react-native";
import Order from '../components/Order';

const OrderPage = () => {
    const [viewToggle, setViewToggle] = useState(false);
    const productsOrder = useSelector((state) => state.orderReducer);

    const renderProduct = ({ item }) => (
        <View style={styles.item}>
            {item.items.map(i =>
                <Order product={i} />
            )}   
        </View>
    );

    const Separator = () => (
        <View style={styles.separator} />
    );

    return (
        <View>
            <Text style={styles.title}>Total de la commande: {productsOrder.map(p => p.totalCost)}</Text>
            <Separator />
            <Button
                title="Détails"
                onPress={() => setViewToggle(!viewToggle)}
                color="#5C636A"
            />
            {viewToggle ? (
            <>
              <SafeAreaView style={styles.container}>
                    <FlatList
                        data={productsOrder}
                        renderItem={renderProduct}
                        keyExtractor={item => item.id}
                    />
                </SafeAreaView>  
            </>
            ) : (
                <></>
            )}
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

export default OrderPage;