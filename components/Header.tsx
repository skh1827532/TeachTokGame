import React, { useContext } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { DataContext } from "../DataContext";

export default function Header() {
  const { minutes } = useContext(DataContext);
  return (
    <View style={styles.headerContainer}>
      <View style={styles.timer}>
        <Ionicons
          name="stopwatch-sharp"
          size={20}
          color="white"
          style={{ transform: [{ rotateY: "180deg" }] }}
        />
        <Text style={styles.minutes}>{`${minutes}m`}</Text>
      </View>
      <View style={styles.centeredTextContainer}>
        <Text style={styles.centeredText}>For You</Text>
        <View style={styles.borderStyle} />
      </View>
      <View>
        <Ionicons name="search" size={22} color="white" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,

    height: 60,
    alignItems: "center",
  },
  minutes: {
    fontWeight: "normal",
    fontSize: 14,
    color: "white",
  },
  timer: {
    flexDirection: "row",
    alignItems: "center",
  },
  centeredTextContainer: {
    alignItems: "center",
  },
  centeredText: {
    fontWeight: "600",
    color: "white",
    fontSize: 16,
  },
  borderStyle: {
    marginTop: 3,
    width: "70%",
    borderColor: "white",
    borderWidth: 3,
  },
});
