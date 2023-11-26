import { StatusBar } from "expo-status-bar";
import { View, Text, Image, SafeAreaView } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 relative bg-white">
      <StatusBar />
      <Image
        source={require("../assets/images/beansBackground1.png")}
        className="w-full absolute -top-5 opacity-10"
        style={{ height: 220 }}
      />
      <SafeAreaView className="flex-1">
        <Image
          source={require("../assets/images/beansBackground1.png")}
          className="h-9 w-9 rounded-full"
        />
        <View className="flex-row items-center space-x-2">
          <Text className="flex justify-center bg-black items-center text-slate-50 w-full">
            wedfrghj
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
}
