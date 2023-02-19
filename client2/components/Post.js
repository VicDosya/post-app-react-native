//Import packages
import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
//Import components
import styles from "./styles/PostStyles";

export default function Post({ id, title, description, author, date }) {
  //Navigation
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("PostPage", { id })}>
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
          <Text style={styles.author}>Author: {author}</Text>
        </View>
        <View style={styles.dateCtn}>
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
