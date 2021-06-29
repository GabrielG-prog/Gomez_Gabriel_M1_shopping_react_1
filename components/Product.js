import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../redux/actions/productAction";
import { addProductCart } from "../redux/actions/cartAction";
import { View, Text, Image, TextInput, Button, SafeAreaView, StyleSheet } from "react-native";

const Product = ({product}) => {
    const [editToggle, setEditToggle] = useState(false);
    const [editCategory, setEditCategory] = useState(product.category);
    const [editTitle, setEditTitle] = useState(product.title);
    const [editDescription, setEditDescription] = useState(product.description);
    const [editPrice, setEditPrice] = useState(product.price);
    
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();

        const productData = {
            id: product.id,
            category: editCategory,
            title: editTitle,
            image: product.image,
            description: editDescription,
            price: editPrice
        };
        dispatch(editProduct(productData));
        setEditToggle(false);
    };
    
    return (
        <SafeAreaView style={styles.container}>
        {editToggle ? (
            <>
                <TextInput
                    style={styles.input}
                    placeholder="Categorie"
                    value={editCategory}
                    onChangeText={(value) => setEditCategory(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Titre"
                    value={editTitle}
                    onChangeText={(value) => setEditTitle(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Description"
                    value={editDescription}
                    onChangeText={(value) => setEditDescription(value)}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Prix"
                    value={editPrice}
                    onChangeText={(value) => setEditPrice(value)}
                    keyboardType="numeric"
                />
                <Button
                    onPress={(e) => handleEdit(e)}
                    title= "Valider"
                    color="#157347"
                />
            </>
        ) : (
            <>
                <Image
                    source={{ uri: product.image }}
                />
                <Text style={styles.title}>{product.category}</Text>
                <Text style={styles.title}>{product.title}</Text>
                <Text style={styles.title}>{product.description}</Text>
                <Text style={styles.title}>{product.price}</Text>
                <Button
                    onPress={() => dispatch(addProductCart(product))}
                    title= "Ajouter au panier"
                />
                <View>
                    <View style={styles.fixToText}>
                        <Button
                            title="Modifier"
                            onPress={() => setEditToggle(!editToggle)}
                            color="#1C1F23"
                        />
                        <Button
                            title="Supprimer"
                            onPress={() => dispatch(deleteProduct(product.id))}
                            color="#1C1F23"
                        />
                    </View>
                </View>
            </>
        )}
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

    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
    },

    fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });

export default Product;