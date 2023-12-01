import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
const shareImage = require("../assets/share.png");
const commentsImage = require("../assets/Comments.png");
import CircularComponent from "./ProfileImage";

interface VerticalBarProps {
  imageUrl: string;
}

const VerticalBar: React.FC<VerticalBarProps> = ({ imageUrl }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <CircularComponent imageUrl={imageUrl} />
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Icon name="heart" size={40} color="#FFFFFF" />
        <Text style={styles.text}>87</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={commentsImage} style={{ width: 40, height: 40 }} />
        <Text style={styles.text}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Icon name="bookmark" size={40} color="#FFFFFF" />
        <Text style={styles.text}>203</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image source={shareImage} style={{ width: 40, height: 40 }} />
        <Text style={styles.text}>17</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    rowGap: 15,
    justifyContent: "space-around",
    marginRight: 15,
  },
  button: {
    alignItems: "center",
    // marginBottom:,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
  },
});

export default VerticalBar;
