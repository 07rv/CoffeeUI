import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import PostList from "./PostList";

export default function Posts() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView>
        {new Array(6).fill().map((item, index) => (
          <View key={index}>
            <PostList />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
