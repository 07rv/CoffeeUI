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
import Carousel from "react-native-snap-carousel";
import { categories, coffeeItems } from "../constants/index";
import { useState } from "react";

import CoffeeCard from "../components/CoffeeCard";
export default function HomeScreen() {
  const [activeCategory, setActiveCategory] = useState(1);
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
              style={{ backgroundColor: "#EDA800" }}
            >
              <MagnifyingGlassIcon size={25} strokeWidth={2} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>

        <View className="px-5 mt-6">
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categories}
            keyExtractor={(item) => item.id}
            className="overflow-visible"
            renderItem={({ item }) => {
              let isActive = item.id === activeCategory;
              let activeTextClass = isActive ? "text-white" : "text-gray-700";
              return (
                <TouchableOpacity
                  onPress={() => setActiveCategory(item.id)}
                  style={{
                    backgroundColor: isActive ? "#EDA800" : "rgba(0,0,0,0.07)",
                  }}
                  className="p-4 px-5 rounded-full mr-2 shadow-black"
                >
                  <Text className={"font-semibold" + activeTextClass}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </SafeAreaView>

      <View className="mt-16 py-2">
        <Carousel
          containerCustomStyle={{ overflow: "visible" }}
          data={coffeeItems}
          renderItem={({ item }) => <CoffeeCard item={item} />}
          firstItem={1}
          loop={true}
          inactiveSlideScale={0.75}
          inactiveSlideOpacity={0.75}
          sliderWidth={400}
          itemWidth={260}
          slideStyle={{ display: "flex", alignItems: "center" }}
        />
      </View>
    </View>
  );
}
