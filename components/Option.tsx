import React from "react";
import { Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Option = ({ option, isSelected, isCorrect, isUserChoice, onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.option,
        isSelected
          ? isCorrect
            ? styles.correct
            : isUserChoice
            ? styles.wrong
            : null
          : null,
      ]}
    >
      <Text style={styles.text}>{option}</Text>
      {isSelected &&
        isUserChoice &&
        (isCorrect ? (
          <Image source={require("../assets/right.png")} style={styles.icon} />
        ) : (
          <Image source={require("../assets/wrong.png")} style={styles.icon} />
        ))}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    padding: 12,
    marginLeft: 10,

    borderRadius: 8,
    width: 270,
    height: 84,
    backgroundColor: "rgba(255,255,255,0.5)",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
  },
  correct: {
    backgroundColor: "rgba(40, 177, 143, 0.7)",
  },
  wrong: {
    backgroundColor: "rgba(220, 95, 95, 0.7)",
  },
  text: {
    fontSize: 16,
    textShadowColor: "black",
    textShadowOffset: { width: 2, height: 1 },
    textShadowRadius: 3,
    width: 200,

    color: "white",
    fontWeight: "500",
  },
  icon: {
    width: 35,
    height: 52,
    alignSelf: "flex-end",
    margin: 2,
  },
});

export default Option;
