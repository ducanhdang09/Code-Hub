// src/screens/PracticeDetail.tsx
import React, { useLayoutEffect, useState, useRef } from "react";
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
} from "react-native";
import { Box, Text, Button } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import LottieView from "lottie-react-native";
import { MotiView } from "moti";
import { Ionicons } from "@expo/vector-icons";

const { width } = Dimensions.get("screen");
const HEADER_HEIGHT = 200;

export default function PracticeDetail() {
  const nav = useNavigation<any>();
  const { index, title, description, image, content } = useRoute<any>().params;
  const total = content.length;
  const [step, setStep] = useState(0);

  useLayoutEffect(() => {
    nav.setOptions({ headerShown: false });
  }, []);

  // scroll stepper để step hiện tại luôn trong view
  const stepperRef = useRef<ScrollView>(null);
  const scrollTo = (i: number) => {
    const spacing = 52; // stepCircle width(40)+margin(12)
    stepperRef.current?.scrollTo({
      x: Math.max(i - 1, 0) * spacing,
      animated: true,
    });
  };

  const goPrev = () => {
    if (step > 0) {
      const ns = step - 1;
      setStep(ns);
      scrollTo(ns);
    }
  };

  const goNext = () => {
    if (step < total - 1) {
      const ns = step + 1;
      setStep(ns);
      scrollTo(ns);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F0F4F8" }}>
      {/* HEADER */}
      <Box position="relative" height={HEADER_HEIGHT}>
        <Image
          source={{ uri: image }}
          style={{ width, height: HEADER_HEIGHT }}
          resizeMode="cover"
          alt="image"
        />
        <LinearGradient
          colors={["rgba(0,0,0,0.2)", "rgba(0,0,0,0.6)"]}
          style={StyleSheet.absoluteFill}
        />
        <TouchableOpacity style={styles.backBtn} onPress={() => nav.goBack()}>
          <Ionicons name="arrow-back-circle" size={36} color="#fff" />
        </TouchableOpacity>
        <LottieView
          source={require("../../assets/animations/kid-learning.json")}
          autoPlay
          loop
          style={styles.mascot}
        />
        <Text
          fontSize="$2xl"
          fontWeight="$bold"
          color="#fff"
          style={styles.title}
        >
          Bài tập {index + 1}: {title}
        </Text>
      </Box>

      {/* CONTENT */}
      <ScrollView
        contentContainerStyle={{ padding: 16, paddingBottom: 140 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Giới thiệu */}
        <MotiView
          from={{ opacity: 0, translateY: 20 }}
          animate={{ opacity: 1, translateY: 0 }}
          transition={{ delay: 100 }}
        >
          <Box bg="$white" rounded="$lg" p="$4" style={styles.cardShadow}>
            <Text fontSize="$md" color="$coolGray700">
              {description}
            </Text>
          </Box>
        </MotiView>

        {/* Hiển thị tất cả các bước đã unlock */}
        {content.slice(0, step + 1).map((stepText: string, i: number) => (
          <MotiView
            key={i}
            from={{ opacity: 0, translateX: 50 }}
            animate={{ opacity: 1, translateX: 0 }}
            transition={{ delay: 200 + i * 100, type: "spring" }}
          >
            <Box
              bg="$white"
              rounded="$lg"
              p="$4"
              mt="$4"
              flexDirection="row"
              alignItems="flex-start"
              style={styles.cardShadow}
            >
              <Box
                width={32}
                height={32}
                rounded="$full"
                bg={i === step ? "$primary600" : "$success100"}
                alignItems="center"
                justifyContent="center"
                mr="$3"
              >
                <Text
                  color={i === step ? "#fff" : "$success600"}
                  fontWeight="$bold"
                >
                  {i + 1}
                </Text>
              </Box>
              <Text color="$coolGray800" flex={1}>
                {stepText}
              </Text>
            </Box>
          </MotiView>
        ))}
      </ScrollView>

      {/* NAVIGATION BUTTONS */}
      <Box
        position="absolute"
        bottom={16}
        left={16}
        right={16}
        flexDirection="row"
        justifyContent="space-between"
      >
        <Button
          size="md"
          onPress={goPrev}
          disabled={step === 0}
          variant="solid"
        >
          <Ionicons
            name="arrow-back"
            size={20}
            color={step === 0 ? "#ccc" : "#fff"}
          />
          <Text ml="$2" color={step === 0 ? "$coolGray300" : "#fff"}>
            Quay lại
          </Text>
        </Button>
        {step < total - 1 ? (
          <Button size="md" onPress={goNext} variant="solid" bg="$primary600">
            <Text color="$white">Tiếp theo</Text>
            <Ionicons
              name="arrow-forward"
              size={20}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          </Button>
        ) : (
          <Button
            size="md"
            onPress={() => nav.goBack()}
            variant="solid"
            bg="$success600"
          >
            <Text color="$white">Hoàn thành</Text>
            <Ionicons
              name="checkmark"
              size={20}
              color="#fff"
              style={{ marginLeft: 8 }}
            />
          </Button>
        )}
      </Box>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  backBtn: {
    position: "absolute",
    top: 16,
    left: 16,
    zIndex: 10,
  },
  mascot: {
    position: "absolute",
    top: HEADER_HEIGHT - 60,
    right: 16,
    width: 80,
    height: 80,
  },
  title: {
    position: "absolute",
    bottom: 16,
    left: 16,
    right: 100,
  },
  stepperBg: {
    borderBottomWidth: 1,
    borderColor: "#E2E8F0",
  },
  stepCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fff",
    marginRight: 12,
    alignItems: "center",
    justifyContent: "center",
  },
  cardShadow: {
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
});
