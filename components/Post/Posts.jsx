import { View, Text, SafeAreaView, StatusBar, ScrollView } from "react-native";
import PostList from "./PostList";

export default function Posts() {
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView className="h-[32rem]">
        {new Array(3).fill().map((item, index) => (
          <View key={index}>
            <PostList />
          </View>
        ))}
      </ScrollView>
      <Text>wedfghj</Text>
    </SafeAreaView>
  );
}
