// src/screens/Home.tsx
import React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { ScrollView, VStack, Box, Text, HStack } from "@gluestack-ui/themed";
import { MotiView } from "moti";
import SlideImage from "./component/SlideImage";
import PopularList from "./component/PopularList";
import CardList, { EDisplayType } from "./component/CardList";
import {
  headerSlideData,
  basic,
  intermediate,
  advanced,
} from "../../db/slide-data";
import LottieView from "lottie-react-native";

const { width } = Dimensions.get("screen");

export default function Home() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, backgroundColor: "#fff", paddingTop: 40 }}
    >
      {/* 1. App Header */}
      <Box bg="$white" py="$4" px="$4" style={styles.headerContainer}>
        <HStack alignItems="center" justifyContent="center">
          {/* Mascot nhỏ gọn */}
          <LottieView
            source={require("../../assets/animations/learning.json")}
            autoPlay
            loop
            style={styles.headerMascot}
          />
          {/* Tên app */}
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ type: "timing", duration: 300 }}
          >
            <Text fontSize="$2xl" fontWeight="$bold" color="$primary600">
              CodeHub
            </Text>
          </MotiView>
        </HStack>
      </Box>

      {/* 2. SlideImage với entry animation */}
      <MotiView
        from={{ opacity: 0, translateY: 30 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ type: "timing", duration: 500 }}
      >
        <SlideImage data={headerSlideData} />
      </MotiView>

      <VStack flex={1} p="$4" gap="$8" bg="$white">
        {/* 3. PopularList với fade-in */}
        <MotiView
          from={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ delay: 300, type: "spring", stiffness: 120 }}
        >
          <PopularList />
        </MotiView>

        {/* 4. Các CardList section với staggered animation */}
        {[
          { title: "Scratch Cơ bản", data: basic, type: EDisplayType.NORMAL },
          {
            title: "Scratch Trung Bình",
            data: intermediate,
            type: EDisplayType.LARGE,
          },
          {
            title: "Scratch Nâng cao",
            data: advanced,
            type: EDisplayType.GRID,
          },
        ].map((sec, i) => (
          <MotiView
            key={sec.title}
            from={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 400 + i * 150,
              type: "spring",
              stiffness: 100,
            }}
          >
            <CardList
              title={sec.title}
              data={sec.data}
              displayType={sec.type}
            />
          </MotiView>
        ))}
      </VStack>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerMascot: {
    width: 40,
    height: 40,
  },
  headerContainer: {
    borderBottomWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  heroContainer: {
    width,
    height: 200,
    backgroundColor: "#E8F1FF",
    justifyContent: "center",
    alignItems: "center",
  },
  heroLottie: {
    width: width * 0.6,
    height: 200,
    position: "absolute",
    top: 0,
  },
  heroText: {
    marginTop: 140,
    textAlign: "center",
  },
});
