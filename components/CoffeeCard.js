import { Text, View, Image } from "react-native";

const CoffeeCard = ({ item }) => {
  return (
    <View
      style={{
        borderRadius: 40,
        backgroundColor: "#EDA800",
        height: 350,
        width: 250,
      }}
    >
      <View
        style={{
          shadowColor: "black",
          shadowRadius: 30,
          shadowOffset: { width: 0, height: 40 },
          shadowOpacity: 0.8,
        }}
        className="flex-row justify-center -mt-14"
      >
        <Image source={item.image} className="h-40 w-40" />
      </View>
    </View>
  );
};

export default CoffeeCard;
