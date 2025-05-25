// src/screens/QuizzScreen.tsx
import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, Dimensions, Pressable, ScrollView } from "react-native";
import { Box, Text, VStack, HStack, Button } from "@gluestack-ui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";
import { MotiView, AnimatePresence } from "moti";
import LottieView from "lottie-react-native";
import { quizzData } from "../../db/quizz";
import { getRandomArray } from "../../utils/function";

const { width } = Dimensions.get("screen");
const PROGRESS_HEIGHT = 8;

const levelLabels: Record<string, string> = {
  easy: "Dễ",
  medium: "Trung bình",
  hard: "Khó",
};

export default function QuizzScreen() {
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const level = (route.params?.level as string) || "easy";

  const [quizzes] = useState(() => getRandomArray(quizzData[level], 5));
  const [curr, setCurr] = useState(0);
  const [status, setStatus] = useState<number[]>([-1, -1, -1, -1]);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: `Quiz mức độ ${levelLabels[level]}`,
      headerStyle: { backgroundColor: "#FFD76E" },
      headerTintColor: "#333",
    });
  }, []);

  const onSelect = (i: number) => {
    if (answered) return;
    const correct = quizzes[curr].ans;
    const newStatus = [-1, -1, -1, -1];
    if (i === correct) {
      newStatus[i] = 1;
      setScore((s) => s + 1);
      setShowConfetti(true);
      // tắt confetti sau 1.5s
      setTimeout(() => setShowConfetti(false), 1500);
    } else {
      newStatus[i] = 0;
      newStatus[correct] = 1;
    }
    setStatus(newStatus);
    setAnswered(true);
  };

  const onNext = () => {
    if (curr < quizzes.length - 1) {
      setCurr((c) => c + 1);
      setAnswered(false);
      setStatus([-1, -1, -1, -1]);
    } else {
      console.log({
        level,
        score,
        total: quizzes.length,
      });
      navigation.replace("QuizzResult", {
        level,
        score,
        total: quizzes.length,
      });
    }
  };

  const progress = ((curr + (answered ? 1 : 0)) / quizzes.length) * 100;

  return (
    <Box flex={1} bg="$gray100">
      {/* Confetti khi trả lời đúng */}
      <AnimatePresence>
        {showConfetti && (
          <MotiView
            from={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 300 }}
            style={StyleSheet.absoluteFill}
          >
            <LottieView
              source={require("../../assets/animations/confetti.json")}
              autoPlay
              loop={false}
              style={StyleSheet.absoluteFill}
            />
          </MotiView>
        )}
      </AnimatePresence>

      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {/* Progress Bar */}
        <Box px="$4" pt="$4">
          <HStack alignItems="center">
            <Text fontSize="$md" fontWeight="$semibold">
              Câu {curr + 1}/{quizzes.length}
            </Text>
            <Box
              flex={1}
              mx="$2"
              bg="$gray300"
              h={PROGRESS_HEIGHT}
              rounded="$full"
            >
              <Box
                bg="$primary500"
                h={PROGRESS_HEIGHT}
                w={`${progress}%`}
                rounded="$full"
              />
            </Box>
            <Text fontSize="$md" fontWeight="$semibold">
              🎯 {score}
            </Text>
          </HStack>
        </Box>

        {/* Câu hỏi */}
        <Box mt="$6" px="$4">
          <Text fontSize="$lg" fontWeight="$bold" textAlign="center">
            {quizzes[curr].ques}
          </Text>
        </Box>

        {/* Các lựa chọn */}
        <VStack space="xl" px="$4" mt="$4">
          {quizzes[curr].choose.map((opt: string, i: number) => {
            // Xác định background và border
            let bg = "$white";
            let border = "$primary500";
            if (answered) {
              if (status[i] === 1) {
                bg = "$success100";
                border = "$success500";
              } else if (status[i] === 0) {
                bg = "$error100";
                border = "$error500";
              }
            }
            // Chọn hiệu ứng
            const animateProps: any = {};
            if (status[i] === 1) {
              animateProps.from = { scale: 1 };
              animateProps.animate = { scale: [1, 1.06, 1] };
              animateProps.transition = { type: "spring", duration: 400 };
            } else if (status[i] === 0) {
              animateProps.from = { translateX: 0 };
              animateProps.animate = { translateX: [0, -8, 8, -8, 8, 0] };
              animateProps.transition = { type: "timing", duration: 400 };
            } else {
              animateProps.from = { scale: 1, translateX: 0 };
              animateProps.animate = {};
              animateProps.transition = {};
            }

            return (
              <MotiView
                key={i}
                {...animateProps}
                style={{ borderRadius: 8, overflow: "hidden" }}
              >
                <Pressable onPress={() => onSelect(i)} disabled={answered}>
                  <Box
                    bg={bg}
                    borderWidth={2}
                    borderColor={border}
                    rounded="$lg"
                    py="$4"
                    px="$3"
                  >
                    <Text fontSize="$md" fontWeight="$semibold">
                      {opt}
                    </Text>
                  </Box>
                </Pressable>
              </MotiView>
            );
          })}
        </VStack>
      </ScrollView>

      {/* Nút Tiếp theo / Hoàn thành */}
      <Box position="absolute" bottom={32} left={16} right={16}>
        <Button
          size="lg"
          w="$full"
          onPress={onNext}
          disabled={!answered}
          opacity={answered ? 1 : 0.5}
        >
          <Text color="$white" fontWeight="$semibold">
            {curr === quizzes.length - 1 ? "Hoàn thành" : "Tiếp theo"}
          </Text>
        </Button>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({});
