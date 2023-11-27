import { Text, View, Image } from "react-native";

const CoffeeCard = ({ item }) => {
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: "#EDA900",
        height: 350,
        width: 250,
      }}
    >
      <View
        style={{
          width: 50,
          height: 50,
        }}
        className="flex-row justify-center -mt-14"
      >
        <Image source={item.image} className="h-40 w-40" />
      </View>
      <View className="px-5 mt-10 space-y-5">
        <Text className="text-3xl text-black font-semibold z-10">
          {item.name}
        </Text>
      </View>
    </View>
  );
};

export default CoffeeCard;
