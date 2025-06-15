// src/screens/Onboarding.tsx
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Dimensions,
  Pressable,
  ViewToken,
  View,
} from "react-native";
import { Box, Text, Button } from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { MotiView } from "moti";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("screen");

type Slide = {
  key: string;
  title: string;
  desc: string;
  lottie: any;
  gradient: [string, string];
};

const slides: Slide[] = [
  {
    key: "1",
    title: "Learn Programming with Code Studio",
    desc: " Start today to become a professional developer!",
    lottie: require("../assets/animations/learning.json"),
    gradient: ["#FF758C", "#FF7EB3"],
  },
  {
    key: "2",
    title: "Interactive Learnings",
    desc: "Dive into coding challenges, quizzes, and hands-on activities to build real programming experience",
    lottie: require("../assets/animations/quiz.json"),
    gradient: ["#43C6AC", "#F8FFAE"],
  },
  {
    key: "3",
    title: "Code with Enzoo",
    desc: "Meet Enzo – your smart coding companion! From debugging tips to real-time feedback, Enzo helps you write better code, faster. Whether you're building apps or mastering algorithms, you're never coding alone.",
    lottie: require("../assets/animations/practice.json"),
    gradient: ["#FEB692", "#EA5455"],
  },
];

export default function Onboarding() {
  const flatRef = useRef<FlatList<Slide>>(null);
  const [index, setIndex] = useState(0);
  const nav = useNavigation<any>();

  const onViewRef = useRef((viewable: { viewableItems: ViewToken[] }) => {
    if (viewable.viewableItems.length) {
      setIndex(viewable.viewableItems[0].index ?? 0);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  const handleNext = () => {
    if (index < slides.length - 1) {
      flatRef.current?.scrollToIndex({ index: index + 1 });
    } else {
      nav.replace("TabNavigation");
    }
  };

  return (
    <Box flex={1}>
      <FlatList
        ref={flatRef}
        data={slides}
        keyExtractor={(item) => item.key}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onViewableItemsChanged={onViewRef.current}
        viewabilityConfig={viewConfigRef.current}
        renderItem={({ item }) => (
          <LinearGradient
            colors={item.gradient}
            style={styles.slide}
            start={[0, 0]}
            end={[1, 1]}
          >
            <Box style={styles.lottieContainer}>
              <LottieView
                source={item.lottie}
                autoPlay
                loop
                style={styles.lottie}
              />
            </Box>
            <MotiView
              from={{ opacity: 0, translateY: 20 }}
              animate={{ opacity: 1, translateY: 0 }}
              transition={{ delay: 200, type: "timing", duration: 500 }}
              style={styles.textBox}
            >
              <Text
                fontSize="$2xl"
                fontWeight="$bold"
                color="#fff"
                mb="$2"
                textAlign="center"
              >
                {item.title}
              </Text>
              <Text fontSize="$md" color="#fff" textAlign="center">
                {item.desc}
              </Text>
            </MotiView>
          </LinearGradient>
        )}
      />

      {/* Indicators */}
      <Box position="absolute" bottom={140} w="$full" alignItems="center">
        <Box flexDirection="row">
          {slides.map((_, i) => (
            <MotiView
              key={i}
              from={{ width: 8, opacity: 0.5 }}
              animate={{
                width: index === i ? 24 : 8,
                opacity: index === i ? 1 : 0.5,
              }}
              transition={{ type: "timing", duration: 300 }}
              style={styles.dot}
            />
          ))}
        </Box>
      </Box>

      {/* Buttons */}
      <Box
        position="absolute"
        bottom={32}
        left={16}
        right={16}
        flexDirection="row"
        alignItems="center"
      >
        {index < slides.length - 1 ? (
          <Pressable
            onPress={() => nav.replace("TabNavigation")}
            style={styles.skipBtn}
          >
            <Text style={styles.skipText}>Skip</Text>
          </Pressable>
        ) : (
          <View style={{ width: 60 }} />
        )}

        <Button onPress={handleNext} style={styles.nextBtn}>
          <Text fontWeight="$semibold" color={"#333"}>
            {index === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  slide: {
    width,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
  lottieContainer: {
    width: width * 0.75,
    height: width * 0.75,
    borderRadius: (width * 0.75) / 2,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
  },
  lottie: {
    width: "100%",
    height: "100%",
  },
  textBox: {
    paddingHorizontal: 16,
  },
  dot: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#fff",
    marginHorizontal: 6,
  },
  skipBtn: {
    padding: 8,
  },
  skipText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "600",
  },
  nextBtn: {
    flex: 1,
    marginLeft: 16,
    backgroundColor: "#fff",
    borderRadius: 24,
    justifyContent: "center",
    height: 48,
  },
});
