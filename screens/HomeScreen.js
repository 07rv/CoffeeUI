import { StatusBar } from "expo-status-bar";
import {
  View,
  Text,
  Image,
  SafeAreaView,
  TextInput,
  Touchable,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  BellIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
} from "react-native-heroicons/solid";

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
        <View className="px-4 flex-row justify-between items-center">
          <Image
            source={require("../assets/images/beansBackground1.png")}
            className="h-9 w-9 rounded-full"
          />
          <View className="flex-row items-center space-x-2">
            <MapPinIcon size={25} />
            <Text className="text-base font-semibold">New York, NYC</Text>
          </View>
          <BellIcon size={25} color={"black"} />
        </View>
        <View className="mx-5 mt-14">
          <View className="flex-row justify-center rounded-full p-1 bg-[#e6e6e6]">
            <TextInput
              placeholder="Search"
              className="p-4 flex-1 font-semibold"
            ></TextInput>
            <TouchableOpacity
              className="rounded-full p-2"
              style={{ backgroundColor: "gold" }}
            >
              <MagnifyingGlassIcon size={25} strokeWidth={2} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
          ></FlatList>
        </View>
      </SafeAreaView>
    </View>
  );
}
