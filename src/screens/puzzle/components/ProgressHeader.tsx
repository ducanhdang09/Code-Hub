import { StyleSheet } from "react-native";
import React from "react";
import { Box, Text, HStack, Progress, ProgressFilledTrack, VStack } from "@gluestack-ui/themed";
import RatingStar from "../../../components/RatingStar";
import { UseTokenColor } from "../../../hook/UseTokenColor";
import { Timer1 } from "iconsax-react-native";

type Props = {};

const ProgressHeader = (props: Props) => {
	const colors = UseTokenColor();

	return (
		<Box gap="$2">
			<HStack justifyContent="space-between">
				<RatingStar
					rate={1}
					size={16}
				/>
				<RatingStar
					rate={2}
					size={16}
				/>
				<RatingStar
					rate={3}
					size={16}
				/>
			</HStack>
			<Progress
				value={100}
				size="sm"
			>
				<ProgressFilledTrack bg="$primary300" />
			</Progress>
			<HStack
				justifyContent="space-between"
				marginTop={-18}
			>
				<VStack
					alignItems="center"
					gap="$2"
					opacity={0}
				>
					<Box
						height={12}
						width={2}
						bg="$primary600"
					/>
					<HStack gap="$1">
						<Timer1
							size="16"
							color={colors.coolGray500}
						/>
						<Text
							color="$coolGray500"
							fontSize={"$sm"}
						>
							01:00
						</Text>
					</HStack>
				</VStack>
				<VStack
					alignItems="center"
					gap="$2"
				>
					<Box
						height={12}
						width={2}
						bg="$primary600"
					/>
					<HStack gap="$1">
						<Timer1
							size="16"
							color={colors.coolGray500}
						/>
						<Text
							color="$coolGray500"
							fontSize={"$sm"}
						>
							02:00
						</Text>
					</HStack>
				</VStack>
				<VStack
					alignItems="center"
					gap="$2"
				>
					<Box
						height={12}
						width={2}
						bg="$primary600"
					/>
					<HStack gap="$1">
						<Timer1
							size="16"
							color={colors.coolGray500}
						/>
						<Text
							color="$coolGray500"
							fontSize={"$sm"}
						>
							04:00
						</Text>
					</HStack>
				</VStack>
				<VStack
					alignItems="center"
					gap="$2"
					opacity={0}
				>
					<Box
						height={12}
						width={2}
						bg="$primary600"
					/>
					<HStack gap="$1">
						<Timer1
							size="16"
							color={colors.coolGray500}
						/>
						<Text
							color="$coolGray500"
							fontSize={"$sm"}
						>
							01:00
						</Text>
					</HStack>
				</VStack>
			</HStack>
		</Box>
	);
};

export default ProgressHeader;

const styles = StyleSheet.create({});
