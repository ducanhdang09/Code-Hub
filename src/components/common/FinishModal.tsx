import { Modal, ModalBackdrop, ModalBody, ModalContent, ModalFooter, ModalHeader, Text, Box, Center, Button, ButtonText } from "@gluestack-ui/themed";
import { useNavigation } from "@react-navigation/native";
import { CloseCircle, TickCircle } from "iconsax-react-native";
import React from "react";
import { EData } from "../../db/home-data";

type Props = {
	showModal: boolean;
	setShowModal: any;
	idData: string;
	isWinner: boolean;
};

const statusTitle = (winner: boolean) => {
	if (!winner) {
		return {
			title: "Rất tiếc",
			description: "Bạn đã giải đố không thành công",
		};
	}
	return {
		title: "Chúc mừng bạn",
		description: "Bạn đã giải đố thành công",
	};
};

const FinishModal = (props: Props) => {
	const navigation = useNavigation<any>();
	const { showModal, setShowModal, isWinner, idData } = props;
	const handleBtn = () => {
		setShowModal(false);
		if (isWinner) {
			navigation.navigate("DetailCommon", {
				id: idData,
				dataType: EData.ALL,
			});
		} else {
			navigation.navigate("TabNavigation");
		}
	};

	return (
		<Modal
			isOpen={showModal}
			onClose={() => {}}
		>
			<ModalBackdrop />
			<ModalContent p="$4">
				<ModalHeader>
					<Center w="$full">
						{isWinner ? (
							<TickCircle
								size="48"
								color="#289B1E"
							/>
						) : (
							<CloseCircle
								size="32"
								color="#A52A2A"
							/>
						)}
					</Center>
				</ModalHeader>
				<ModalBody>
					<Center gap={"$2"}>
						<Text
							textAlign="center"
							fontWeight={"$semibold"}
							fontSize={"$lg"}
							color="$dark800"
						>
							{statusTitle(isWinner).title}
						</Text>
						<Text
							textAlign="center"
							color="$dark500"
							maxWidth={156}
						>
							{statusTitle(isWinner).description}
						</Text>
					</Center>
				</ModalBody>
				<ModalFooter>
					<Box
						w={"$full"}
						alignItems="center"
					>
						<Button onPress={handleBtn}>
							<ButtonText>Xong</ButtonText>
						</Button>
					</Box>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default FinishModal;
