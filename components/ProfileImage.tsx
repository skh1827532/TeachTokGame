import React from "react";
import { View, Image, StyleSheet, Text } from "react-native";

// Define the props for the component
interface CircularComponentProps {
  imageUrl: string;
}

// Define the component
const CircularComponent: React.FC<CircularComponentProps> = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.smallCircle}>
        <Text style={styles.plusSign}>+</Text>
      </View>
    </View>
  );
};

// Styles for the component
const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderColor: "white",
    borderWidth: 2,
    borderRadius: 25,
    overflow: "visible",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
    borderRadius: 25,
  },
  smallCircle: {
    width: 25,
    height: 25,
    borderRadius: 25,
    backgroundColor: "rgba(40, 177, 143, 1)",

    position: "absolute",
    bottom: -10, // Positioning the circle 50% outside the container
    justifyContent: "center",
    // backgroundColor: "rgba(40, 177, 143, 1)",
    alignItems: "center",

    alignSelf: "center", // To center it horizontally
  },
  plusSign: {
    // textAlign: "center",
    fontSize: 20,
    color: "black",
  },
});

export default CircularComponent;
