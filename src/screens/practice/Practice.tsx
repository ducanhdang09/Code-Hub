// src/screens/Practice.tsx
import React from "react";
import { Dimensions, StyleSheet, ScrollView } from "react-native";
import { Box, Text, Image, HStack } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { MotiPressable } from "moti/interactions";
import { useNavigation } from "@react-navigation/native";
import { excercises, Exercise } from "../../db/practice";

const { width } = Dimensions.get("screen");
const GAP = 16;
const CARD_WIDTH = width - GAP * 3;

type PracticeCardProps = Exercise & { index: number };

function PracticeCard({
  title,
  description,
  image,
  index,
  content,
}: PracticeCardProps) {
  const navigation = useNavigation<any>();
  return (
    <MotiPressable
      from={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", delay: index * 100 + 200 }}
      onPress={() =>
        navigation.navigate("PracticeDetail", {
          title,
          description,
          image,
          index,
          content,
        })
      }
    >
      {/* gradient border */}
      <LinearGradient
        colors={["#FFD54F", "#FFA726"]}
        start={[0, 0]}
        end={[1, 1]}
        style={styles.gradientBorder}
      >
        <Box
          rounded="$xl"
          overflow="hidden"
          style={styles.cardShadow}
          bg="$white"
        >
          {/* image */}
          <Box style={{ width: CARD_WIDTH, aspectRatio: 16 / 9 }}>
            <Image
              source={{ uri: image as string }}
              style={styles.image}
              resizeMode="cover"
              alt="image"
            />
            <LinearGradient
              colors={["transparent", "rgba(0,0,0,0.3)"]}
              start={[0, 0]}
              end={[0, 1]}
              style={StyleSheet.absoluteFill}
            />
          </Box>
          {/* text */}
          <Box p="$3">
            <HStack alignItems="center">
              <Box
                bg="$primary600"
                width={28}
                height={28}
                rounded="$full"
                alignItems="center"
                justifyContent="center"
                mr="$2"
              >
                <Text color="$white" fontWeight="$bold">
                  {index + 1}
                </Text>
              </Box>
              <Text
                fontSize="$sm"
                fontWeight="$semibold"
                flex={1}
                numberOfLines={1}
              >
                {title}
              </Text>
            </HStack>
            <Text mt="$1" fontSize="$xs" color="$coolGray500" numberOfLines={2}>
              {description}
            </Text>
          </Box>
        </Box>
      </LinearGradient>
    </MotiPressable>
  );
}

export default function Practice() {
  return (
    <Box flex={1} bg="$white">
      {/* header */}
      <Box alignItems="center" pt="$8" bg="$white">
        <LottieView
          source={require("../../assets/animations/kid-learning.json")}
          autoPlay
          loop
          style={styles.headerLottie}
        />
        <Text fontSize="$2xl" fontWeight="$bold" color="$primary600" mt="$2">
          Thử Làm Thực Hành!
        </Text>
      </Box>

      {/* grid */}
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {excercises.map((item, idx) => (
          <Box mt={"$4"} key={`item-${idx}`}>
            <PracticeCard key={idx} {...item} index={idx} />
          </Box>
        ))}
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: GAP,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  headerLottie: {
    width: width * 0.6,
    height: width * 0.6,
  },
  gradientBorder: {
    borderRadius: 20,
    padding: 2,
  },
  cardShadow: {
    borderRadius: 18,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  image: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    width: CARD_WIDTH,
    height: "100%",
  },
});
