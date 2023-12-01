import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, Platform, Text, ImageBackground, Image } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./screens/HomeScreen";
import BookmarksScreen from "./screens/BookmarksScreen";
import ProfileScreen from "./screens/ProfileScreen";
import ActivityScreen from "./screens/ActivityScreen";
import DiscoverScreen from "./screens/DiscoverScreen";
const timerImage = require("./assets/Timer.png");
import { useState, useEffect } from "react";
import { MCQResponse } from "./types";
import { DataProvider } from "./DataProvider";
const Tab = createBottomTabNavigator();

export default function App() {
  const tabHeight = Platform.OS === "android" ? 60 : 100;
  return (
    <DataProvider>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={{
            tabBarLabelPosition: "below-icon",

            tabBarShowLabel: true,
            tabBarActiveTintColor: "white",
            tabBarInactiveTintColor: "gray",
            tabBarStyle: {
              backgroundColor: "black",
              height: tabHeight,
            },
          }}
        >
          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="home-sharp" size={24} color={color} />
              ),

              header: () => (
                <ImageBackground
                  source={require("./assets/background.png")}
                  style={{
                    height: 0,
                    width: "100%",
                    justifyContent: "center",
                  }}
                >
                  <View>
                    <Text style={{ color: "white" }}>Hellworld</Text>
                  </View>
                </ImageBackground>
              ),
            }}
          />
          <Tab.Screen
            name="Discover"
            component={ProfileScreen}
            options={{
              tabBarLabel: "Discover",
              tabBarIcon: ({ color }) => (
                <Ionicons name="compass-outline" size={30} color={color} />
              ),
            }}
          />
          <Tab.Screen
            name="Activity"
            component={DiscoverScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="stopwatch-sharp"
                  size={30}
                  color={color}
                  style={{ transform: [{ rotateY: "180deg" }] }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Bookmarks"
            component={BookmarksScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="bookmark" size={30} color={color} />
              ),

              headerShown: false,
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons
                  name="person-circle-outline"
                  size={30}
                  color={color}
                />
              ),

              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </DataProvider>
  );
}
