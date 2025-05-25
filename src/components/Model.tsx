import { StyleSheet, Text, View } from "react-native";
import React, { PropsWithChildren } from "react";
import { Box } from "@gluestack-ui/themed";

type Props = {
	show: boolean;
} & PropsWithChildren;
const Model = ({ children, show }: Props) => {
	return (
		show && (
			<Box
				flex={1}
				bgColor="rgba(0,0,0,0.5)"
				position="absolute"
				top={0}
				left={0}
				right={0}
				bottom={0}
				flexDirection="column"
				justifyContent="center"
				alignItems="center"
			>
				<Box
					bg="$white"
					position="absolute"
					rounded={8}
				>
					{children}
				</Box>
			</Box>
		)
	);
};

export default Model;

const styles = StyleSheet.create({});
