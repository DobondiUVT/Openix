import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const Home = () => {
  return (
    <View className="w-full justify-items-center items-center h-full px-4">
      <Text>Home</Text>
      <TouchableOpacity
        onPress={() => console.log("Button pressed!")}
        activeOpacity={0.7}
        className={`bg-secondary  pt-8 rounded-full justify-center items-center`}
      >
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>

    
  );
};

export default Home;
