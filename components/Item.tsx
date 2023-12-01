import React, { useState, useEffect, memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { MCQResponse } from "../types";

import Option from "./Option";
import VerticalBar from "./RightBar";
import PlaylistComponent from "./Footer";

const { height } = Dimensions.get("window");
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;
const itemHeight = Platform.OS === "android" ? height - 120 : height - 160;

interface ItemProps {
  mcqResponse: MCQResponse;
}

const Item: React.FC<ItemProps> = ({ mcqResponse }) => {
  const [userChoice, setUserChoice] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  useEffect(() => {
    console.log(userChoice);
  }, [isSelected]);

  const handleOptionPress = (option) => {
    setUserChoice(option);
    setIsSelected(true);
  };

  const renderDescription = (text) => {
    const parts = text.split(/(#\S+)/);
    return (
      <View style={styles.descriptionContainer}>
        {parts.map((part, index) =>
          part.startsWith("#") ? (
            <Text key={index} style={styles.boldText}>
              {part}
            </Text>
          ) : (
            <Text key={index} style={styles.description}>
              {part}
            </Text>
          )
        )}
      </View>
    );
  };

  return (
    <View style={styles.item}>
      <View>
        <Text style={styles.question}>{mcqResponse.question}</Text>
      </View>
      <View style={styles.bottomItem}>
        <View>
          {mcqResponse.options.map((option, index) => (
            <Option
              key={index}
              option={option.answer}
              isSelected={isSelected}
              isCorrect={option.answer === mcqResponse.correctAnswer}
              isUserChoice={option.answer === userChoice}
              onPress={() => handleOptionPress(option.answer)}
            />
          ))}
          <View>
            <Text style={styles.username}>{mcqResponse.user.name}</Text>
            {renderDescription(mcqResponse.description)}
          </View>
        </View>
        <VerticalBar imageUrl={mcqResponse.user.avatar} />
      </View>
      <PlaylistComponent playlistName={mcqResponse.playlist} />
    </View>
  );
};

const styles = StyleSheet.create({
  question: {
    fontSize: 20,
    fontWeight: "bold",
    maxWidth: 260,
    color: "white",
    marginTop: 40,
    marginLeft: 10,
  },
  item: {
    height: itemHeight,
    justifyContent: "space-between",
  },
  username: {
    color: "white",
    fontWeight: "600",
    fontSize: 15,
    marginLeft: 10,
    marginTop: 15,
  },
  descriptionContainer: {
    flexDirection: "row",
    marginLeft: 10,
  },
  description: {
    color: "white",
    fontWeight: "400",
    fontSize: 13,
  },
  boldText: {
    fontWeight: "bold",
    color: "white",
  },
  bottomItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 70,
  },
});

export default memo(Item);
