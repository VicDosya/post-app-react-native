//Import packages
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Text, View, TextInput, Button, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";
//Import components
import styles from "./styles/PostFormStyles";

//TEMPORARY URL
import { API_URL } from "../config";

export default function PostForm({ route }) {
  //Get isEditing if user is editing.
  const { isEditing } = route.params;

  //useState Variables
  const [title, setTitle] = useState(isEditing ? title : "");
  const [description, setDescription] = useState(isEditing ? description : "");
  const [author, setAuthor] = useState(isEditing ? author : "");

  //Navigation
  const navigation = useNavigation();

  //If the user is editing - get the current post data.
  if (isEditing) {
    const postId = route.params.id;

    //useEffect - Get a post onload
    useEffect(() => {
      getPost();
    }, []);

    //Get post data function
    const getPost = () => {
      axios
        .get(`${API_URL}/api/posts/${postId}`)
        .then((res) => {
          setTitle(res.data.title);
          setDescription(res.data.description);
          setAuthor(res.data.author);
        })
        .catch((err) => {
          Alert.alert(`Error: ${err.response.data.error}`);
        });
    };
  }

  //Submit post function
  const handleSubmit = () => {
    if (title === "" || description === "" || author === "") {
      return Alert.alert("Please fill in all the inputs.");
    }
    //If user is editing the post then use PUT request.
    if (isEditing) {
      const postId = route.params.id;

      axios
        .put(`${API_URL}/api/posts/${postId}`, { title, description, author })
        .then((res) => {
          Alert.alert(res.data.message);
          navigation.navigate("Home");
        })
        .catch((err) => {
          Alert.alert(`Error: ${err.response.data.error}`);
        });
    } else {
      axios
        .post(`${API_URL}/api/posts`, { title, description, author })
        .then((res) => {
          Alert.alert(res.data.message);
          navigation.navigate("Home");
        })
        .catch((err) => {
          Alert.alert(err.response.data.error);
        });
    }
  };

  //Handle delete post
  const handleDelete = () => {
    const postId = route.params.id;

    axios
      .delete(`${API_URL}/api/posts/${postId}`)
      .then((res) => {
        Alert.alert(res.data.message);
        navigation.navigate("Home");
      })
      .catch((err) => {
        Alert.alert(`Error: ${err.response.data.error}`);
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputCtn}>
        <Text style={styles.inputLabel}>Title:</Text>
        <TextInput
          style={styles.input}
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.inputCtn}>
        <Text style={styles.inputLabel}>Description:</Text>
        <TextInput
          style={styles.input}
          placeholder="Description..."
          multiline={true}
          value={description}
          onChange={(e) => setDescription(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.inputCtn}>
        <Text style={styles.inputLabel}>Author:</Text>
        <TextInput
          style={styles.input}
          placeholder="Author..."
          value={author}
          onChange={(e) => setAuthor(e.nativeEvent.text)}
        />
      </View>
      <View style={styles.buttonCtn}>
        <Button
          title={isEditing ? "Update" : "Submit"}
          onPress={handleSubmit}
        />
      </View>

      {isEditing ? (
        <View style={styles.buttonCtn}>
          <Button title="Delete" color="coral" onPress={handleDelete} />
        </View>
      ) : null}
    </View>
  );
}
