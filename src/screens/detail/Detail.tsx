// src/screens/Detail.tsx
import React from "react";
import {
  StyleSheet,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Box, Text } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { MotiView, AnimatePresence } from "moti";
import { ArrowLeft2 } from "iconsax-react-native";

export default function Detail() {
  const { top, bottom } = useSafeAreaInsets();
  const nav = useNavigation<any>();
  const { lesson } = useRoute<any>().params as { lesson: any };

  return (
    <Box flex={1} bg="$gray100">
      {/* 1. BACKGROUND GRADIENT + LOTTIE ANIMATION */}
      <LinearGradient
        colors={["#FFD960", "#FFB547"]}
        start={[0, 0]}
        end={[1, 1]}
        style={[styles.hero, { paddingTop: top + 32 }]}
      >
        <TouchableOpacity
          onPress={() => {
            nav.goBack();
            console.log("test");
          }}
          style={styles.backButton}
          hitSlop={{ top: 16, bottom: 16, left: 16, right: 16 }}
        >
          <ArrowLeft2 size="24" color="#fff" />
        </TouchableOpacity>

        <Text
          fontSize="$2xl"
          fontWeight="$bold"
          color="#fff"
          textAlign="center"
          mb="$2"
        >
          {lesson.title}
        </Text>

        {/* Lottie: nhân vật hoạt hình vẫy tay */}
        <LottieView
          source={require("../../assets/animations/kid-wave.json")}
          autoPlay
          loop
          style={styles.lottie}
        />
      </LinearGradient>

      {/* 2. NỘI DUNG CUỘN */}
      <ScrollView
        contentContainerStyle={{
          padding: 16,
          paddingBottom: bottom + 80,
        }}
        showsVerticalScrollIndicator={false}
      >
        <AnimatePresence>
          {/* Mô tả với animation fade-in */}
          <MotiView
            from={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ delay: 200, type: "timing", duration: 500 }}
            style={styles.card}
          >
            <Text fontSize="$lg" fontWeight="$semibold" mb="$2">
              📖 Mô tả
            </Text>
            <Text color="$coolGray700">{lesson.description}</Text>
          </MotiView>

          {/* Nội dung từng chương với slide-in */}
          {lesson.content?.map((item: string, i: number) => (
            <MotiView
              key={i}
              from={{ opacity: 0, translateX: 50 }}
              animate={{ opacity: 1, translateX: 0 }}
              transition={{ delay: 300 + i * 100, type: "spring" }}
              style={styles.card}
            >
              <Text fontSize="$md">🎯 {item}</Text>
            </MotiView>
          ))}
        </AnimatePresence>
      </ScrollView>

      {/* 3. BUTTON “BẮT ĐẦU HỌC” NHÚN NHẢY */}
      <MotiView
        from={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", loop: true, duration: 800 }}
        style={[styles.startWrapper, { bottom: bottom + 16 }]}
      >
        <Pressable
          onPress={() => {
            /* đưa sang màn học */
            nav.navigate("Learning", {
              videoUrl: lesson.videoUrl,
            });
          }}
          style={({ pressed }) => [
            styles.startButton,
            pressed && { opacity: 0.7 },
          ]}
        >
          <Text fontSize="$lg" fontWeight="$bold" color="#fff">
            🚀 Bắt đầu học
          </Text>
        </Pressable>
      </MotiView>
    </Box>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    aspectRatio: 16 / 9,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  backButton: {
    position: "absolute",
    top: 48,
    left: 16,
    padding: 8,
    borderRadius: 24,
    zIndex: 10, // <-- thêm dòng này
  },
  lottie: {
    width: 120,
    height: 120,
    marginBottom: -20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    // gluestack shadow
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  startWrapper: {
    position: "absolute",
    left: 16,
    right: 16,
  },
  startButton: {
    backgroundColor: "#FF6F61",
    borderRadius: 12,
    alignItems: "center",
    paddingVertical: 14,
  },
});
