import { Dimensions, StyleSheet, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Box, Text, Center, HStack, Image, Progress, ProgressFilledTrack, VStack } from "@gluestack-ui/themed";
import RatingStar from "../../components/RatingStar";
import { Button } from "@gluestack-ui/themed";
import { ArrowCircleLeft, ArrowCircleRight } from "iconsax-react-native";
import { UseTokenColor } from "../../hook/UseTokenColor";
import ProgressHeader from "./components/ProgressHeader";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { BottomRootParams } from "../../navigations/config";
import { puzzleData } from "../../db/puzzle";

type Props = {} & NativeStackScreenProps<BottomRootParams, "Puzzle">;

const { width } = Dimensions.get("screen");

const Puzzle = ({ navigation }: Props) => {
	const [indexPuzzle, setIndexPuzzle] = useState(0);
	const colors = UseTokenColor();

	const onPuzzleScreen = () => {
		navigation.navigate("PuzzleScreen", {
			id: puzzleData[indexPuzzle].id,
		});
	};

	return (
		<Box
			flex={1}
			bg="$white"
			p="$4"
			justifyContent="center"
			gap="$8"
		>
			<ProgressHeader />
			<Center gap="$4">
				<RatingStar
					rate={puzzleData[indexPuzzle].mode + 1}
					size={32}
				/>
				<Box
					p={"$4"}
					rounded={"$2xl"}
					bg="$primary50"
				>
					<Image
						source={{ uri: puzzleData[indexPuzzle].image }}
						width={width}
						height={300}
						rounded={"$2xl"}
						alt="img-puzzle"
					/>
				</Box>
			</Center>
			<HStack
				w="$full"
				justifyContent="space-between"
				alignItems="center"
			>
				<TouchableOpacity
					disabled={indexPuzzle <= 0}
					onPress={() => setIndexPuzzle((prev) => prev - 1)}
				>
					<ArrowCircleLeft
						size="40"
						color={indexPuzzle <= 0 ? colors.coolGray300 : colors.primary600}
					/>
				</TouchableOpacity>
				<Button
					rounded={"$2xl"}
					onPress={onPuzzleScreen}
				>
					<Text
						color="$white"
						fontWeight={"$semibold"}
						fontSize={20}
						lineHeight={28}
					>
						Bắt đầu
					</Text>
				</Button>
				<TouchableOpacity
					onPress={() => setIndexPuzzle((prev) => prev + 1)}
					disabled={indexPuzzle >= puzzleData.length - 1}
				>
					<ArrowCircleRight
						size="40"
						color={indexPuzzle >= puzzleData.length - 1 ? colors.coolGray300 : colors.primary600}
					/>
				</TouchableOpacity>
			</HStack>
		</Box>
	);
};

export default Puzzle;

const styles = StyleSheet.create({});
