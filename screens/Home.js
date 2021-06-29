import React from "react";
import { useSelector } from "react-redux";
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Button } from "react-native";
import Product from '../components/Product';
import ProductForm from '../components/ProductForm';

const Home = ({navigation}) => {

    const products = useSelector((state) => state.productReducer);

    const idItem = (id, category, title, image, description, price) => {
        navigation.navigate("Details", {
            id, category, title, image, description, price
        });
    }

    const renderProduct = ({ item }) => (
        <View style={styles.item}>
            <Button
                title="Voir"
                onPress={() => idItem(item.id, item.category, item.title, item.image, item.description, item.price)}
                color="#1C1F23"
            />
            <Product product={item} />
        </View>
    );

    return (
        <View>
            <View style={styles.fixToText}>
                <Button
                    title="Panier"
                    onPress={() => navigation.navigate("Cart")}
                    color="#5C636A"
                />
                <Button
                    title="Commande"
                    onPress={() => navigation.navigate("Order")}
                    color="#5C636A"
                />
            </View>
            <ProductForm />
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={products}
                    renderItem={renderProduct}
                    keyExtractor={p => p.id}
                />
            </SafeAreaView>
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

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title: {
      fontSize: 32,
    },
});

export default Home;