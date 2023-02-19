//Import packages
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  FlatList,
  Alert,
  RefreshControl,
  TextInput,
  ActivityIndicator,
} from "react-native";
import axios from "axios";

//Import components
import Post from "./Post";
import styles from "./styles/PostListStyles";

//TEMPORARY URL
import { API_URL } from "../config";

export default function PostList() {
  //useState Variables
  const [posts, setPosts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [loaded, setLoaded] = useState(false);

  //useEffect to get all posts onload
  useEffect(() => {
    getAllPosts();
  }, []);

  //Get all posts function
  const getAllPosts = () => {
    axios
      .get(`${API_URL}/api/posts`)
      .then((res) => {
        setPosts(res.data);
        setLoaded(true);
      })
      .catch((err) => {
        Alert.alert(err.response.data.error);
      });
  };

  //Refreshing FlatList functionality
  const onRefresh = () => {
    setRefreshing(true);
    getAllPosts();
    setRefreshing(false);
  };

  //Posts that are filtered variable
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        placeholder="Search posts..."
      />
      {loaded ? (
        <FlatList
          data={filteredPosts}
          renderItem={({ item }) => (
            <Post
              id={item._id}
              title={item.title}
              description={item.description}
              author={item.author}
              date={item.createdAt}
            />
          )}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          ListEmptyComponent={
            <View style={styles.emptyList}>
              <Text>No posts to show!</Text>
              <Text>Swipe down to refresh.</Text>
            </View>
          }
        />
      ) : (
        <View style={styles.loading}>
          <ActivityIndicator size="large" />
        </View>
      )}
    </View>
  );
}
