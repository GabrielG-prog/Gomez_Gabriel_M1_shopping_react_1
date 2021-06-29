import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/actions/productAction";

import Product from '../models/productModel';

import { StyleSheet, TextInput, Button, SafeAreaView, View, Text} from "react-native";

const ProductForm = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();

  const handleForm = async () => {

    if (category && title && description && price) {
        const newProduct = new Product(
            Math.random().toString(36).substr(2, 9),
            category,
            title,
            image,
            description,
            price,
        );

        await dispatch(addProduct(newProduct));
        setCategory("");
        setTitle("");
        setImage("");
        setDescription("");
        setPrice("");
    }
  };

  const Separator = () => (
    <View style={styles.separator} />
  );

  return (
    <SafeAreaView>
        <Separator />
        <Text style={styles.titleText}>Ajouter un produit</Text>
        <TextInput
            style={styles.input}
            placeholder="Categorie"
            value={category}
            onChangeText={(value) => setCategory(value)}
        />
        <TextInput
            style={styles.input}
            placeholder="Titre"
            value={title}
            onChangeText={(value) => setTitle(value)}
        />
        <TextInput
            style={styles.input}
            placeholder="Image"
            value={image}
            onChangeText={(value) => setImage(value)}
        />
        <TextInput
            style={styles.input}
            placeholder="Description"
            value={description}
            onChangeText={(value) => setDescription(value)}
        />
        <TextInput
            style={styles.input}
            placeholder="Prix"
            value={price}
            onChangeText={(value) => setPrice(value)}
            keyboardType="numeric"
        />
        <Button
            onPress={() => handleForm()}
            title= "Ajouter"
            color="#157347"
        />
        <Separator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    separator: {
      marginVertical: 8,
      borderBottomColor: '#737373',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },

    titleText: {
        fontSize: 20,
        fontWeight: "bold"
    }
  });

export default ProductForm;
