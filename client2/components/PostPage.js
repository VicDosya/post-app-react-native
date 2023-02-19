//Import packages
import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, Alert } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import axios from "axios";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

//Import components
import styles from "./styles/PostPageStyles";

export default function PostPage() {
  //useState Variables
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [date, setDate] = useState("");

  //Get post id parameter
  const route = useRoute();
  const postId = route.params.id;

  //useEffect to get a post onload
  useEffect(() => {
    getPost();
  }, []);

  //Get post data by its id.
  const getPost = () => {
    axios
      .get(`http://192.168.1.95:3000/api/posts/${postId}`)
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setAuthor(res.data.author);
        setDate(res.data.createdAt);
      })
      .catch((err) => {
        Alert.alert(`Error: ${err.response.data.error}`);
      });
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.titleCtn}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={styles.lineBreak} />
      <View style={styles.descriptionCtn}>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.lineBreak} />
      <View style={styles.authorCtn}>
        <Text style={styles.author}>{author}</Text>
      </View>
      <View style={styles.dateCtn}>
        <Text style={styles.date}>{date}</Text>
      </View>
      <View style={styles.circleButtonContainer}>
        <TouchableOpacity
          style={styles.circleButton}
          onPress={() =>
            navigation.navigate("PostForm", { id: postId, isEditing: true })
          }
        >
          <MaterialIcons name="edit" size={38} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
