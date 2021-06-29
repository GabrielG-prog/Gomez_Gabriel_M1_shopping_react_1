import React from "react";
import { Text, Image, SafeAreaView, StyleSheet } from "react-native";

const Order = ({product}) => {

    return (
        <SafeAreaView style={styles.container}>
            <Image
                source={{ uri: product.image }}
            />
            <Text style={styles.title}>{product.title}</Text>
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
    }
  });

export default Order;