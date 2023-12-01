import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
const playlistUrl = require("../assets/Youtube.png");
const GreaterThanUrl = require("../assets/GreaterThan.png");

interface PlaylistProps {
  playlistName: string;
}

const PlaylistComponent: React.FC<PlaylistProps> = ({ playlistName }) => (
  <View style={styles.container}>
    <Image
      source={playlistUrl}
      style={{ width: 30, height: 30 }}
      resizeMode="contain"
    />

    <Text style={styles.text}>Playlist.Unit 5:{playlistName}</Text>

    <Image
      source={GreaterThanUrl}
      style={{ width: 20, height: 20 }}
      resizeMode="contain"
    />
  </View>
);

export default PlaylistComponent;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    flexDirection: "row",
    paddingHorizontal: 10,
    width: "100%",
    paddingVertical: 10,

    backgroundColor: "rgba(22, 22, 22, 1)",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 10,
  },
});
