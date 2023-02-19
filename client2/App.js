//Import packages
import React from "react";
import { StatusBar } from "expo-status-bar";

//Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Import components
import Homepage from "./components/Homepage";
import PostPage from "./components/PostPage";
import PostForm from "./components/PostForm";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Homepage}
          options={{ title: "Home" }}
        />
        <Stack.Screen
          name="PostPage"
          component={PostPage}
          options={{ title: "Post" }}
        />
        <Stack.Screen
          name="PostForm"
          component={PostForm}
          options={({ route }) => ({
            title: route.params.isEditing ? "Edit Post" : "Create a Post",
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
