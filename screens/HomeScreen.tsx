import React, { useContext, useState, useEffect, useCallback } from "react";
import { DataContext } from "../DataContext";
import Item from "../components/Item";
import {
  View,
  StyleSheet,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  ActivityIndicator,
  FlatList,
  Dimensions,
  Platform,
} from "react-native";
import Header from "../components/Header";

const windowHeight = Dimensions.get("window").height;
const statusBarHeight = Platform.OS === "android" ? StatusBar.currentHeight : 0;

const flatListHeight =
  Platform.OS === "android" ? windowHeight - 120 : windowHeight - 60;

const containerHeight =
  Platform.OS === "android"
    ? windowHeight - 60 + statusBarHeight
    : windowHeight - 100 + statusBarHeight;

const HomeScreen = () => {
  const context = useContext(DataContext);
  const [currentBackground, setCurrentBackground] = useState("");

  const { data, loading, fetchData } = context;

  const handleLoadMore = () => {
    if (!loading) {
      fetchData().catch(() => {
        // handle error appropriately
      });
    }
  };

  const handleViewableItemsChanged = useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      const currentItem = viewableItems[0].item;
      setCurrentBackground(currentItem.image);
    }
  }, []);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  return (
    <ImageBackground
      source={{ uri: currentBackground }}
      style={styles.backgroundImage}
    >
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="light-content"
      />

      <SafeAreaView style={styles.container}>
        <Header />
        <FlatList
          contentContainerStyle={{
            minHeight: "100%",
            justifyContent: "space-between",
          }}
          initialNumToRender={1}
          data={data}
          style={{
            height: flatListHeight,
          }}
          renderItem={({ item }) => <Item mcqResponse={item} />}
          keyExtractor={(item, index) => item.id + index}
          onEndReached={handleLoadMore}
          refreshing={loading}
          pagingEnabled={true}
          removeClippedSubviews={true}
          onEndReachedThreshold={0.02}
          snapToInterval={
            Platform.OS === "android"
              ? windowHeight - 60 + statusBarHeight
              : windowHeight - 100
          }
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={() => (loading ? <ActivityIndicator /> : null)}
          onViewableItemsChanged={handleViewableItemsChanged}
          viewabilityConfig={viewabilityConfig}
        />
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    height: containerHeight,
    paddingTop: statusBarHeight,
  },
  backgroundImage: {
    height: windowHeight - 60 + statusBarHeight,
    resizeMode: "cover",
  },
});

export default HomeScreen;
