import { HStack, Box } from "@gluestack-ui/themed";
import { Star1 } from "iconsax-react-native";
import React from "react";
import { UseTokenColor } from "../hook/UseTokenColor";

type Props = {
	rate: number;
	size: number;
};

const RatingStar = ({ rate, size = 32 }: Props) => {
	const colors = UseTokenColor();
	const rateArr = Array.from({ length: rate }, (_, index) => true);
	const unrateArr = Array.from({ length: 3 - rate }, (_, index) => false);

	const totalStar = [...rateArr, ...unrateArr];

	return (
		<HStack gap="$1">
			{totalStar.map((isActive, idx) => (
				<Box
					key={idx}
					mt={idx % 2 !== 0 ? "$0" : "$2"}
				>
					<Star1
						size={idx % 2 !== 0 ? (size * 5) / 4 : size}
						color={colors.amber400}
						variant={isActive ? "Bold" : "Outline"}
					/>
				</Box>
			))}
		</HStack>
	);
};

export default RatingStar;
