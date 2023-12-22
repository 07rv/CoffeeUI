import { View, Text, Image } from "react-native";

export default function PostList() {
  return (
    <View
      className="h-96 m-8 pb-3 rounded-lg bg-white"
      style={{
        elevation: 5,
        shadowOffset: {
          width: 1,
          height: 1,
        },
      }}
    >
      <Image
        source={require("../../assets/images/image.avif")}
        className="flex-1 rounded-t-lg"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
      <View className="p-2">
        <Text className="text-black font-bold text-xl">Hawa Mahal</Text>
        <Text className="text-black text-lg">Rohit</Text>
        <Text className="text-black">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolorem
          id, nemo assumenda tenetur repellat laboriosam. Dolorem repellat
          repudiandae ut ex assumenda ea? Consequatur dicta, a sed obcaecati
          nemo delectus.
        </Text>
        <Text className="text-black">12mins</Text>
      </View>
    </View>
  );
}
