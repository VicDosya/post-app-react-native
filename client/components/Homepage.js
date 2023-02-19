//Import packages
import React from "react";
import { View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
//Import components
import PostList from "./PostList";
import styles from "./styles/HomePageStyles";

export default function Homepage() {
  // Get navigation object from the current screen's props
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Posts list */}
      <PostList />

      {/* Add Button */}
      <View style={styles.circleButtonContainer}>
        <TouchableOpacity
          style={styles.circleButton}
          // Navigate to the "PostForm" screen when button is pressed
          onPress={() => navigation.navigate("PostForm", { isEditing: false })}
        >
          <MaterialIcons name="add" size={38} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
