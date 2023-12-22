import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import PostList from "./PostList";

export default function Posts() {
  const windowHeight = Dimensions.get("window").height;
  return (
    <SafeAreaView>
      <StatusBar />
      <ScrollView
        style={{
          height: windowHeight - 150,
        }}
      >
        {new Array(3).fill().map((item, index) => (
          <View key={index}>
            <PostList />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
