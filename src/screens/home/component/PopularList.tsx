import { StyleSheet, TouchableHighlight, TouchableOpacity } from "react-native";
import React from "react";
import {
  Text,
  Box,
  HStack,
  VStack,
  Image,
  ImageBackground,
  View,
} from "@gluestack-ui/themed";
import { populars } from "../../../db/slide-data";
import { useNavigation } from "@react-navigation/native";

type Props = {};

type CardPopularProps = {
  image: any;
  title: string;
  flexSize: number;
  onPress: () => void;
};

const CardPopular = ({ image, title, flexSize, onPress }: CardPopularProps) => {
  return (
    <ImageBackground
      source={image}
      alt="image"
      flex={flexSize}
      minHeight={"$24"}
      w={"$full"}
      overflow="hidden"
      resizeMode="cover"
      rounded={"$xl"}
      justifyContent="flex-end"
      alignItems="center"
      hardShadow="3"
    >
      <TouchableHighlight
        onPress={onPress}
        style={{
          width: "100%",
          height: "100%",
          justifyContent: "flex-end",
          padding: 8,
          zIndex: 12,
        }}
        underlayColor={"rgba(0, 0, 0, 0.1)"}
      >
        <Text color="$white" mb="$2" fontWeight="$semibold" fontSize="$sm">
          {title}
        </Text>
      </TouchableHighlight>
      <View
        position="absolute"
        bottom={0}
        w="$full"
        h="30%"
        bg="$black"
        opacity={0.3}
        zIndex={0}
      />
    </ImageBackground>
  );
};

const PopularList = () => {
  const navigation = useNavigation<any>();
  return (
    <VStack gap={"$4"}>
      <HStack justifyContent="space-between" mb={"$4"}>
        <Text fontWeight="$semibold" fontSize={"$xl"} color="$primary600">
          Phổ biến
        </Text>
      </HStack>
      <HStack h={"$96"} gap={"$4"}>
        <VStack flex={1} gap={"$4"}>
          <CardPopular
            onPress={() =>
              navigation.navigate("Detail", { lesson: populars[0].lesson })
            }
            image={populars[0].image}
            title={populars[0].lesson.title}
            flexSize={3}
          />
          <CardPopular
            onPress={() =>
              navigation.navigate("Detail", { lesson: populars[1].lesson })
            }
            image={populars[1].image}
            title={populars[1].lesson.title}
            flexSize={2}
          />
        </VStack>
        <VStack flex={1} gap={"$4"}>
          <CardPopular
            onPress={() =>
              navigation.navigate("Detail", { lesson: populars[2].lesson })
            }
            image={populars[2].image}
            title={populars[2].lesson.title}
            flexSize={1}
          />
          <CardPopular
            onPress={() =>
              navigation.navigate("Detail", { lesson: populars[3].lesson })
            }
            image={populars[3].image}
            title={populars[3].lesson.title}
            flexSize={2}
          />
        </VStack>
      </HStack>
      <Box>
        <CardPopular
          onPress={() =>
            navigation.navigate("Detail", { lesson: populars[4].lesson })
          }
          image={populars[4].image}
          title={populars[4].lesson.title}
          flexSize={1}
        />
      </Box>
    </VStack>
  );
};

export default PopularList;

const styles = StyleSheet.create({});
