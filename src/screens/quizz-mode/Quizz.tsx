// src/screens/Quizz.tsx
import React from "react";
import { StyleSheet, Dimensions, Pressable, ScrollView } from "react-native";
import { Box, Text, VStack } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { MotiView } from "moti";
import LottieView from "lottie-react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const { width } = Dimensions.get("screen");
const CARD_HEIGHT = 80;

interface LevelInfo {
  text: string;
  level: string;
}

const levels: LevelInfo[] = [
  { text: "Dễ", level: "easy" },
  { text: "Trung Bình", level: "medium" },
  { text: "Khó", level: "hard" },
];

const LEVEL_GRADIENTS: Record<string, [string, string]> = {
  easy: ["#76E3FF", "#4FA9FF"],
  medium: ["#FFD76E", "#FFB347"],
  hard: ["#FF6E76", "#FF3B30"],
};

const LEVEL_ICON: Record<string, string> = {
  easy: "smile-beam",
  medium: "meh",
  hard: "frown",
};

export default function Quizz() {
  const navigation = useNavigation<any>();

  return (
    <Box flex={1} bg="$white">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1} bg="$white">
          {/* 1. Animation header */}
          <Box alignItems="center" pt="$8">
            <LottieView
              source={require("../../assets/animations/quiz.json")}
              autoPlay
              loop
              style={styles.lottie}
            />
          </Box>

          {/* 2. Title */}
          <Box px="$4" mb="$4">
            <Text fontSize="$2xl" fontWeight="$bold" textAlign="center">
              Chọn cấp độ Quiz
            </Text>
          </Box>

          {/* 3. Options */}
          {/* Options */}
          <VStack space="2xl" px="$4" pt="$6">
            {levels.map((info, idx) => {
              const colors = LEVEL_GRADIENTS[info.level];
              const iconName = LEVEL_ICON[info.level];
              return (
                <MotiView
                  key={info.level}
                  from={{ translateX: -width }}
                  animate={{ translateX: 0 }}
                  transition={{
                    type: "spring",
                    delay: idx * 100 + 200,
                    stiffness: 120,
                  }}
                >
                  <Pressable
                    onPress={() =>
                      navigation.navigate("QuizzScreen", { level: info.level })
                    }
                    style={({ pressed }) => pressed && { opacity: 0.8 }}
                  >
                    <LinearGradient
                      colors={colors}
                      start={[0, 0]}
                      end={[1, 0]}
                      style={styles.card}
                    >
                      <Box
                        bg="$white"
                        p="$3"
                        rounded="$full"
                        mr="$4"
                        style={{
                          shadowColor: colors[1],
                          shadowOpacity: 0.2,
                          shadowRadius: 8,
                          elevation: 4,
                        }}
                      >
                        <FontAwesome5
                          name={iconName}
                          size={28}
                          color={colors[1]}
                        />
                      </Box>
                      <Text fontSize="$xl" fontWeight="$semibold" color="#fff">
                        {info.text}
                      </Text>
                    </LinearGradient>
                  </Pressable>
                </MotiView>
              );
            })}
          </VStack>

          {/* 4. Footer tip */}
          <Box flex={1} />
          <Box mb="$6">
            <Text color="$coolGray500" textAlign="center" fontSize="$sm">
              Bạn có thể thay đổi cấp độ bất kỳ lúc nào
            </Text>
          </Box>
        </VStack>
      </ScrollView>
    </Box>
  );
}

const styles = StyleSheet.create({
  lottie: {
    width: width * 0.6,
    height: width * 0.6,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  card: {
    height: CARD_HEIGHT,
    borderRadius: 16,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    // subtle shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
});
