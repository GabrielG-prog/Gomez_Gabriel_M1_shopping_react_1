import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

const ProductView = ({route}) => {
    return (
        <View style={styles.scrollview_container}>
            <Image
                style={styles.image}
                source={{uri: route.params.image}}
            />
            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.title_text}>{route.params.title}</Text>
                </View>
                <View style={styles.description_container}>
                    <Text style={styles.description_text}>{route.params.description}</Text>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.text_style}>{route.params.category}</Text>
                </View>
                <View style={styles.text_container}>
                    <Text style={styles.text_style}>{route.params.price}</Text>
                </View>
            </View>
        </View>
    );
};

export default ProductView;

const styles = StyleSheet.create({
    loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
    scrollview_container: {
      flex: 1
    },
    image: {
      height: 169,
      margin: 5
    },
    title_text: {
      fontWeight: 'bold',
      fontSize: 35,
      flex: 1,
      flexWrap: 'wrap',
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      marginBottom: 10,
      color: '#000000',
      textAlign: 'center'
    },
    description_text: {
      fontStyle: 'italic',
      color: '#666666',
      margin: 5,
      marginBottom: 15
    },
    text_container: {
      flex: 1
    },
    text_style: {
      textAlign: 'right',
      fontSize: 14
    },
  })