// src/components/CardList.tsx
import React from "react";
import { ScrollView, View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Image, VStack, HStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { IData } from "../../../types";
import { Dimensions } from "react-native";

// src/types/index.ts
export enum EDisplayType {
  NORMAL = "NORMAL",
  LARGE = "LARGE",
  GRID = "GRID", // <-- thêm dòng này
}

const { width } = Dimensions.get("screen");
const HORIZONTAL_GAP = 16 * 2; // hai bên padding của ScrollView

const SIZE_TYPE: Record<
  EDisplayType,
  { widthSize: number; heightSize: number }
> = {
  [EDisplayType.NORMAL]: {
    widthSize: 152,
    heightSize: 152,
  },
  [EDisplayType.LARGE]: {
    widthSize: width - 32, // full minus padding
    heightSize: 192,
  },
  [EDisplayType.GRID]: {
    widthSize: (width - HORIZONTAL_GAP - 48) / 2, // hai cột, bớt margin
    heightSize: 180,
  },
};

type Props = {
  data: IData[];
  displayType: EDisplayType;
  title: string;
};

const CardList = ({ data, displayType, title }: Props) => {
  const navigation = useNavigation<any>();
  const { widthSize, heightSize } = SIZE_TYPE[displayType];

  const handleNavigate = (id: number) => {
    const lesson = data.find((item) => item.id === id);
    if (lesson) navigation.navigate("Detail", { lesson });
  };

  // 1) GRID: 2 cột, scroll dọc
  if (displayType === EDisplayType.GRID) {
    return (
      <VStack mb={"$6"}>
        <HStack justifyContent="space-between" mb={"$4"} px="$4">
          <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
            {title}
          </Text>
        </HStack>
        <View style={styles.gridContainer}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleNavigate(item.id)}
              style={[styles.gridItem, { width: widthSize, marginBottom: 16 }]}
            >
              <Image
                source={item.image}
                width={widthSize}
                height={heightSize}
                rounded={"$xl"}
                alt="image"
              />
              <VStack gap={"$2"} mt={"$2"}>
                <Text fontSize={"$md"} fontWeight="$semibold" numberOfLines={1}>
                  {item.title}
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  color={"$coolGray500"}
                  fontSize="$sm"
                >
                  {item.description}
                </Text>
              </VStack>
            </TouchableOpacity>
          ))}
        </View>
      </VStack>
    );
  }

  // 2) NORMAL hoặc LARGE: horizontal scroll
  return (
    <VStack mb={"$6"}>
      <HStack justifyContent="space-between" mb={"$4"} px="$4">
        <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
          {title}
        </Text>
      </HStack>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      >
        <HStack gap={"$4"}>
          {data.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => handleNavigate(item.id)}
            >
              <VStack width={widthSize} gap={"$3"}>
                <Image
                  source={item.image}
                  width={widthSize}
                  height={heightSize}
                  rounded={"$xl"}
                  alt="image"
                />
                <Text fontSize={"$md"} fontWeight="$semibold" numberOfLines={1}>
                  {item.title}
                </Text>
                <Text
                  ellipsizeMode="tail"
                  numberOfLines={2}
                  color={"$coolGray500"}
                  fontSize="$sm"
                >
                  {item.description}
                </Text>
              </VStack>
            </TouchableOpacity>
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default CardList;

const styles = StyleSheet.create({
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  gridItem: {
    // marginHorizontal được tính trong justifyContent
  },
});
